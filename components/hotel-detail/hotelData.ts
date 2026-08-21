export interface HotelRoom {
  id: string;
  name: string;
  size: string;
  beds: string;
  guests: string;
  description: string;
  image: string;
  priceFrom: string;
}

export interface HotelFeature {
  id: string;
  title: string;
  description: string;
  icon: 'waves' | 'spa' | 'utensils' | 'wifi' | 'dumbbell' | 'palm' | 'car' | 'concierge';
}

export interface HotelOffer {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
}

export interface HotelFaq {
  id: string;
  question: string;
  answer: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  overview: {
    headline: string;
    body: string;
    highlights: string[];
    images: [string, string];
  };
  gallery: string[];
  rooms: HotelRoom[];
  features: HotelFeature[];
  offers: HotelOffer[];
  faqs: HotelFaq[];
}

const sharedFeatures = (variants: Partial<Record<HotelFeature['icon'], string>> = {}): HotelFeature[] => [
  {
    id: 'pool',
    title: 'Infinity pool',
    description: variants.waves ?? 'A quiet water edge with long mountain horizons and morning swim hours.',
    icon: 'waves',
  },
  {
    id: 'spa',
    title: 'Spa & wellness',
    description: variants.spa ?? 'Treatments drawn from local Himalayan rituals and restorative therapies.',
    icon: 'spa',
  },
  {
    id: 'dining',
    title: 'Signature dining',
    description: variants.utensils ?? 'Seasonal menus, farm-to-table local ingredients, and intimate evening service.',
    icon: 'utensils',
  },
  {
    id: 'wifi',
    title: 'High-speed Wi‑Fi',
    description: variants.wifi ?? 'Reliable connectivity across rooms, lounges, and outdoor terraces.',
    icon: 'wifi',
  },
  {
    id: 'fitness',
    title: 'Fitness studio',
    description: variants.dumbbell ?? 'Light-filled training space with guided yoga sessions on request.',
    icon: 'dumbbell',
  },
  {
    id: 'garden',
    title: 'Private garden grounds',
    description: variants.palm ?? 'Reserved tranquil grounds with native flora and shade loungers.',
    icon: 'palm',
  },
  {
    id: 'transfer',
    title: 'Airport transfers',
    description: variants.car ?? 'Seamless arrivals arranged by our guest experience team.',
    icon: 'car',
  },
  {
    id: 'concierge',
    title: '24/7 concierge',
    description: variants.concierge ?? 'Local recommendations, trekking guidance, and bespoke day planning.',
    icon: 'concierge',
  },
];

