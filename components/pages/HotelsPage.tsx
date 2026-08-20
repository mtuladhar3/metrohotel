import { HOTELS } from '@/data/hotels';
import HotelCard from './HotelCard';

export default function HotelsPage() {
  return (
    <main className="bg-[#f5f4ef] text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-center text-white sm:px-10 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-300">Metro Hotel Collection</p>
          <h1 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Find your next stay</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Discover our collection of remarkable hotels, each designed for unhurried and memorable escapes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 flex flex-col gap-3 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-700">Our hotels</p>
          <h2 className="font-serif text-4xl sm:text-5xl">A stay for every kind of escape</h2>
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
