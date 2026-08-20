// src/components/home/cta/ctaData.ts
export interface CollageImage {
  id: number;
  url: string;
  alt: string;
}

export const LEFT_COLLAGE_IMAGES: CollageImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    alt: 'Beach resort huts',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    alt: 'Diver in ocean water',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    alt: 'Luxury villa interior view',
  },
];

export const RIGHT_COLLAGE_IMAGES: CollageImage[] = [
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    alt: 'Overwater bungalow pool',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80',
    alt: 'Sailboat sunset waters',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    alt: 'Tropical paradise palm island',
  },
];