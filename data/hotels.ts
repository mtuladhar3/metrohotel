export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
}

export const HOTELS: Hotel[] = [
  {
    id: 'maldives',
    name: 'Prakriti Resort Maldives',
    location: 'Maldives',
    description: 'Overwater villas, turquoise lagoons, and quiet island evenings.',
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'bali',
    name: 'Prakriti Sanctuary Bali',
    location: 'Bali, Indonesia',
    description: 'A restorative stay set between tropical gardens and rice terraces.',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'fiji',
    name: 'Prakriti Retreat Fiji',
    location: 'Fiji',
    description: 'Private beachfront moments and warm South Pacific hospitality.',
    image:
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'seychelles',
    name: 'Prakriti Estate Seychelles',
    location: 'Seychelles',
    description: 'Granite coves, lush hillsides, and a slower pace by the sea.',
    image:
      'https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'bora-bora',
    name: 'Prakriti Haven Bora Bora',
    location: 'French Polynesia',
    description: 'A lagoon-side escape with uninterrupted views of Mount Otemanu.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  },
];
