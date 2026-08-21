import { HOTELS } from '@/data/hotels';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import HotelCard from './HotelCard';

export default function HotelsPage() {
  return (
    <main className="bg-[#f5f4ef] text-slate-900">
      <BreadcrumbSection
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Hotels' },
        ]}
        eyebrow="Metro Hotel Collection"
        title="Find your next stay"
        description="Discover our collection of remarkable hotels, each designed for unhurried and memorable escapes."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
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
