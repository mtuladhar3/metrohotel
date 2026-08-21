import { notFound } from 'next/navigation';
import HotelDetailPage from '@/components/hotel-detail/HotelDetailPage';
import { getAllHotelSlugs, getHotelBySlug } from '@/components/hotel-detail/hotelData';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllHotelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);

  if (!hotel) {
    return { title: 'Hotel not found' };
  }

  return {
    title: `${hotel.name} | Metro Hotel`,
    description: hotel.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);

  if (!hotel) {
    notFound();
  }

  return <HotelDetailPage hotel={hotel} />;
}
