// src/components/home/hero/BookingBar.tsx
'use client';

import { useState } from 'react';
import { Building2, Calendar, Users, ChevronDown, Search } from 'lucide-react';

export default function BookingBar() {
  const [selectedBranch, setSelectedBranch] = useState('Terrace Bali');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Adults, 0 Children');

  return (
    <div className="hero-booking-bar w-full max-w-5xl mx-auto px-4 sm:px-6 mb-8 relative z-30">
      <div className="bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 shadow-2xl text-white">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center"
        >
          {/* 1. Hotel / Branch Selector */}
          <div className="relative flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors cursor-pointer group">
            <Building2 className="w-5 h-5 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
                Hotel / Branch
              </span>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none appearance-none cursor-pointer truncate pr-4"
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
            <ChevronDown className="w-4 h-4 text-white/50 absolute right-3 pointer-events-none" />
          </div>

          {/* 2. Check-in / Check-out */}
          <div className="relative flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors cursor-pointer group">
            <Calendar className="w-5 h-5 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
                Check-in / Check-out
              </span>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-white focus:outline-none text-xs cursor-pointer w-full [color-scheme:dark]"
                />
              </div>
            </div>
          </div>

          {/* 3. Guests Selector */}
          <div className="relative flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-colors cursor-pointer group">
            <Users className="w-5 h-5 text-white/70 group-hover:text-white transition-colors flex-shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
                Guests
              </span>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none appearance-none cursor-pointer truncate pr-4"
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
            <ChevronDown className="w-4 h-4 text-white/50 absolute right-3 pointer-events-none" />
          </div>

          {/* 4. Check Availability Button */}
          <button
            type="submit"
            className="w-full h-full min-h-[52px] bg-white text-slate-900 hover:bg-slate-100 font-medium text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
          >
            <Search className="w-4 h-4" />
            <span>Check Availability</span>
          </button>
        </form>
      </div>
    </div>
  );
}