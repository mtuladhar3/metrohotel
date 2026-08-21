'use client';

import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

type HotelAvailabilityModalProps = {
  isOpen: boolean;
  onClose: () => void;
  hotelName: string;
};

export default function HotelAvailabilityModal({
  isOpen,
  onClose,
  hotelName,
}: HotelAvailabilityModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close availability popup"
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="availability-title"
        className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Book your stay
            </p>
            <h2 id="availability-title" className="mt-2 text-xl text-slate-900 sm:text-2xl">
              Check availability
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Hotel
            </span>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800">
              {hotelName}
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Check in
            </span>
            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
              Check out
            </span>
            <input
              type="date"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </label>

          <button
            type="submit"
            className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
          >
            Check availability
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
