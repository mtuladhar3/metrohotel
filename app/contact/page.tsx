import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import BreadcrumbSection from '@/components/layout/BreadcrumbSection';
import { HOTELS } from '@/data/hotels';

export type HotelContact = {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  mapUrl: string;
};

const HOTEL_CONTACTS: HotelContact[] = HOTELS.map((hotel) => {
  const contactDetails: Record<string, { address: string; phone: string; email: string }> = {
    kathmandu: {
      address: 'Durbar Marg, Kathmandu 44600, Nepal',
      phone: '+977 1-4200000',
      email: 'kathmandu@metrohotels.com',
    },
    chitwan: {
      address: 'Meghauli, Chitwan National Park, Nepal',
      phone: '+977 56-500000',
      email: 'chitwan@metrohotels.com',
    },
    pokhara: {
      address: 'Lakeside Road, Pokhara 33700, Nepal',
      phone: '+977 61-500000',
      email: 'pokhara@metrohotels.com',
    },
    dang: {
      address: 'Ghorahi Main Road, Dang, Nepal',
      phone: '+977 82-500000',
      email: 'dang@metrohotels.com',
    },
    palpa: {
      address: 'Tansen Hill Heights, Palpa, Nepal',
      phone: '+977 75-500000',
      email: 'palpa@metrohotels.com',
    },
  };

  const extra = contactDetails[hotel.id] || {
    address: hotel.location,
    phone: '+977 1-4000000',
    email: `${hotel.id}@metrohotels.com`,
  };

  return {
    id: hotel.id,
    name: hotel.name,
    location: hotel.location,
    address: extra.address,
    phone: extra.phone,
    email: extra.email,
    hours: 'Front Desk: 24/7',
    image: hotel.image,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + ' ' + hotel.location)}`,
  };
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pb-24">
      {/* 1. HERO BANNER */}
      <BreadcrumbSection
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Reach out directly to any of our 5 luxury sanctuaries across Nepal for reservations, concierge inquiries, or bespoke travel planning."
        bgImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85"
      />

      {/* 2. 5 HOTEL CONTACT CARDS GRID */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Our Properties</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
            Hotel Locations & Direct Contacts
          </h2>
        </div>

        {/* Note the added 'justify-center' utility class on the grid container below */}
        <div className="flex flex-wrap justify-center gap-8">
          {HOTEL_CONTACTS.map((hotel) => (
            <article
              key={hotel.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md"
            >
              {/* Hotel Image Header */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm backdrop-blur-md">
                  {hotel.location}
                </span>
              </div>

              {/* Details Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-medium text-slate-900 tracking-wide">{hotel.name}</h3>

                <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <span>{hotel.address}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-amber-600" />
                    <a href={`tel:${hotel.phone}`} className="hover:text-amber-600 transition-colors">
                      {hotel.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-amber-600" />
                    <a href={`mailto:${hotel.email}`} className="hover:text-amber-600 transition-colors">
                      {hotel.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 shrink-0 text-amber-600" />
                    <span>{hotel.hours}</span>
                  </li>
                </ul>

                {/* Bottom Actions */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={hotel.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    View Map <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <Link
                    href={`/hotels/${hotel.id}`}
                    className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-amber-600 transition-colors"
                  >
                    View Hotel
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}