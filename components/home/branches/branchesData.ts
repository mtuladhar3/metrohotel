// src/components/home/branches/branchesData.ts
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
    name: 'Private Island Hopping',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-3',
    offset: 'lg:translate-y-6',
  },
  {
    id: 2,
    name: 'Faith-Inspired Heritage Talks',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-2',
    offset: 'lg:-translate-y-2',
  },
  {
    id: 3,
    name: 'Botanical Garden Walks',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-1',
    offset: 'lg:translate-y-4',
  },
  {
    id: 4,
    name: 'Beachside Bonfires',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    rotation: 'rotate-3',
    offset: 'lg:-translate-y-3',
  },
  {
    id: 5,
    name: 'Ethical Cooking Workshops',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    rotation: '-rotate-1',
    offset: 'lg:translate-y-2',
  },
];