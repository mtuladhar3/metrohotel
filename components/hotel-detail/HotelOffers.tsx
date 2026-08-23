import type { HotelOffer } from '@/components/hotel-detail/hotelData';

type HotelOffersProps = {
  offers: HotelOffer[];
};

export default function HotelOffers({ offers }: HotelOffersProps) {
  return (
    <section id="offers" className="scroll-mt-36 bg-[#f5f4ef]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-700">Offers</p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">Seasonal stays worth planning for</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className="group grid overflow-hidden rounded-2xl bg-white shadow-lg sm:grid-cols-[1.05fr_1fr]"
            >
              <div
                className="min-h-[220px] bg-cover bg-center transition duration-700 group-hover:scale-105 sm:min-h-full"
                style={{ backgroundImage: `url(${offer.image})` }}
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-amber-700">
                  {offer.badge}
                </p>
                <h3 className="mt-3 text-2xl text-slate-900">{offer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{offer.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
