// Event cards for the homepage events section.
export interface EventItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  href: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    slug: 'weddings',
    title: 'Luxury Weddings & Banquets',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    href: '/meetings-events/weddings',
  },
  {
    id: 2,
    slug: 'meetings-conferences',
    title: 'Corporate Galas & Conferences',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    href: '/meetings-events/meetings-conferences',
  },
  {
    id: 3,
    slug: 'celebrations',
    title: 'Private Dinners & Receptions',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
    href: '/meetings-events/celebrations',
  },
  {
    id: 4,
    slug: 'cocktail-parties',
    title: 'Cocktail Soirées & Gatherings',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    href: '/meetings-events/cocktail-parties',
  },
];
