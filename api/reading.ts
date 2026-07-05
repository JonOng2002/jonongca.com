const GOODREADS_USER_ID = '201878506';
const API_KEY = process.env.GOODREADS_API_KEY || '';
const RSS_URL = API_KEY ? `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?key=${API_KEY}&shelf=currently-reading` : '';

interface BookData {
  title: string;
  author: string;
  coverUrl: string;
  url: string;
}

function extractFirst(tag: string, xml: string): string | null {
  const cdata = xml.match(new RegExp(`<${tag}><!\\[CDATA\\[(.+?)\\]\\]><\/${tag}>`));
  if (cdata) return cdata[1];
  const plain = xml.match(new RegExp(`<${tag}>([^<]+?)<\/${tag}>`));
  return plain ? plain[1] : null;
}

function parseItems(xml: string): BookData[] {
  const items: BookData[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];
    const shelf = extractFirst('user_shelves', itemXml);
    if (!shelf || !shelf.includes('currently-reading')) continue;

    const title = extractFirst('title', itemXml);
    const author = extractFirst('author_name', itemXml);
    const coverUrl = extractFirst('book_large_image_url', itemXml);
    const link = extractFirst('link', itemXml);

    if (title && author) {
      items.push({
        title,
        author: author.trim(),
        coverUrl: coverUrl || '',
        url: link || 'https://goodreads.com/jonongca',
      });
    }
  }

  return items;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  try {
    const response = await fetch(RSS_URL);
    const xml = await response.text();

    const books = parseItems(xml);

    return res.status(200).json({ book: books[0] || null });
  } catch (error) {
    console.error('Error fetching Goodreads data:', error);
    return res.status(500).json({ error: 'Failed to fetch reading data' });
  }
}
