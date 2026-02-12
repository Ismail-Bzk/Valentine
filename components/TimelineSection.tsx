'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { timelineEvents } from '@/lib/data';

export function TimelineSection() {
  return (
    <section id="timeline" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="section-title text-center text-wine"
        >
          Notre Timeline
        </motion.h2>

        <div className="relative mt-16">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-gold/30 via-rose/60 to-gold/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {timelineEvents.map((event, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.article
                  key={`${event.date}-${event.title}`}
                  initial={{ opacity: 0, x: isRight ? 45 : -45 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-5 pl-10 md:grid-cols-2 md:items-center md:gap-10 md:pl-0"
                >
                  <div
                    className={`${isRight ? 'md:col-start-2' : 'md:col-start-1'} glass-panel relative rounded-3xl p-5 shadow-romantic md:p-6`}
                  >
                    <span className="inline-block rounded-full bg-rose/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-wine/80">
                      {event.date}
                    </span>
                    <h3 className="mt-3 text-3xl text-wine">{event.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-wine/80">{event.description}</p>
                  </div>

                  <div
                    className={`${isRight ? 'md:col-start-1' : 'md:col-start-2'} overflow-hidden rounded-3xl border border-gold/20 bg-white/80 shadow-romantic`}
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={900}
                      height={600}
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="absolute left-[9px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-rose md:left-1/2 md:-translate-x-1/2" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
