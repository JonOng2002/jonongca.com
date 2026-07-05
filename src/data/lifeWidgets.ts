export interface WidgetConfig {
  id: string;
  label: string;
  subtitle: string;
  accent: string;
  accentHover: string;
  bg: string;
  href?: string;
  items: {
    image?: string;
    pos: string;
    rot: string;
    scale: string;
    opacity: string;
    size: string;
    z: string;
    hoverRot: string;
    hoverScale: string;
    hoverOpacity: string;
  }[];
  customIcon?: boolean;
}

export const lifeWidgets: WidgetConfig[] = [
  {
    id: 'backloggd',
    label: 'Backloggd',
    subtitle: 'Games I\'ve played, paused, or still think about',
    accent: '#E2A03F',
    accentHover: '#C88A2F',
    bg: 'linear-gradient(135deg, #FDF8F0, #F7F2E8)',
    href: 'https://backloggd.com/u/JonOng/games/',
    items: [
      { image: '/images/gaming/tft-bg.jpg', pos: 'right -10% bottom -10%', rot: '-4deg', scale: '1.15', opacity: '0.30', size: '55%', z: '0', hoverRot: '-8deg', hoverScale: '1.3', hoverOpacity: '0.45' },
    ],
  },
  {
    id: 'goodreads',
    label: 'Goodreads',
    subtitle: 'Books, notes, and ideas I\'m collecting',
    accent: '#8B5E3C',
    accentHover: '#6B3E1C',
    bg: 'linear-gradient(135deg, #FDF9F5, #F5EFE8)',
    href: 'https://goodreads.com/jonongca',
    customIcon: true,
    items: [
      { image: '/images/reading/books-bg.jpg', pos: 'right -5% bottom -5%', rot: '-3deg', scale: '1.1', opacity: '0.30', size: '50%', z: '0', hoverRot: '-6deg', hoverScale: '1.25', hoverOpacity: '0.45' },
    ],
  },
  {
    id: 'running',
    label: 'Running',
    subtitle: 'Weekly distance & training log',
    accent: '#E05D3A',
    accentHover: '#C04D2A',
    bg: 'linear-gradient(135deg, #FDF5F2, #F8EFEA)',
    href: 'https://www.strava.com/athletes/93728422',
    customIcon: true,
    items: [],
  },
  {
    id: 'photos',
    label: 'Photos',
    subtitle: 'Travel, cats, and small memories',
    accent: '#5B8C5A',
    accentHover: '#4A7A49',
    bg: 'linear-gradient(135deg, #F4F8F2, #EDF3E8)',
    customIcon: true,
    items: [
      { image: '/cats/cats.jpg', pos: 'left -15% bottom -10%', rot: '4deg', scale: '0.9', opacity: '0.28', size: '45%', z: '0', hoverRot: '8deg', hoverScale: '1.1', hoverOpacity: '0.40' },
      { image: '/images/life/trtl/preview.jpeg', pos: 'right -10% top -10%', rot: '-6deg', scale: '0.85', opacity: '0.22', size: '40%', z: '1', hoverRot: '-10deg', hoverScale: '1.05', hoverOpacity: '0.35' },
    ],
  },
  {
    id: 'ama',
    label: 'Ask Me Anything',
    subtitle: 'Questions, thoughts, and conversations',
    accent: '#0FA36B',
    accentHover: '#0A8A5A',
    bg: 'linear-gradient(135deg, #F2F8F4, #E8F2EC)',
    customIcon: true,
    items: [],
  },
  {
    id: 'notes',
    label: 'Notes',
    subtitle: 'Monthly engineering reflections & learning logs',
    accent: '#3A7D5A',
    accentHover: '#2A6D4A',
    bg: 'linear-gradient(135deg, #F4F8F5, #ECF4EE)',
    href: 'https://jonongca.notion.site/apache-certification',
    customIcon: true,
    items: [],
  },
];
