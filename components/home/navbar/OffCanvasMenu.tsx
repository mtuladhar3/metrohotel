// src/components/navbar/OffCanvasMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NAV_MENU_ITEMS, MenuItem } from './menuData';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_BG_IMAGE =
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80';

const radialMaskVariants: Variants = {
  hidden: { clipPath: 'circle(0% at 92% 8%)' },
  visible: {
    clipPath: 'circle(150% at 92% 8%)',
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], when: 'beforeChildren' },
  },
  exit: {
    clipPath: 'circle(0% at 92% 8%)',
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
  },
};

const bgZoomVariants: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
};

const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
};

export default function OffCanvasMenu({ isOpen, onClose }: OffCanvasMenuProps) {
  const [activeItem, setActiveItem] = useState<MenuItem>(NAV_MENU_ITEMS[0]);
  const [hoveredSubImage, setHoveredSubImage] = useState<string | null>(null);

  const currentBackgroundImage =
    hoveredSubImage || activeItem.bgImage || DEFAULT_BG_IMAGE;
  const hasSubMenu = Boolean(activeItem.subMenu && activeItem.subMenu.length > 0);

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
          className="fixed inset-0 z-50 overflow-hidden font-serif bg-slate-950 will-change-[clip-path]"
        >
          {/* Background Layer */}
          <motion.div
            key={currentBackgroundImage}
            variants={bgZoomVariants}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ease-out"
            style={{ backgroundImage: `url(${currentBackgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          </motion.div>

          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 sm:px-16 py-6 sm:py-8">
            <Link
              href="/"
              onClick={onClose}
              className="font-serif text-2xl sm:text-3xl text-white tracking-wide hover:opacity-90 transition-opacity"
            >
              Hotel Metro
            </Link>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-white/80 hover:text-white transition-colors cursor-pointer p-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Area */}
          <div className="relative z-10 w-full h-full flex flex-col justify-start md:justify-center px-6 sm:px-16 md:px-24 pt-28 pb-12 md:py-0 overflow-y-auto md:overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl w-full my-auto">
              
              {/* Main Links */}
              <motion.div
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                className={`${
                  hasSubMenu ? 'md:col-span-7' : 'md:col-span-12'
                } flex flex-col gap-3 sm:gap-4 transition-all duration-500`}
              >
                {NAV_MENU_ITEMS.map((item) => {
                  const isActive = activeItem.id === item.id;
                  const itemHasSub = Boolean(item.subMenu && item.subMenu.length > 0);

                  return (
                    <motion.div key={item.id} variants={textItemVariants} className="flex flex-col">
                      <div
                        onMouseEnter={() => {
                          setActiveItem(item);
                          setHoveredSubImage(null);
                        }}
                        className="group flex items-center gap-3 sm:gap-4 cursor-pointer w-fit"
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (itemHasSub) {
                              handleParentClick(item, e);
                            } else {
                              onClose();
                            }
                          }}
                          className={`text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide transition-all duration-300 ${
                            isActive
                              ? 'text-amber-500 translate-x-1 sm:translate-x-2'
                              : 'text-white/80 hover:text-white'
                          }`}
                        >
                          {item.title}
                        </Link>

                        {itemHasSub ? (
                          <ChevronDown
                            onClick={(e) => handleParentClick(item, e)}
                            className={`w-5 h-5 sm:w-6 sm:h-6 text-amber-500 transition-transform duration-300 ${
                              isActive ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        ) : (
                          <ArrowRight
                            className={`w-5 h-5 sm:w-7 sm:h-7 text-amber-500 transition-all duration-300 ${
                              isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}
                          />
                        )}
                      </div>

                      {/* Mobile Inline Sub-menu */}
                      <AnimatePresence>
                        {isActive && itemHasSub && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex md:hidden flex-col gap-3 pl-4 pt-3 pb-2 border-l-2 border-[#48bb78]/60 my-2 overflow-hidden"
                          >
                            {item.subMenu!.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.href}
                                onClick={onClose}
                                onTouchStart={() => {
                                  if (sub.image) setHoveredSubImage(sub.image);
                                }}
                                className="text-lg text-white/90 font-sans font-light hover:text-amber-500 transition-colors"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Desktop Side Sub-menu */}
              {hasSubMenu && (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
                  className="hidden md:flex md:col-span-5 flex-col gap-3 pl-12 border-l border-white/20 min-h-[240px] justify-center"
                >
                  {activeItem.subMenu!.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      onClick={onClose}
                      onMouseEnter={() => {
                        if (sub.image) setHoveredSubImage(sub.image);
                      }}
                      onMouseLeave={() => setHoveredSubImage(null)}
                      className="text-lg sm:text-xl text-white/90 font-sans font-light hover:text-amber-500 hover:translate-x-2 transition-all duration-200"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </motion.div>
              )}

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}