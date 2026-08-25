// src/components/home/about/AboutLetter.tsx
'use client';

export default function AboutLetter() {
  return (
    <div className="about-letter text-center max-w-xl mx-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
      {/* <p className="font-medium text-slate-900 text-base">Dear Valued Guest,</p> */}

      <p>
        Welcome to Terrace, your beachfront sanctuary where the rhythms of the ocean and the warmth of our hospitality create a stay like no other.
      </p>

      <p>
        Our passion for service and attention to detail are the heart of everything we do. Please feel free to reach out to any member of our team—or to me personally—if there&apos;s anything we can do to make your stay even more exceptional.
      </p>

      <p>
        Thank you for choosing Terrace. We can&apos;t wait to share our little piece of paradise with you.
      </p>

      {/* <div className="pt-6 flex flex-col items-center gap-1">
        <span className="text-[11px] uppercase tracking-widest text-slate-400">Warmest regards,</span>
        <span className="italic text-3xl sm:text-4xl text-slate-900 py-1">
          John Doe
        </span>
        <span className="text-[11px] tracking-wider text-slate-500 uppercase">General Manager</span>
      </div> */}
    </div>
  );
}