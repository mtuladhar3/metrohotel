// src/components/home/blog/BlogSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import BlogHeader from './BlogHeader';
import BlogCard from './BlogCard';
import { BLOG_POSTS_DATA } from '@/data/blog';

export default function BlogSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = require('gsap').default || require('gsap');
    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.blog-header-anim', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-header-anim',
          start: 'top 85%',
        },
      });

      // Cards Entrance Stagger
      const cards = gsap.utils.toArray('.blog-card-anim');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.blog-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F5F5F3] text-slate-900 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <BlogHeader />

        {/* 3-Column Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start">
          {BLOG_POSTS_DATA.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}