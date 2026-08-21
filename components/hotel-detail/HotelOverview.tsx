import type { Hotel } from '@/components/hotel-detail/hotelData';

type HotelOverviewProps = {
  hotel: Hotel;
};

export default function HotelOverview({ hotel }: HotelOverviewProps) {
  const { overview, location } = hotel;

  return (
    <section id="overview" className="scroll-mt-36 mx-auto max-w-7xl px-6 py-6 sm:px-10 sm:py-10">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-700">Overview</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">{overview.headline}</h2>
          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">{overview.body}</p>

          <ul className="mt-8 space-y-3">
            {overview.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-800 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            {location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <div
            className="col-span-2 aspect-[16/10] rounded-2xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${overview.images[0]})` }}
          />
          <div
            className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url(${overview.images[1]})` }}
          />
          <div
            className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url(${hotel.image})` }}
          />
        </div>
      </div>
    </section>
  );
}
