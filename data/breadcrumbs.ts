export interface BreadcrumbData {
  eyebrow?: string;
  title: string;
  description?: string;
  bgImage: string;
}

export const BREADCRUMB_DATA: Record<string, BreadcrumbData> = {
  about: {
    eyebrow: 'Our Philosophy',
    title: 'Who We Are',
    description: 'We have a holistic philosophy which translates into creating a harmonious environment, by wellness services that aim to detoxify.',
    bgImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80',
  },
  hotels: {
    eyebrow: 'Luxury Sanctuary',
    title: 'Our Hotels & Resorts',
    description: 'Immerse yourself in serenity across our world-class properties situated in serene valleys and alpine landscapes.',
    bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  },
  events: {
    eyebrow: 'Unforgettable Moments',
    title: 'Events & Celebrations',
    description: 'Host your extraordinary weddings, summits, and grand banquets in versatile spaces crafted for timeless experiences.',
    bgImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
  },
  blog: {
    eyebrow: 'Stories & Insights',
    title: 'Journal & News',
    description: 'Discover curated stories on luxury travel, local traditions, wellness practices, and architectural inspiration.',
    bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
  },
  offers: {
    eyebrow: 'Exclusive Packages',
    title: 'Special Offers',
    description: 'Take advantage of tailored seasonal stay packages, dining credits, and customized spa escapes.',
    bgImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80',
  },
};