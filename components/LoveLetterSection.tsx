'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { loveLetterText } from '@/lib/data';

export function LoveLetterSection() {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleChars >= loveLetterText.length) return;

    const timeout = window.setTimeout(() => {
      setVisibleChars((prev) => Math.min(prev + 1, loveLetterText.length));
    }, 35);

    return () => window.clearTimeout(timeout);
  }, [visibleChars]);

  const doneTyping = visibleChars >= loveLetterText.length;

  return (
    <section id="lettre" className="px-6 pb-28 pt-20 md:pb-32 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="glass-panel mx-auto max-w-4xl rounded-3xl p-7 shadow-romantic md:p-10"
      >
        <h2 className="section-title text-wine">Lettre d Amour</h2>

        <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-wine/85">
          {loveLetterText.slice(0, visibleChars)}
          {!doneTyping && <span className="blinking-cursor ml-1 inline-block">|</span>}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: doneTyping ? 1 : 0, y: doneTyping ? 0 : 12 }}
          transition={{ duration: 0.45 }}
          className="mt-8"
        >
          <Link
            href="/surprise"
            className="inline-flex rounded-full bg-gradient-to-r from-[#121212] to-[#2e1b2a] px-7 py-3 text-base font-semibold text-white transition hover:scale-[1.03]"
          >
            Lire la surprise finale
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
