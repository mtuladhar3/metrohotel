// src/components/home/why-us/whyUsData.ts
export interface Feature {
  id: number;
  iconName: 'pool' | 'interior' | 'living' | 'entertainment';
  title: string;
  description: string;
}

export const WHY_US_FEATURES: Feature[] = [
  {
    id: 1,
    iconName: 'pool',
    title: 'Private pool & garden',
    description:
      'Immerse yourself in ultimate relaxation with a private pool surrounded by lush, manicured gardens. Perfect for morning swims, sunbathing, or peaceful evenings by the water.',
  },
  {
    id: 2,
    iconName: 'interior',
    title: 'Luxurious interiors',
    description:
      'Step inside and experience thoughtfully designed spaces featuring elegant decor, warm lighting, and high-quality furnishings.',
  },
  {
    id: 3,
    iconName: 'living',
    title: 'Spacious living areas',
    description:
      'Relax with family or friends in open-concept living spaces designed for socializing, featuring plenty of natural light.',
  },
  {
    id: 4,
    iconName: 'entertainment',
    title: 'Entertainment space',
    description:
      'Host gatherings or enjoy quiet nights under the stars in a spacious outdoor area equipped with lounge seating.',
  },
];