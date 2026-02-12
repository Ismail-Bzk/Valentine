'use client';

import { motion } from 'framer-motion';
import { CanvasHearts } from '@/components/CanvasHearts';
import { DayCounter } from '@/components/DayCounter';

export function LandingSection() {
  const scrollToTimeline = () => {
    const section = document.getElementById('timeline');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-romantic-gradient relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
      <CanvasHearts mode="ambient" className="opacity-80" />

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-full border border-gold/30 bg-white/70 px-4 py-1 text-sm uppercase tracking-[0.2em] text-wine/70"
        >
          Saint-Valentin
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          className="max-w-3xl text-5xl font-semibold leading-tight text-wine md:text-7xl"
        >
          Notre Histoire
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="max-w-2xl text-lg text-wine/80 md:text-xl"
        >
          Un voyage en souvenirs, en promesses et en douceur. Chaque section raconte une part de nous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <DayCounter since="2022-02-14" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          onClick={scrollToTimeline}
          className="rounded-full bg-gradient-to-r from-rose to-[#f8bfd4] px-8 py-4 text-lg font-semibold text-white shadow-romantic transition hover:scale-[1.03] hover:shadow-2xl"
        >
          Commencer notre histoire ❤️
        </motion.button>
      </div>
    </section>
  );
}
