// Full-screen off-canvas navigation menu.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { NAV_MENU_ITEMS, MenuItem } from '@/data/menu';

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_BG_IMAGE =
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80';

const radialMaskVariants: Variants = {
  hidden: { clipPath: 'circle(0% at 0% 0%)' },
  visible: {
    clipPath: 'circle(170% at 0% 0%)',
    transition: {
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1],
      when: 'beforeChildren',
    },
  },
  exit: {
    clipPath: 'circle(0% at 0% 0%)',
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const bgZoomVariants: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
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
          className="fixed inset-0 z-50 overflow-hidden bg-slate-950 will-change-[clip-path]"
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 md:bg-gradient-to-r md:from-black/90 md:via-black/75 md:to-black/50" />
          </motion.div>

          {/* Header Bar */}
          <div className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
            <Link
              href="/"
              onClick={onClose}
              className="text-xl tracking-wide text-white transition-opacity hover:opacity-90 sm:text-2xl lg:text-3xl"
            >
              Hotel Metro
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="cursor-pointer rounded-full border border-white/10 bg-black/30 p-2.5 text-white/80 backdrop-blur-md transition-colors hover:text-white"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Navigation Area */}
          <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto px-5 pt-24 pb-10 sm:px-8 sm:pt-28 sm:pb-12 md:justify-center md:overflow-hidden lg:px-12 lg:pt-0 lg:pb-0">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 md:my-auto md:grid-cols-12 md:items-center md:gap-10">
              {/* Main Links */}
              <motion.div
                variants={listContainerVariants}
                initial="hidden"
                animate="visible"
                className={`${
                  hasSubMenu ? 'md:col-span-7' : 'md:col-span-12'
                } flex w-full flex-col gap-2 sm:gap-3 md:gap-4`}
              >
                {NAV_MENU_ITEMS.map((item) => {
                  const isActive = activeItem.id === item.id;
                  const itemHasSub = Boolean(item.subMenu && item.subMenu.length > 0);

                  return (
                    <motion.div
                      key={item.id}
                      variants={textItemVariants}
                      className="flex w-full flex-col"
                    >
                      <div
                        onMouseEnter={() => {
                          setActiveItem(item);
                          setHoveredSubImage(null);
                        }}
                        className="group flex w-full cursor-pointer items-center gap-3 sm:w-fit sm:gap-4"
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
                          className={`min-w-0 flex-1 whitespace-normal break-words text-3xl leading-tight font-normal tracking-wide transition-all duration-300 sm:flex-none sm:text-4xl md:text-5xl ${
                            isActive
                              ? 'translate-x-0 text-amber-400 sm:translate-x-2'
                              : 'text-white/85 hover:text-white'
                          }`}
                        >
                          {item.title}
                        </Link>

                        {itemHasSub ? (
                          <ChevronDown
                            onClick={(e) => handleParentClick(item, e)}
                            className={`h-5 w-5 shrink-0 text-amber-400 transition-transform duration-300 sm:h-6 sm:w-6 ${
                              isActive ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        ) : (
                          <ArrowRight
                            className={`h-5 w-5 shrink-0 text-amber-400 transition-all duration-300 sm:h-6 sm:w-6 ${
                              isActive
                                ? 'translate-x-0 opacity-100'
                                : 'hidden -translate-x-4 opacity-0 sm:block'
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
                            className="my-2 flex flex-col gap-3 overflow-hidden border-l-2 border-amber-400/50 py-2 pr-2 pl-4 md:hidden"
                          >
                            {item.subMenu!.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.href}
                                onClick={onClose}
                                onTouchStart={() => {
                                  if (sub.image) setHoveredSubImage(sub.image);
                                }}
                                className="text-base leading-snug text-white/90 transition-colors hover:text-amber-400 sm:text-lg"
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
                  className="hidden min-h-[240px] flex-col justify-center gap-3 border-l border-white/20 pl-10 md:col-span-5 md:flex lg:pl-12"
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
                      className="text-lg text-white/90 transition-all duration-200 hover:translate-x-2 hover:text-amber-400 sm:text-xl"
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
