// src/components/home/hero/BookingBar.tsx
'use client';

import { useState } from 'react';
import { Building2, Calendar, Users, ChevronDown, Search } from 'lucide-react';

export default function BookingBar() {
  const [selectedBranch, setSelectedBranch] = useState('Terrace Bali');
  const [checkIn, setCheckIn] = useState('');
  const [guests, setGuests] = useState('2 Adults, 0 Children');

  return (
    <div className="hero-booking-bar relative z-30 mb-8 mx-auto w-full max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-white/15 bg-black/40 p-3 text-white shadow-2xl backdrop-blur-md sm:p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 items-center gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* 1. Hotel / Branch Selector */}
          <div className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 transition-colors hover:bg-white/15">
            <Building2 className="h-5 w-5 shrink-0 text-white/70 transition-colors group-hover:text-white" />
            <div className="flex min-w-0 flex-1 flex-col">
              <label
                htmlFor="hotel-branch-select"
                className="cursor-pointer text-[10px] font-medium uppercase tracking-wider text-white/60"
              >
                Hotel / Branch
              </label>
              <select
                id="hotel-branch-select"
                aria-label="Select Hotel or Branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="appearance-none cursor-pointer truncate bg-transparent pr-4 text-xs font-medium text-white focus:outline-none sm:text-sm"
              >
                <option value="Terrace Bali" className="bg-slate-900 text-white">
                  Terrace Bali Resort
                </option>
                <option value="Terrace Maldives" className="bg-slate-900 text-white">
                  Terrace Maldives Sanctuary
                </option>
                <option value="Terrace Santorini" className="bg-slate-900 text-white">
                  Terrace Santorini Suites
                </option>
              </select>
            </div>
            <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-white/50" />
          </div>

          {/* 2. Check-in / Check-out */}
          <div className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 transition-colors hover:bg-white/15">
            <Calendar className="h-5 w-5 shrink-0 text-white/70 transition-colors group-hover:text-white" />
            <div className="flex min-w-0 flex-1 flex-col">
              <label
                htmlFor="check-in-date"
                className="cursor-pointer text-[10px] font-medium uppercase tracking-wider text-white/60"
              >
                Check-in / Check-out
              </label>
              <div className="flex items-center gap-2 text-xs font-medium text-white sm:text-sm">
                <input
                  id="check-in-date"
                  type="date"
                  aria-label="Check-in and check-out date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-xs text-white focus:outline-none [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          {/* 3. Guests Selector */}
          <div className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 transition-colors hover:bg-white/15">
            <Users className="h-5 w-5 shrink-0 text-white/70 transition-colors group-hover:text-white" />
            <div className="flex min-w-0 flex-1 flex-col">
              <label
                htmlFor="guests-select"
                className="cursor-pointer text-[10px] font-medium uppercase tracking-wider text-white/60"
              >
                Guests
              </label>
              <select
                id="guests-select"
                aria-label="Select number of guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="appearance-none cursor-pointer truncate bg-transparent pr-4 text-xs font-medium text-white focus:outline-none sm:text-sm"
              >
                <option value="1 Adult" className="bg-slate-900 text-white">
                  1 Adult
                </option>
                <option value="2 Adults, 0 Children" className="bg-slate-900 text-white">
                  2 Adults
                </option>
                <option value="2 Adults, 1 Child" className="bg-slate-900 text-white">
                  2 Adults, 1 Child
                </option>
                <option value="2 Adults, 2 Children" className="bg-slate-900 text-white">
                  2 Adults, 2 Children
                </option>
              </select>
            </div>
            <ChevronDown className="pointer-events-none absolute right-3 h-4 w-4 text-white/50" />
          </div>

          {/* 4. Check Availability Button */}
          <button
            type="submit"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white text-xs font-medium uppercase tracking-wider text-slate-900 shadow-lg transition-all duration-300 hover:bg-slate-100 active:scale-95 sm:text-sm"
          >
            <Search className="h-4 w-4" />
            <span>Check Availability</span>
          </button>
        </form>
      </div>
    </div>
  );
}