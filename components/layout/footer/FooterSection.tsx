// Site-wide footer section.
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FooterBackground from './FooterBackground';
import FooterBrand from './FooterBrand';
import FooterMiddleRow from './FooterMiddleRow';
import FooterBottomBar from './FooterBottomBar';

export default function FooterSection() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Big Typography Reveal
      gsap.from('.footer-brand-anim', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      });

      // Middle Row Animation
      gsap.from('.footer-middle-anim', {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      });

      // Bottom Bar Animation
      gsap.from('.footer-bottom-anim', {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative z-20 w-full bg-black text-white pt-12 pb-8 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-between"
    >
      {/* Background Layer */}
      <FooterBackground />

      {/* Content Stack */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[400px]">
        {/* Brand Name Title */}
        <FooterBrand />

        {/* Middle Address & CTA */}
        <FooterMiddleRow />

        {/* Bottom Nav, Copyright & Socials */}
        <FooterBottomBar />
      </div>
    </footer>
  );
}
