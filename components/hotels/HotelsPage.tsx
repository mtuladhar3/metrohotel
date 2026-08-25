import { HOTELS } from '@/data/hotels';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import HotelCard from './HotelCard';
import { BREADCRUMB_DATA } from '@/data/breadcrumbs';

export default function HotelsPage() {
  const data = BREADCRUMB_DATA.hotels;
  return (

    <main className="bg-[#fff] text-slate-900">
      <BreadcrumbSection
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        bgImage={data.bgImage}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24 bg-white">
        <div className="mb-10 flex flex-col gap-3 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-700">Our hotels</p>
          <h2 className="text-4xl sm:text-5xl">A stay for every kind of escape</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOTELS.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </main>
  );
}
