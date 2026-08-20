import { experiences } from '../data/experience';
import { projects } from '../data/projects';

export type VirtualDirectory = {
  kind: 'directory';
  path: string;
  name: string;
  label: string;
  children: string[];
  route?: string;
};

export type VirtualFile = {
  kind: 'file';
  path: string;
  name: string;
  label: string;
  route?: string;
  terminalText?: string;
};

export type VirtualNode = VirtualDirectory | VirtualFile;

const ROOT = '~/portfolio';

const projectSlugs: Record<string, string> = {
  allInOne: 'all-in-one',
  rag: 'yilongma-rag',
  menswear: 'menswear',
  tracker: 'internship-tracker',
};

const skillNodes = [
  ['data-engineering', 'Data engineering'],
  ['ai-engineering', 'AI engineering'],
  ['cloud-devops', 'Cloud and DevOps'],
  ['mlops-delivery', 'MLOps delivery'],
] as const;

const nodes = new Map<string, VirtualNode>();

const addDirectory = (path: string, name: string, label: string, children: string[], route?: string) => {
  nodes.set(path, { kind: 'directory', path, name, label, children, route });
};

const addFile = (path: string, name: string, label: string, route?: string, terminalText?: string) => {
  nodes.set(path, { kind: 'file', path, name, label, route, terminalText });
};

const projectPaths = Object.entries(projects).map(([key, project]) => {
  const slug = projectSlugs[key] ?? key;
  const path = `${ROOT}/projects/${slug}`;
  addDirectory(path, slug, project.title, [`${path}/README.md`], `/projects/${slug}`);
  addFile(`${path}/README.md`, 'README.md', `${project.title} README`, `/projects/${slug}`, project.description);
  return path;
});

const experiencePaths = Object.keys(experiences).map((slug) => `${ROOT}/experience/${slug}`);
experiencePaths.forEach((path) => {
  const slug = path.split('/').pop() as string;
  const experience = experiences[slug];
  addFile(`${path}.md`, `${slug}.md`, `${experience.company} experience`, `/experience/${slug}`, experience.description);
});

const skillPaths = skillNodes.map(([slug, label]) => {
  const directory = `${ROOT}/skills/${slug}`;
  addDirectory(directory, slug, label, [`${directory}/SKILL.md`], `/skills/${slug}`);
  addFile(`${directory}/SKILL.md`, 'SKILL.md', `${label} capability package`, `/skills/${slug}`, `${label}: evidence-backed capability package.`);
  return directory;
});

addDirectory(`${ROOT}/experience`, 'experience', 'Experience', experiencePaths.map((path) => `${path}.md`), '/experience');
addDirectory(`${ROOT}/projects`, 'projects', 'Projects', projectPaths, '/projects');
addDirectory(`${ROOT}/skills`, 'skills', 'Skills', skillPaths, '/skills');
addDirectory(`${ROOT}`, 'portfolio', 'Jonathan’s portfolio', [
  `${ROOT}/README.md`,
  `${ROOT}/experience`,
  `${ROOT}/projects`,
  `${ROOT}/skills`,
  `${ROOT}/contact.json`,
  `${ROOT}/resume.pdf`,
]);
addFile(`${ROOT}/README.md`, 'README.md', 'Portfolio introduction', '/', 'Jonathan Ong · Data & AI Engineer · cloud foundations · DevOps delivery');
addFile(`${ROOT}/contact.json`, 'contact.json', 'Contact links', '/contact');
addFile(`${ROOT}/resume.pdf`, 'resume.pdf', 'Résumé PDF', '/resume.pdf');

export const virtualRoot = ROOT;

export function normalizePath(input: string, cwd = ROOT): string {
  const raw = input.trim();
  const absolute = raw === '~'
    ? ROOT
    : raw.startsWith(ROOT)
      ? raw
      : raw.startsWith('~/')
        ? `${ROOT}${raw.slice(1)}`
        : `${cwd}/${raw}`;
  const parts = absolute.split('/');
  const resolved: string[] = [];
  for (const part of parts) {
    if (!part || part === '.') continue;
    if (part === '..') {
      if (resolved.length > 2) resolved.pop();
      continue;
    }
    resolved.push(part);
  }
  const result = resolved.join('/');
  return result === '~' ? ROOT : result.startsWith(ROOT) ? result : ROOT;
}

export function getNode(input: string, cwd = ROOT): VirtualNode | undefined {
  return nodes.get(normalizePath(input, cwd));
}

export function listDirectory(input = ROOT, cwd = ROOT): VirtualNode[] {
  const node = getNode(input, cwd);
  if (!node || node.kind !== 'directory') return [];
  return node.children.map((child) => nodes.get(child)).filter((child): child is VirtualNode => Boolean(child));
}

export function tree(input = ROOT, cwd = ROOT): VirtualNode[] {
  const result: VirtualNode[] = [];
  const visit = (path: string) => {
    const node = nodes.get(path);
    if (!node) return;
    result.push(node);
    if (node.kind === 'directory') node.children.forEach(visit);
  };
  visit(normalizePath(input, cwd));
  return result;
}

export function routeForNode(node: VirtualNode): string | undefined {
  return node.route;
}

export function allVirtualNodes(): VirtualNode[] {
  return [...nodes.values()];
}
