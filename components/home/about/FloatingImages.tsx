// src/components/home/about/FloatingImages.tsx
'use client';

const FLOATING_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    alt: 'Beach Walkway',
    containerClass:
      'absolute left-4 xl:left-12 top-[15%] w-64 xl:w-72 aspect-[4/5] shadow-2xl rounded-2xl overflow-hidden z-10 float-img-1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    alt: 'Arch Architecture',
    containerClass:
      'absolute right-4 xl:right-12 top-[8%] w-72 xl:w-80 aspect-square shadow-2xl rounded-2xl overflow-hidden z-10 float-img-2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    alt: 'Pool & Lounge',
    containerClass:
      'absolute left-8 xl:left-20 top-[58%] w-80 xl:w-96 aspect-[4/3] shadow-2xl rounded-2xl overflow-hidden z-10 float-img-3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    alt: 'Lounge Chair',
    containerClass:
      'absolute right-8 xl:right-16 top-[58%] w-72 xl:w-80 aspect-[4/5] shadow-2xl rounded-2xl overflow-hidden z-10 float-img-4',
  },
];

export default function FloatingImages() {
  return (
    <>
      {/* 1. Desktop Animated Floating View (Hidden on Mobile & Tablet screens) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_IMAGES.map((img) => (
          <div key={img.id} className={img.containerClass}>
            <img src={img.src} alt={img.alt} className="w-full rounded-2xl h-full object-cover" />
          </div>
        ))}
      </div>

      {/* 2. Mobile & Tablet Below-Content Grid */}
      <div className="block lg:hidden w-full pt-8 pb-4 relative z-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
          {FLOATING_IMAGES.map((img) => (
            <div
              key={img.id}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}