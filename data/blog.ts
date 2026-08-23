// Blog post content for the homepage blog section.
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 1,
    slug: 'garden-open-kitchen',
    title: 'Garden Open Kitchen Is Part Of The Hotel With Very Rich & Delicious Menu',
    description:
      'Discover farm-to-table dining prepared right before your eyes in our lush garden setting with seasonal ingredients.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    href: '/blog/garden-open-kitchen',
  },
  {
    id: 2,
    slug: 'live-jazz-nights',
    title: 'Experience Live Jazz Nights That Bring Soul To Every Dinner',
    description:
      'The Michelin-Starred Mirall Restaurant, Once Villa Baracchi’s Lemon House, Features Elegant Dining And A Terrace With Views Of Cortona.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    href: '/blog/live-jazz-nights',
  },
  {
    id: 3,
    slug: 'sunset-rooftop-dining',
    title: 'Sunset Rooftop Dining Is The Perfect Way To End Your Day In Style',
    description:
      'Savor handcrafted cocktails and signature dishes while watching breathtaking golden hour views across the skyline.',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1000&q=80',
    href: '/blog/sunset-rooftop-dining',
  },
];
