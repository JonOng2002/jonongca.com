const GOODREADS_USER_ID = '201878506';
const API_KEY = process.env.GOODREADS_API_KEY || '';
const RSS_URL = API_KEY ? `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?key=${API_KEY}&shelf=currently-reading` : '';

function extractFirst(tag: string, xml: string): string | null {
  const cdata = xml.match(new RegExp(`<${tag}><!\\[CDATA\\[(.+?)\\]\\]><\/${tag}>`));
  if (cdata) return cdata[1];
  const plain = xml.match(new RegExp(`<${tag}>([^<]+?)<\/${tag}>`));
  return plain ? plain[1] : null;
}

async function getReading() {
  try {
    const response = await fetch(RSS_URL);
    const xml = await response.text();
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1];
      const shelf = extractFirst('user_shelves', itemXml);
      if (!shelf || !shelf.includes('currently-reading')) continue;
      const title = extractFirst('title', itemXml);
      const author = extractFirst('author_name', itemXml);
      const coverUrl = extractFirst('book_large_image_url', itemXml);
      if (title && author) {
        return { title, author: author.trim(), coverUrl: coverUrl || '' };
      }
    }
    return null;
  } catch { return null; }
}

async function getRunning() {
  try {
    const base = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
    const r = await fetch(`${base}/data/running.json`);
    if (r.ok) return await r.json();
    return null;
  } catch { return null; }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  try {
    const [reading, running] = await Promise.all([getReading(), getRunning()]);
    return res.status(200).json({ reading, running });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch widget data' });
  }
}
