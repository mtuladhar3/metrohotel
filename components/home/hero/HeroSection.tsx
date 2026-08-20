// src/components/home/hero/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import HeroTitle from './HeroTitle';
import BottomBar from './BottomBar';
import BookingBar from './BookingBar';

const SLIDES = [
  {
    id: 1,
    title: 'Terrace',
    subtitle: 'hotel',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 2,
    title: 'Luxury',
    subtitle: 'suites',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3,
    title: 'Infinity',
    subtitle: 'pool',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 4,
    title: 'Private',
    subtitle: 'haven',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Initial page load animation (Runs ONLY ONCE)
  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');

    // Static Booking Bar entrance animation on page load
    gsap.fromTo(
      '.hero-booking-bar',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
  }, []);

  // Slide transition animation (Runs on slide change)
  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');

    // Title transition
    gsap.fromTo(
      '.hero-text',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );

    // Active Slide Zoom
    gsap.fromTo(
      `.bg-slide-${currentSlide}`,
      { scale: 1.12, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, [currentSlide]);

  // Slide autoplay timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="fixed top-0 left-0 w-full h-screen z-10 flex flex-col justify-between overflow-hidden bg-slate-950 pt-24">
        {/* Background Stack */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`bg-slide-${index} absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 pointer-events-none z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col justify-between h-full">
          <HeroTitle
            title={SLIDES[currentSlide].title}
            subtitle={SLIDES[currentSlide].subtitle}
          />

          <div>
            {/* Static Booking Bar across all slides */}
            <BookingBar />

            <BottomBar
              totalSlides={SLIDES.length}
              currentSlide={currentSlide}
              onSelectSlide={(index) => setCurrentSlide(index)}
            />
          </div>
        </div>
      </section>

      {/* Spacer pushing following sections down */}
      <div className="w-full h-screen pointer-events-none" />
    </>
  );
}