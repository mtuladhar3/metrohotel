'use client';

import { ArrowRight } from 'lucide-react';

type HotelBookingBarProps = {
  hotelName: string;
};

export default function HotelBookingBar({ hotelName }: HotelBookingBarProps) {
  return (
    <div className="relative z-20 px-6 sm:mt-10 sm:px-10 lg:-mt-14">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white shadow-xl">
        <form
          className="mx-auto grid max-w-7xl gap-4 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-[1.1fr_1fr_1fr_auto] lg:items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Hotel
            </span>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
              {hotelName}
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Check in
            </span>
            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Check out
            </span>
            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
            />
          </label>

          <button
            type="submit"
            className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 sm:h-[52px]"
          >
            Check availability
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
