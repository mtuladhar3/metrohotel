'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { EVENTS_DATA } from '@/data/events';

export default function EventDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const event = EVENTS_DATA.find((item) => item.slug === slug);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!event) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Dramatic Hero Section with Clean Vignette */}
      <section className="relative min-h-[85vh] flex flex-col justify-end px-6 sm:px-12 lg:px-20 pb-16 pt-32 overflow-hidden">
        
        {/* Full-bleed Background Image with Soft Light Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            className="object-cover scale-105 filter brightness-105 contrast-100"
          />
          {/* Light gradient overlay for text contrast at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl w-full mx-auto space-y-6">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-stone-200 pb-12">
            <div className="space-y-3 max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium tracking-widest uppercase">
                Exclusive Event Category
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-light tracking-tight text-stone-950 leading-none">
                {event.title}
              </h1>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="group relative self-start lg:self-auto px-10 py-5 rounded-full bg-stone-950 text-white font-semibold text-sm uppercase tracking-wider hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
            >
              <span>Reserve Event Space</span>
              <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Frosted Highlight Strip */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-stone-100 shadow-xl">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/80 font-semibold">Max Capacity</p>
            <p className="text-xl sm:text-2xl font-light text-stone-950 mt-1">Up to 350 Guests</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/80 font-semibold">Venue Ambience</p>
            <p className="text-xl sm:text-2xl font-light text-stone-950 mt-1">Indoor & Terraces</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/80 font-semibold">Gastronomy</p>
            <p className="text-xl sm:text-2xl font-light text-stone-950 mt-1">Michelin-Inspired</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-900/80 font-semibold">Coordination</p>
            <p className="text-xl sm:text-2xl font-light text-stone-950 mt-1">White-Glove Service</p>
          </div>
        </div>
      </section>

      {/* 3. Narrative & Interactive Feature Cards */}
      <section className="py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
              Unrivaled Hospitality
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-stone-950 leading-tight">
              Crafted to leave an enduring impression.
            </h2>
          </div>

          <p className="text-stone-700 text-lg leading-relaxed font-light">
            Host your celebration in an atmosphere where custom architecture meets seamless luxury. From soundscapes fine-tuned by audio engineers to menus tailored by executive chefs, we ensure every element aligns with your vision.
          </p>

          <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-700 text-sm font-light">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Full Private Access</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Custom Floral Styling</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>Sommelier Cellar Pairing</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>VIP Valet Service</span>
            </div>
          </div>
        </div>

        {/* Feature Focus Box (Lightened) */}
        <div className="lg:col-span-6 bg-stone-50 p-10 sm:p-12 rounded-[2.5rem] border border-stone-100 shadow-lg space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl font-light text-stone-950 tracking-wide">
            Included Event Inclusions
          </h3>

          <div className="space-y-5 relative z-10">
            {[
              'Dedicated Director of Events & On-site Butler Service',
              '4K Laser Projection & Integrated Acoustic Soundstage',
              'Private Suites for Bridal Parties & Keynote Speakers',
              'Bespoke Mixology Bar with Signature Spirits'
            ].map((inclusion, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-4 border-b border-stone-200/60 last:border-none">
                <span className="text-amber-700 font-serif text-lg">0{idx + 1}</span>
                <p className="text-stone-700 text-sm font-light leading-snug">{inclusion}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full py-4 rounded-xl bg-white hover:bg-stone-100 border border-stone-200 text-stone-900 text-xs uppercase tracking-widest font-medium transition-all relative z-10"
          >
            Inquire For Availability
          </button>
        </div>
      </section>

      {/* 4. Luxury Light Modal / Booking Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white text-stone-900 rounded-[2.5rem] p-8 sm:p-12 border border-stone-100 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:text-stone-950 hover:bg-stone-200 transition-all"
            >
              ✕
            </button>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-full flex items-center justify-center mx-auto text-2xl border border-amber-200">
                  ✓
                </div>
                <h3 className="text-3xl font-light text-stone-950">Inquiry Received</h3>
                <p className="text-stone-600 text-sm max-w-sm mx-auto font-light">
                  Our private concierge will review your preferences and respond within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-amber-800">
                    Bespoke Consultation
                  </span>
                  <h3 className="text-3xl font-light text-stone-950 mt-1">
                    Plan Your {event.title}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name *"
                      className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-stone-900 text-sm placeholder:text-stone-400"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address *"
                      className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-stone-900 text-sm placeholder:text-stone-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="number"
                      placeholder="Expected Guests *"
                      className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-stone-900 text-sm placeholder:text-stone-400"
                    />
                    <input
                      required
                      type="date"
                      className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-stone-900 text-sm placeholder:text-stone-400"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your event concept or special requirements..."
                    className="w-full px-5 py-4 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-stone-900 text-sm placeholder:text-stone-400"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-full bg-stone-950 text-white font-semibold text-xs uppercase tracking-widest hover:bg-amber-800 transition-all shadow-md"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </main>
  );
}