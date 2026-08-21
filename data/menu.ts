// Primary navigation menu structure.
export interface SubMenuItem {
  title: string;
  href: string;
  image?: string;
  description?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  href: string;
  bgImage?: string;
  subMenu?: SubMenuItem[];
}

export const NAV_MENU_ITEMS: MenuItem[] = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
    bgImage:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'about-us',
    title: 'About Us',
    href: '/about',
    bgImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'hotels',
    title: 'Hotels',
    href: '/hotels',
    bgImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80',
    subMenu: [
      {
        title: 'Metro Hotel Kathmandu',
        href: '/hotels/kathmandu',
        description: 'Modern luxury nestled in the vibrant heart of the ancient valley.',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      },
      {
        title: 'Metro Hotel Chitwan',
        href: '/hotels/chitwan',
        description: 'A jungle sanctuary near quiet riverbanks and rich wildlife safaris.',
        image:
          'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1600&q=85',
      },
      {
        title: 'Metro Hotel Pokhara',
        href: '/hotels/pokhara',
        description: 'Lakeside tranquility with breathtaking views of the Annapurna range.',
        image:
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
      },
      {
        title: 'Metro Hotel Dang',
        href: '/hotels/dang',
        description: 'Peaceful hospitality in the scenic and expansive Inner Terai valley.',
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      },
      {
        title: 'Metro Hotel Palpa',
        href: '/hotels/palpa',
        description: 'Hillside heritage, panoramic views, and traditional mountain charm.',
        image:
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      },
    ],
  },
  {
    id: 'offers',
    title: 'Offers',
    href: '/offers',
    bgImage:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'meetings-events',
    title: 'Meetings & Events',
    href: '/meetings-events',
    bgImage:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
    subMenu: [
      {
        title: 'Meetings & Conferences',
        href: '/meetings-events/meetings-conferences',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80',
      },
      {
        title: 'Weddings',
        href: '/meetings-events/weddings',
        image:
          'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
      },
      {
        title: 'Celebrations',
        href: '/meetings-events/celebrations',
        image:
          'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80',
      },
    ],
  },
  {
    id: 'gallery',
    title: 'Gallery',
    href: '/gallery',
    bgImage:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'blog',
    title: 'Blog',
    href: '/blog',
    bgImage:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact',
    bgImage:
      'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80',
  },
];