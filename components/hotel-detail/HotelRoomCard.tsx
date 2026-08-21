'use client';

import { useState, useEffect } from 'react';
import {
  Bed,
  Maximize2,
  Users,
  X,
  Sparkles,
  Coffee,
  Wifi,
  Check,
  Bath,
  ArrowUpRight,
} from 'lucide-react';
import type { HotelRoom } from '@/components/hotel-detail/hotelData';

type HotelRoomCardProps = {
  room: HotelRoom;
};

export default function HotelRoomCard({ room }: HotelRoomCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Modern media grid collection for the lightbox popup
  const roomGallery = [
    room.image,
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  ];

  // Lock body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const amenitiesGrid = [
    {
      category: 'Beds & Bedding',
      icon: Bed,
      items: [
        `Occupancy: ${room.guests} Guests`,
        room.beds,
        'Egyptian Cotton Sheets',
        'Feather & Down Pillows',
      ],
    },
    {
      category: 'Bathroom & Spa',
      icon: Bath,
      items: [
        'Rainfall Shower Head',
        'Deep Soaking Tub',
        'Luxury Bath Amenities',
        'Plush Robes & Slippers',
      ],
    },
    {
      category: 'Food & Refreshments',
      icon: Coffee,
      items: [
        'Nespresso Coffee System',
        '24/7 In-Room Dining',
        'Complimentary Bottled Water',
        'Stocked Premium Minibar',
      ],
    },
    {
      category: 'Tech & Connectivity',
      icon: Wifi,
      items: [
        'High-Speed Wi-Fi 6',
        '55" 4K Smart OLED TV',
        'Universal USB-C Ports',
        'Bose Bluetooth Speaker',
      ],
    },
  ];

  return (
    <>
      {/* Sleek Room Card */}
      <article className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
        {/* Image trigger */}
        <div
          onClick={() => setIsOpen(true)}
          className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-slate-100"
        >
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${room.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

          {/* Quick Specs Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-900 backdrop-blur-md shadow-xs">
            <Sparkles className="h-3 w-3 text-amber-600" />
            <span>Luxury Suite</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              {room.priceFrom}
            </span>
            <span className="text-[11px] font-medium text-slate-400">Taxes Included</span>
          </div>

          {/* Title Trigger */}
          <h3
            onClick={() => setIsOpen(true)}
            className="mt-2 flex cursor-pointer items-center justify-between font-serif text-2xl font-medium tracking-tight text-slate-900 transition-colors duration-300 hover:text-amber-700"
          >
            <span>{room.name}</span>
            <ArrowUpRight className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-amber-700" />
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">
            {room.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100">
              <Maximize2 className="h-3.5 w-3.5 text-slate-400" />
              <span>{room.size}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100">
              <Bed className="h-3.5 w-3.5 text-slate-400" />
              <span>{room.beds}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-100">
              <Users className="h-3.5 w-3.5 text-slate-400" />
              <span>{room.guests} Guests</span>
            </div>
          </div>
        </div>
      </article>

      {/* Modern Unique Light Theme Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-300">
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                <h2 className="font-serif text-lg font-semibold text-slate-900">{room.name}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Main Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar bg-slate-50/30">
              {/* Gallery Display */}
              <div className="space-y-3">
                {/* Main Feature View */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                  <img
                    src={roomGallery[selectedImage]}
                    alt={room.name}
                    className="h-full w-full object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                    Photo {selectedImage + 1} of {roomGallery.length}
                  </div>
                </div>

                {/* Interactive Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {roomGallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[16/10] overflow-hidden rounded-xl transition-all duration-300 ${
                        selectedImage === idx
                          ? 'ring-2 ring-slate-900 opacity-100 scale-[1.02] shadow-sm'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="Thumbnail" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Reservation Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900">{room.name}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {room.size} Space • {room.beds} • Up to {room.guests} Guests
                  </p>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Rate per night
                    </span>
                    <span className="text-2xl font-bold text-amber-700">{room.priceFrom}</span>
                  </div>
                  <button
                    type="button"
                    className="rounded-xl bg-slate-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-slate-800"
                  >
                    Book Now
                  </button>
                </div>
              </div>

              {/* Bento Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenitiesGrid.map((group) => {
                  const IconComponent = group.icon;
                  return (
                    <div
                      key={group.category}
                      className="rounded-2xl bg-white border border-slate-200 p-5 shadow-xs transition-all hover:border-slate-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-100">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h4 className="text-sm font-bold tracking-wide text-slate-900">
                          {group.category}
                        </h4>
                      </div>

                      <ul className="space-y-2.5">
                        {group.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-center gap-2.5 text-xs font-medium text-slate-600"
                          >
                            <Check className="h-3.5 w-3.5 text-amber-700 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}