import { getNode, listDirectory, normalizePath, routeForNode, tree, virtualRoot } from './virtual-fs';

export type ParsedCommand =
  | { type: 'help' }
  | { type: 'pwd' }
  | { type: 'list'; path?: string }
  | { type: 'tree'; path?: string }
  | { type: 'cd'; path: string }
  | { type: 'cat'; path: string }
  | { type: 'open'; path: string }
  | { type: 'clear' }
  | { type: 'unknown'; input: string };

export type CommandPreview = { path: string; title: string; lines: string[]; route?: string };

export type CommandResult = {
  lines: string[];
  cwd?: string;
  preview?: CommandPreview;
  openRoute?: string;
  externalUrl?: string;
  menu?: string[];
  clear?: boolean;
};

const aliases: Record<string, string> = {
  '?': 'help', commands: 'help', where: 'pwd', dir: 'ls', find: 'tree', go: 'cd', read: 'cat', view: 'open',
  about: 'story', me: 'story', exp: 'experience', work: 'experience', project: 'projects', p: 'projects',
  skill: 'skills', capabilities: 'skills', ext: 'extensions', plugins: 'extensions', cv: 'resume',
  email: 'contact', sayhi: 'contact', cls: 'clear',
};

const commandNames = ['help', 'pwd', 'ls', 'tree', 'cd', 'cat', 'open', 'story', 'experience', 'projects', 'skills', 'extensions', 'notes', 'life', 'resume', 'contact', 'clear'];

export function parseCommand(input: string): ParsedCommand {
  const trimmed = input.trim();
  if (!trimmed) return { type: 'unknown', input: '' };
  const [rawName, ...args] = trimmed.split(/\s+/);
  const name = aliases[rawName.toLowerCase().replace(/^\//, '')] ?? rawName.toLowerCase().replace(/^\//, '');
  const path = args.join(' ');
  if (name === 'help') return { type: 'help' };
  if (name === 'pwd') return { type: 'pwd' };
  if (name === 'ls') return { type: 'list', path: path || undefined };
  if (name === 'tree') return { type: 'tree', path: path || undefined };
  if (name === 'cd') return { type: 'cd', path: path || virtualRoot };
  if (name === 'cat') return { type: 'cat', path };
  if (name === 'open') return { type: 'open', path };
  if (name === 'clear') return { type: 'clear' };
  if (['start', 'story', 'experience', 'projects', 'skills', 'extensions', 'notes', 'life', 'resume', 'contact', 'github', 'email'].includes(name)) return { type: 'open', path: name };
  return { type: 'unknown', input: trimmed };
}

const formatNode = (node: ReturnType<typeof getNode>) => node ? `${node.kind === 'directory' ? '▸' : ' '} ${node.name}${node.kind === 'directory' ? '/' : ''}  ${node.label}` : '';

function closestCommands(input: string): string[] {
  const first = input.trim().split(/\s+/)[0].toLowerCase();
  return commandNames.filter((name) => name.startsWith(first[0] ?? '')).slice(0, 3);
}

export function executeCommand(command: ParsedCommand, cwd: string): CommandResult {
  switch (command.type) {
    case 'help': return { lines: ['/help', 'Quick start: /start, /projects, /experience, /skills', 'External: /github, /email, /resume', 'Power users: pwd, ls, tree, cd, cat, open, clear'] };
    case 'pwd': return { lines: [`${cwd}  (read-only virtual filesystem)`] };
    case 'list': {
      const path = normalizePath(command.path ?? cwd, cwd);
      const node = getNode(path);
      if (!node) return { lines: [`ls: no such path: ${command.path}`] };
      if (node.kind !== 'directory') return { lines: [`ls: not a directory: ${path}`] };
      return { lines: [`${path}`, ...listDirectory(path).map(formatNode)] };
    }
    case 'tree': {
      const path = normalizePath(command.path ?? cwd, cwd);
      const node = getNode(path);
      if (!node) return { lines: [`tree: no such path: ${command.path}`] };
      return { lines: tree(path).map((item) => `${'  '.repeat(Math.max(0, item.path.split('/').length - path.split('/').length - 1))}${formatNode(item)}`) };
    }
    case 'cd': {
      const path = normalizePath(command.path, cwd);
      const node = getNode(path);
      if (!node || node.kind !== 'directory') return { lines: [`cd: not a directory: ${command.path}`] };
      return { cwd: path, lines: [`changed directory to ${path}`], preview: { path, title: node.label, lines: listDirectory(path).map((child) => `${child.kind === 'directory' ? '▸' : ' '} ${child.name}${child.kind === 'directory' ? '/' : ''}  ${child.label}`), route: node.route } };
    }
    case 'cat': {
      const path = normalizePath(command.path, cwd);
      const node = getNode(path);
      if (!node || node.kind !== 'file') return { lines: [`cat: no such file: ${command.path}`] };
      return { lines: [node.terminalText ?? `${node.label} has no terminal preview.`], preview: { path, title: node.label, lines: (node.terminalText ?? `${node.label} has no terminal preview.`).split('\n'), route: node.route } };
    }
    case 'open': {
      if (command.path === 'start') return { lines: ['/start', 'Choose a section below or use the arrow keys.'], menu: ['/projects', '/experience', '/skills', '/help'] };
      const namedRoutes: Record<string, string> = { start: '/', story: '/story', experience: '/experience', projects: '/projects', skills: '/skills', extensions: '/extensions', notes: '/notes', life: '/life', resume: '/resume.pdf', contact: '/contact' };
      const externalRoutes: Record<string, string> = { github: 'https://github.com/JonOng2002', email: 'mailto:jonongca@gmail.com' };
      if (externalRoutes[command.path]) return { externalUrl: externalRoutes[command.path], lines: [`opening ${command.path}…`] };
      const route = command.path.startsWith('/') ? command.path : namedRoutes[command.path] ?? getNode(normalizePath(command.path, cwd))?.route;
      if (!route) return { lines: [`open: no portfolio destination: ${command.path}`] };
      return { openRoute: route, lines: [`opening ${route}…`] };
    }
    case 'clear': return { clear: true, lines: [] };
    case 'unknown': {
      if (!command.input) return { lines: ['Type “help” to see available commands.'] };
      const suggestions = closestCommands(command.input);
      return { lines: [`command not found: ${command.input}`, ...(suggestions.length ? [`Did you mean: ${suggestions.join(', ')}?`] : ['Type “help” to see available commands.'])] };
    }
  }
}

export function routeForSelection(path: string): string | undefined {
  return routeForNode(getNode(path));
}
