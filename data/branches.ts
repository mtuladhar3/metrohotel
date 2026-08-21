// Branch / experience cards for the homepage branches section.
export interface Branch {
  id: number;
  name: string;
  image: string;
  rotation: string;
  offset: string;
}

export const BRANCHES_DATA: Branch[] = [
  {
    id: 1,
    name: 'Metro Hotel Kathmandu',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-3',
    offset: 'lg:translate-y-6',
  },
  {
    id: 2,
    name: 'Metro Hotel Chitwan',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-2',
    offset: 'lg:-translate-y-2',
  },
  {
    id: 3,
    name: 'Metro Hotel Pokhara',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-1',
    offset: 'lg:translate-y-4',
  },
  {
    id: 4,
    name: 'Metro Hotel Dang',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-3',
    offset: 'lg:-translate-y-3',
  },
  {
    id: 5,
    name: 'Metro Hotel Palpa',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-1',
    offset: 'lg:translate-y-2',
  },
];