'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CanvasHearts } from '@/components/CanvasHearts';
import { FireworksCanvas } from '@/components/FireworksCanvas';
import { PasswordGate } from '@/components/PasswordGate';

const FALLBACK_PASSWORD = '06-06-2025';
const LEGACY_PASSWORD = '14-02-2022';

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
    if (context.state === 'suspended') {
      await context.resume();
    }

    const masterGain = context.createGain();
    masterGain.gain.value = 0.16;
    masterGain.connect(context.destination);

    const lowpass = context.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 1800;
    lowpass.Q.value = 0.8;
    lowpass.connect(masterGain);

    const chords = [
      [261.63, 329.63, 392.0], // C major
      [220.0, 261.63, 329.63], // A minor
      [246.94, 293.66, 369.99], // B diminished flavor
      [196.0, 246.94, 329.63], // G major
    ];

    const melody = [
      [392.0, 440.0, 493.88, 523.25],
      [440.0, 392.0, 349.23, 329.63],
      [369.99, 392.0, 440.0, 392.0],
      [349.23, 329.63, 293.66, 261.63],
    ];

    const barDuration = 2.4;
    const loopDuration = barDuration * chords.length;

    const playPad = (freq: number, start: number, duration: number) => {
      const osc = context.createOscillator();
      const gain = context.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.03, start + 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      osc.connect(gain);
      gain.connect(lowpass);
      osc.start(start);
      osc.stop(start + duration + 0.02);
    };

    const playLead = (freq: number, start: number, duration: number) => {
      const osc = context.createOscillator();
      const gain = context.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.07, start + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      osc.connect(gain);
      gain.connect(lowpass);
      osc.start(start);
      osc.stop(start + duration + 0.02);
    };

    const playSequence = () => {
      const baseTime = context.currentTime + 0.02;

      chords.forEach((chord, barIndex) => {
        const barStart = baseTime + barIndex * barDuration;
        chord.forEach((freq) => playPad(freq, barStart, barDuration * 0.95));

        const phrase = melody[barIndex];
        const noteDuration = barDuration / phrase.length;
        phrase.forEach((noteFreq, noteIndex) => {
          const noteStart = barStart + noteIndex * noteDuration;
          playLead(noteFreq, noteStart, noteDuration * 0.9);
        });
      });
    };

    playSequence();
    const timer = window.setInterval(playSequence, loopDuration * 1000);
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

  const configuredPassword = process.env.NEXT_PUBLIC_SURPRISE_PASSWORD?.trim();
  const expectedPasswords = Array.from(
    new Set(
      [configuredPassword, FALLBACK_PASSWORD, LEGACY_PASSWORD].filter(
        (value): value is string => Boolean(value && value.length > 0),
      ),
    ),
  );

  if (!unlocked) {
    return (
      <PasswordGate
        expectedPasswords={expectedPasswords}
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
          Merci pour chaque sourire, chaque main tendue, chaque instant. Je t’aime aujourd’hui, demain, et aussi loin que la vie nous portera.
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