export const HOTELS: Hotel[] = [
  {
    id: 'kathmandu',
    name: 'Metro Hotel Kathmandu',
    location: 'Kathmandu, Nepal',
    description: 'Modern luxury nestled in the vibrant heart of the ancient valley.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    overview: {
      headline: 'A sophisticated sanctuary in Nepal’s cultural capital',
      body: 'Metro Hotel Kathmandu seamlessly blends modern urban comfort with authentic Nepalese craftsmanship. Located close to historic heritage sites, it offers a peaceful refuge after exploring the bustling city streets.',
      highlights: ['Rooftop city view bar', 'Himalayan spa treatments', 'Central location'],
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=85',
    ],
    rooms: [
      {
        id: 'deluxe-city-view',
        name: 'Deluxe City View Room',
        size: '42 m²',
        beds: 'King bed',
        guests: '2 guests',
        description: 'Floor-to-ceiling windows with panoramic vistas of the Kathmandu valley.',
        image:
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $140 / night',
      },
      {
        id: 'executive-suite',
        name: 'Executive Suite',
        size: '75 m²',
        beds: 'King bed',
        guests: '2–3 guests',
        description: 'Spacious separate living area with luxury bath and club lounge access.',
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $230 / night',
      },
      {
        id: 'presidential-residence',
        name: 'Presidential Residence',
        size: '130 m²',
        beds: '2 bedrooms',
        guests: '4 guests',
        description: 'Expansive penthouse layout with private terrace and dedicated butler service.',
        image:
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $450 / night',
      },
    ],
    features: sharedFeatures({
      waves: 'Rooftop heated infinity pool overlooking the Kathmandu skyline.',
      car: 'Direct airport pickups from Tribhuvan International Airport.',
    }),
    offers: [
      {
        id: 'valley-escape',
        title: 'Capital City Escape',
        description: 'Enjoy complementary breakfast and late airport checkout when stay 3 nights or longer.',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
      },
      {
        id: 'cultural-weekend',
        title: 'Heritage Experience',
        description: 'Includes guided morning walks through local heritage sites and complimentary tea service.',
        badge: 'Culture',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    faqs: [
      {
        id: 'check-in',
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in begins at 2:00 PM and check-out is at 12:00 PM. Early check-in and late checkout can be arranged subject to availability.',
      },
      {
        id: 'transfers',
        question: 'Do you arrange airport transfers from TIA?',
        answer: 'Yes. Our private hotel cars can pick you up directly from Tribhuvan International Airport.',
      },
      {
        id: 'children',
        question: 'Are children welcome?',
        answer: 'Families are welcome. Extra beds and cribs can be placed in suites upon request.',
      },
      {
        id: 'dining',
        question: 'Are dietary requirements accommodated?',
        answer: 'Our chefs serve both traditional Nepalese and global cuisines, with full vegetarian, vegan, and gluten-free accommodations.',
      },
    ],
  },
  {
    id: 'chitwan',
    name: 'Metro Hotel Chitwan',
    location: 'Chitwan, Nepal',
    description: 'A jungle sanctuary near quiet riverbanks and rich wildlife safaris.',
    image:
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
    overview: {
      headline: 'Subtropical wilderness on the edge of Chitwan National Park',
      body: 'Metro Hotel Chitwan brings refined hospitality to the edge of the jungle. Wake up to bird calls along the Rapti river, embark on wildlife safaris, and return to peaceful gardens in the evening.',
      highlights: ['Jungle safari tours', 'Riverfront dining', 'Tharu cultural performances'],
      images: [
        'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85',
    ],
    rooms: [
      {
        id: 'jungle-cottage',
        name: 'Jungle Villa Cottage',
        size: '55 m²',
        beds: 'King bed',
        guests: '2 guests',
        description: 'Private cottage surrounded by lush native trees with a shaded balcony.',
        image:
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $160 / night',
      },
      {
        id: 'river-view-suite',
        name: 'River View Suite',
        size: '80 m²',
        beds: 'King bed',
        guests: '2–3 guests',
        description: 'Overlooking the Rapti river with sunset views and outdoor lounging space.',
        image:
          'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $240 / night',
      },
      {
        id: 'family-safari-villa',
        name: 'Family Safari Villa',
        size: '120 m²',
        beds: '2 bedrooms',
        guests: '4 guests',
        description: 'Thatch-roof architectural villa crafted for peaceful family retreats.',
        image:
          'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $380 / night',
      },
    ],
    features: sharedFeatures({
      palm: 'Shaded riverfront lounge areas for wildlife spotting.',
      utensils: 'Al-fresco riverside dining serving fresh organic ingredients.',
    }),
    offers: [
      {
        id: 'safari-package',
        title: 'Wildlife & Safari Special',
        description: 'Includes daily jeep safaris, canoe rides, and guided forest walks.',
        badge: 'Adventure',
        image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    faqs: [
      {
        id: 'check-in',
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM.',
      },
      {
        id: 'safari',
        question: 'Can safari activities be booked directly through the hotel?',
        answer: 'Yes, our naturalists assist with booking jeep safaris, bird watching walks, and river boat trips.',
      },
    ],
  },
  {
    id: 'pokhara',
    name: 'Metro Hotel Pokhara',
    location: 'Pokhara, Nepal',
    description: 'Lakeside tranquility with breathtaking views of the Annapurna range.',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
    overview: {
      headline: 'Lakeside elegance framed by mountain peaks',
      body: 'Situated steps away from Phewa Lake, Metro Hotel Pokhara is designed for ultimate relaxation and adventure. Experience pristine mountain vistas, serene lake breezes, and calm luxury.',
      highlights: ['Phewa Lake views', 'Annapurna mountain panorama', 'Heated outdoor pool'],
      images: [
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85',
    ],
    rooms: [
      {
        id: 'lake-view-room',
        name: 'Lake View Deluxe Room',
        size: '48 m²',
        beds: 'King bed',
        guests: '2 guests',
        description: 'Private balcony facing Phewa Lake and Fishtail Mountain (Machhapuchhre).',
        image:
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $170 / night',
      },
      {
        id: 'himalayan-suite',
        name: 'Himalayan Panorama Suite',
        size: '85 m²',
        beds: 'King bed',
        guests: '2–3 guests',
        description: 'Corner suite offering 180-degree views of the snow-capped mountain range.',
        image:
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $280 / night',
      },
      {
        id: 'pokhara-residence',
        name: 'Lakefront Royal Suite',
        size: '140 m²',
        beds: '2 bedrooms',
        guests: '4 guests',
        description: 'Grand penthouse with private outdoor jacuzzi overlooking the water.',
        image:
          'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $490 / night',
      },
    ],
    features: sharedFeatures({
      waves: 'Heated lakeside pool looking out towards World Peace Pagoda.',
      spa: 'Post-trekking deep tissue massages and Ayurvedic healing treatments.',
    }),
    offers: [
      {
        id: 'wellness-retreat',
        title: 'Pokhara Wellness Retreat',
        description: 'Daily yoga sessions, daily spa credits, and complimentary boat rides.',
        badge: 'Relaxation',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    faqs: [
      {
        id: 'check-in',
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is from 2:00 PM and check-out is by 12:00 PM.',
      },
      {
        id: 'transfers',
        question: 'How far are you from Pokhara Airport?',
        answer: 'We are roughly a 15-minute drive from Pokhara Regional International Airport.',
      },
    ],
  },
  {
    id: 'dang',
    name: 'Metro Hotel Dang',
    location: 'Dang, Nepal',
    description: 'Peaceful hospitality in the scenic and expansive Inner Terai valley.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    overview: {
      headline: 'A serene retreat in Western Nepal’s valley',
      body: 'Metro Hotel Dang offers an inviting mix of modern comfort and regional warmth in mid-western Nepal. It serves as an ideal haven for business travelers, culture seekers, and long journeys across the Terai.',
      highlights: ['Spacious banquet lawns', 'Local Tharu-inspired cuisine', 'Peaceful garden stay'],
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=85',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85',
    ],
    rooms: [
      {
        id: 'superior-room',
        name: 'Superior Room',
        size: '38 m²',
        beds: 'King or Twin beds',
        guests: '2 guests',
        description: 'Clean, spacious interiors equipped with high-speed internet and working desk.',
        image:
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $85 / night',
      },
      {
        id: 'valley-suite',
        name: 'Valley View Suite',
        size: '65 m²',
        beds: 'King bed',
        guests: '2–3 guests',
        description: 'Elegantly furnished suite with a cozy living area and garden views.',
        image:
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $140 / night',
      },
    ],
    features: sharedFeatures({
      concierge: 'Guidance to nearby ancient temples and cultural landmarks in Dang.',
    }),
    offers: [
      {
        id: 'business-stay',
        title: 'Extended Corporate Stay',
        description: 'Special discounted rates for extended business stays, including laundry and breakfast.',
        badge: 'Corporate',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    faqs: [
      {
        id: 'check-in',
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is at 2:00 PM and check-out is at 12:00 PM.',
      },
      {
        id: 'event-space',
        question: 'Do you have facilities for events and conferences?',
        answer: 'Yes, we feature halls and garden spaces suitable for corporate meetings and family functions.',
      },
    ],
  },
  {
    id: 'palpa',
    name: 'Metro Hotel Palpa',
    location: 'Palpa, Nepal',
    description: 'Hillside heritage, panoramic views, and traditional mountain charm.',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    overview: {
      headline: 'Heritage charm perched atop historic Tansen hills',
      body: 'Metro Hotel Palpa combines traditional Newari and Palpali heritage with contemporary hospitality. Enjoy crisp mountain air, historic cobblestone town walks, and cloud-filled valley mornings.',
      highlights: ['Panoramic hill views', 'Local Palpali dining', 'Heritage walk access'],
      images: [
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85',
      ],
    },
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85',
    ],
    rooms: [
      {
        id: 'heritage-room',
        name: 'Heritage Hill Room',
        size: '40 m²',
        beds: 'King bed',
        guests: '2 guests',
        description: 'Warm wood finishes with views looking out over the Tansen hill slopes.',
        image:
          'https://images.unsplash.com/photo-1573841231130-8b25b0650439?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $95 / night',
      },
      {
        id: 'tansen-suite',
        name: 'Tansen Panorama Suite',
        size: '70 m²',
        beds: 'King bed',
        guests: '2–3 guests',
        description: 'Elevated terrace suite offering morning fog and sunset views across the valleys.',
        image:
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
        priceFrom: 'From $160 / night',
      },
    ],
    features: sharedFeatures({
      utensils: 'Serving traditional Palpali delicacies alongside global cuisines.',
    }),
    offers: [
      {
        id: 'heritage-getaway',
        title: 'Palpa Hill Getaway',
        description: 'Complimentary guided walk through historic Tansen bazaar and Rani Mahal excursion planning.',
        badge: 'Culture',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
      },
    ],
    faqs: [
      {
        id: 'check-in',
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is at 2:00 PM and check-out is at 12:00 PM.',
      },
      {
        id: 'sightseeing',
        question: 'Can you arrange visits to Rani Mahal (The Taj Mahal of Nepal)?',
        answer: 'Yes, our local concierge team organizes jeep transfers and tours to Rani Mahal along the Kaligandaki river.',
      },
    ],
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return HOTELS.find((hotel) => hotel.id === slug);
}

export function getAllHotelSlugs(): string[] {
  return HOTELS.map((hotel) => hotel.id);
}