'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CanvasHearts } from '@/components/CanvasHearts';
import { FireworksCanvas } from '@/components/FireworksCanvas';
import { PasswordGate } from '@/components/PasswordGate';

const FALLBACK_PASSWORD = '06-06-2025';

type MusicEngine = {
  context: AudioContext;
  timer: number;
};

export function SurpriseExperience() {
  const [unlocked, setUnlocked] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const engineRef = useRef<MusicEngine | null>(null);

  const stopMusic = useCallback(async () => {
    const engine = engineRef.current;
    if (!engine) {
      setIsMusicOn(false);
      return;
    }

    window.clearInterval(engine.timer);
    await engine.context.close();
    engineRef.current = null;
    setIsMusicOn(false);
  }, []);

  const startMusic = useCallback(async () => {
    if (engineRef.current) return;

    const context = new window.AudioContext();
    const notes = [261.63, 329.63, 392.0, 523.25, 440.0, 392.0, 329.63, 293.66];
    const step = 0.28;

    const playSequence = () => {
      const baseTime = context.currentTime;

      notes.forEach((freq, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.value = freq;

        gain.gain.setValueAtTime(0.0001, baseTime + index * step);
        gain.gain.exponentialRampToValueAtTime(0.07, baseTime + index * step + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, baseTime + index * step + 0.22);

        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(baseTime + index * step);
        oscillator.stop(baseTime + index * step + 0.23);
      });
    };

    playSequence();
    const timer = window.setInterval(playSequence, notes.length * step * 1000 + 250);
    engineRef.current = { context, timer };
    setIsMusicOn(true);
  }, []);

  useEffect(() => {
    return () => {
      void stopMusic();
    };
  }, [stopMusic]);

  const toggleMusic = async () => {
    if (isMusicOn) {
      await stopMusic();
      return;
    }

    await startMusic();
  };

  if (!unlocked) {
    return (
      <PasswordGate
        expectedPassword={process.env.NEXT_PUBLIC_SURPRISE_PASSWORD ?? FALLBACK_PASSWORD}
        onUnlock={() => setUnlocked(true)}
      />
    );
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07020b] px-6 py-16 text-white">
      <CanvasHearts mode="burst" className="z-10 opacity-95" />
      <FireworksCanvas active={unlocked} />

      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <AnimatePresence>
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl leading-tight text-[#ffdbe9] md:text-7xl"
          >
            Tu es mon plus beau hasard,
            <br />
            mon choix de tous les jours.
          </motion.h1>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mx-auto mt-7 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          Merci pour chaque sourire, chaque main tendue, chaque instant. Je t aime aujourd hui, demain, et encore apres.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          type="button"
          onClick={() => void toggleMusic()}
          className="mt-10 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.22em] text-white transition hover:bg-white/20"
        >
          {isMusicOn ? 'Couper la musique' : 'Activer la musique'}
        </motion.button>
      </div>
    </section>
  );
}
