'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { galleryItems } from '@/lib/data';

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="galerie" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-wine"
        >
          Galerie Souvenirs
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-romantic"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={600}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35 }}
              className="relative h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-black/35"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedIndex].src}
                alt={galleryItems[selectedIndex].alt}
                fill
                sizes="(max-width: 768px) 95vw, 80vw"
                className="object-contain"
              />

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-sm text-white"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
