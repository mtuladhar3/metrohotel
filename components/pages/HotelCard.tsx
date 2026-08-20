import type { Hotel } from '@/data/hotels';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div
        className="aspect-[4/3] bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${hotel.image})` }}
      />
      <div className="p-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber-700">
          {hotel.location}
        </p>
        <h2 className="font-serif text-2xl text-slate-900">{hotel.name}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{hotel.description}</p>
      </div>
    </article>
  );
}
