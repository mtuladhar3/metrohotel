'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NAV_MENU_ITEMS, MenuItem } from '@/data/menu';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_BG_IMAGE =
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80';

// Circle mask expansion animation
const radialMaskVariants: Variants = {
  hidden: { 
    clipPath: 'circle(0% at 0% 0%)',
  },
  visible: {
    clipPath: 'circle(170% at 0% 0%)',
    transition: { 
      duration: 0.75, 
      ease: [0.76, 0, 0.24, 1],
      when: 'beforeChildren',
    },
  },
  exit: {
    clipPath: 'circle(0% at 0% 0%)',
    transition: { 
      duration: 0.55, 
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function OffCanvasMenu({ isOpen, onClose }: OffCanvasMenuProps) {
  const [activeItem, setActiveItem] = useState<MenuItem>(NAV_MENU_ITEMS[0]);
  const [hoveredSubImage, setHoveredSubImage] = useState<string | null>(null);

  const currentBackgroundImage =
    hoveredSubImage || activeItem.bgImage || DEFAULT_BG_IMAGE;

  const handleParentClick = (item: MenuItem, e: React.MouseEvent) => {
    if (item.subMenu && item.subMenu.length > 0) {
      e.preventDefault();
      setActiveItem(activeItem.id === item.id ? NAV_MENU_ITEMS[0] : item);
      setHoveredSubImage(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={radialMaskVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 overflow-hidden bg-black font-sans text-white select-none will-change-[clip-path]"
        >
          {/* Background Layer with Dark Overlay */}
          <motion.div
            key={currentBackgroundImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentBackgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 backdrop-blur-[3px]" />
          </motion.div>

          {/* Full-Width Header Bar */}
          <header className="absolute top-0 right-0 left-0 z-30 flex items-center justify-between px-6 py-6 sm:px-12">
            <Link
              href="/"
              onClick={onClose}
              className="text-lg font-light tracking-widest uppercase transition-opacity hover:opacity-80 sm:text-xl"
            >
              Hotel Metro
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition-all hover:scale-105 hover:border-white hover:bg-white hover:text-black"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          {/* Main Navigation Area */}
          <div className="relative z-10 flex h-full w-full flex-col justify-center px-8 pt-24 pb-12 sm:px-16">
            <div className="mx-auto flex w-full max-w-3xl flex-col">
              
              <div className="flex flex-col gap-6">
                {NAV_MENU_ITEMS.map((item) => {
                  const isActive = activeItem.id === item.id;
                  const itemHasSub = Boolean(item.subMenu && item.subMenu.length > 0);

                  return (
                    <div key={item.id} className="relative flex flex-col">
                      <div
                        onClick={(e) => {
                          if (itemHasSub) {
                            handleParentClick(item, e);
                          } else {
                            onClose();
                          }
                        }}
                        onMouseEnter={() => {
                          setActiveItem(item);
                          setHoveredSubImage(null);
                        }}
                        className="group flex cursor-pointer items-center justify-between py-1"
                      >
                        {/* Soft Aura Highlight behind active menu item */}
                        <div className="relative flex items-center">
                          {isActive && (
                            <motion.div
                              layoutId="liquidAura"
                              className="absolute -inset-x-6 -inset-y-3 -z-10 rounded-full border border-amber-500/40 blur-md"
                              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                          )}

                          <Link
                            href={item.href}
                            onClick={(e) => {
                              if (itemHasSub) handleParentClick(item, e);
                            }}
                            className={`text-4xl font-light tracking-tight transition-all duration-300 sm:text-5xl ${
                              isActive
                                ? 'font-normal text-amber-500'
                                : 'text-white/80 hover:text-white'
                            }`}
                          >
                            {item.title}
                          </Link>
                        </div>

                        {/* Submenu Indicator Arrow */}
                        {itemHasSub && (
                          <ChevronDown
                            className={`h-6 w-6 text-amber-400 transition-transform duration-300 ${
                              isActive ? 'rotate-180' : 'opacity-40 group-hover:opacity-100'
                            }`}
                          />
                        )}
                      </div>

                      {/* Accordion Submenu Items */}
                      <AnimatePresence>
                        {isActive && itemHasSub && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            className="mt-3 ml-2 flex flex-col gap-3.5 border-l-2 border-amber-400/40 pl-6"
                          >
                            {item.subMenu!.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.href}
                                onClick={onClose}
                                onMouseEnter={() => {
                                  if (sub.image) setHoveredSubImage(sub.image);
                                }}
                                onMouseLeave={() => setHoveredSubImage(null)}
                                className="text-lg font-light tracking-wide text-white/90 transition-all hover:translate-x-2 hover:text-amber-300 sm:text-xl"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}