'use client';

import { useState, useEffect, useRef } from 'react';
import type { Hotel } from '@/components/hotel-detail/hotelData';
import HotelBookingBar from './HotelBookingBar';
import HotelFaq from './HotelFaq';
import HotelFeatures from './HotelFeatures';
import HotelHeroGallery from './HotelHeroGallery';
import HotelOffers from './HotelOffers';
import HotelOverview from './HotelOverview';
import HotelRoomGrid from './HotelRoomGrid';
import HotelStickyHeader from './HotelStickyHeader';
import HotelGallery from './HotelGallery';

type HotelDetailPageProps = {
  hotel: Hotel;
};

export default function HotelDetailPage({ hotel }: HotelDetailPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Scroll UP when current position is less than previous position
      setIsScrollingUp(currentScrollY < lastScrollY && currentScrollY > 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#f5f4ef] text-slate-900">
      <div ref={heroRef}>
        <HotelHeroGallery hotel={hotel} />
      </div>

      {/* Sticky Header (Tab Navigation) */}
      <HotelStickyHeader
        isVisible={isSticky}
        isScrollingUp={isScrollingUp}
        hotelName={hotel.name}
      />

      {/* Booking bar stays in page flow only — sticky uses Check availability popup */}
      <HotelBookingBar hotelName={hotel.name} />

      <HotelOverview hotel={hotel} />
      <HotelRoomGrid rooms={hotel.rooms} />
      <HotelOffers offers={hotel.offers} />
      <HotelFeatures features={hotel.features} />
      <HotelFaq faqs={hotel.faqs} />
      <HotelGallery hotel={hotel} />
    </main>
  );
}