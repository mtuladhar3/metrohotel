// src/components/home/blog/BlogCard.tsx
'use client';

import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={post.href}
      className="group flex flex-col justify-between h-[480px] cursor-pointer blog-card-anim"
    >
      <div className="flex flex-col h-full overflow-hidden">
        {/* Image Frame: Shrinks height on hover to make room for text */}
        <div className="relative w-full h-[320px] group-hover:h-[200px] rounded-3xl overflow-hidden bg-slate-200 shrink-0 transition-all duration-500 ease-in-out">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col justify-between flex-1 pt-4 pb-2">
          {/* Title & Button Row */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {post.title}
            </h3>

            {/* Circular Action Badge */}
            <div className="w-10 h-10 rounded-full border border-slate-900/30 group-hover:border-amber-500 group-hover:bg-[#F2A765] flex items-center justify-center shrink-0 transition-all duration-300">
              <ArrowDownRight className="w-4 h-4 text-slate-800 stroke-[2] group-hover:hidden" />
              <ArrowUpRight className="w-4 h-4 text-slate-900 stroke-[2.5] hidden group-hover:block" />
            </div>
          </div>

          {/* Description Text (Hidden by default, expands in height) */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
            <div className="overflow-hidden">
              <p className="font-sans text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Static Parallel Line pinned at bottom */}
      <div className="w-full h-[1px] bg-slate-300 group-hover:bg-slate-900 transition-colors duration-300 mt-2 shrink-0" />
    </Link>
  );
}