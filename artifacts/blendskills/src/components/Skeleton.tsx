import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

const STATUS_TEXTS = [
  'Initializing BlendSkills',
  'Preparing AI Engine',
  'Connecting Cloud Services',
  'Building Digital Experience',
  'Almost Ready',
];

const STATUS_PERCENTAGES = [12, 36, 61, 89, 100];

export function Skeleton({ className = '', style }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded-xl ${className}`}
      style={style}
    />
  );
}

export function AuroraLoader() {
  const [statusIndex, setStatusIndex] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 44 }, (_, index) => ({
        id: index,
        left: `${(index * 7) % 100}%`,
        top: `${(index * 13 + 5) % 100}%`,
        size: 3 + (index % 4),
        delay: index * 0.08,
        duration: 7 + (index % 5),
      })),
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStatusIndex((current) => (current + 1) % STATUS_TEXTS.length);
    }, 240000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(40px)' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,63,181,0.22),_transparent_45%),radial-gradient(circle_at_80%_20%,_rgba(0,245,212,0.16),_transparent_40%),linear-gradient(120deg,_rgba(5,8,22,0.92),_rgba(8,13,30,0.96))]" />

      {/* Slow, near-invisible rotation wrapper around the whole aurora layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: [0, 3, 0, -3, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 opacity-80 mix-blend-screen">
          <motion.div
            className="absolute left-[-10%] top-[-12%] h-[56vh] w-[56vh] rounded-full bg-[radial-gradient(circle,_rgba(107,63,181,0.35)_0%,_rgba(107,63,181,0.08)_45%,_transparent_75%)] blur-[90px]"
            animate={{ x: [-20, 15, -10], y: [10, -15, 5], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-15%] right-[-8%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,_rgba(0,245,212,0.28)_0%,_rgba(0,245,212,0.06)_45%,_transparent_78%)] blur-[100px]"
            animate={{ x: [15, -20, 10], y: [-10, 15, -5], scale: [1, 1.12, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[18%] top-[20%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,_rgba(255,107,53,0.16)_0%,_transparent_72%)] blur-[80px]"
            animate={{ x: [-10, 20, -15], y: [15, -10, 10], scale: [1, 1.08, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Extra small glows for a richer background */}
          <motion.div
            className="absolute right-[8%] top-[8%] h-[18vh] w-[18vh] rounded-full bg-[radial-gradient(circle,_rgba(0,245,212,0.22)_0%,_transparent_75%)] blur-[50px]"
            animate={{ x: [5, -10, 5], y: [-8, 8, -8], scale: [1, 1.15, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute left-[6%] bottom-[10%] h-[20vh] w-[20vh] rounded-full bg-[radial-gradient(circle,_rgba(107,63,181,0.22)_0%,_transparent_75%)] blur-[55px]"
            animate={{ x: [-8, 10, -8], y: [8, -6, 8], scale: [1, 1.1, 1] }}
            transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,_rgba(255,255,255,0.35)_50%,_transparent_100%)] bg-[length:100%_3px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.35)_0%,_transparent_60%)]" />
      </div>

      {/* Particles drift upward like dust */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.28)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [20, -80],
            x: [0, 6, -4, 0],
            opacity: [0, 0.7, 0],
            scale: [0.4, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration + 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center">
          {/* Stage: 0.5s - 1s logo fades in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, filter: 'blur(25px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-8 flex w-fit items-center justify-center"
          >
            {/* Stage: 1s - 1.8s glow appears, floating rings */}
            <motion.div
              className="absolute h-48 w-48 rounded-full border border-cyan-400/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                opacity: { duration: 0.8, delay: 1 },
                rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                scale: { duration: 30, repeat: Infinity, ease: 'linear' },
              }}
            />
            <motion.div
              className="absolute h-64 w-64 rounded-full border border-purple-400/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: -360 }}
              transition={{
                opacity: { duration: 0.8, delay: 1.1 },
                rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              }}
            />

            <div className="relative rounded-full border border-white/15 bg-white/8 p-4 shadow-[0_20px_60px_rgba(0,245,212,0.14)] backdrop-blur-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
                initial={{ opacity: 0 }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.5, 0.15] }}
                transition={{
                  opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                  scale: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-150%', '150%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut', delay: 1.2 }}
              />
              <img
                src="/logo.png"
                alt="BlendSkills"
                className="relative h-12 w-auto object-contain sm:h-14"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-4 font-mono text-[0.74rem] uppercase tracking-[0.35em] text-cyan-300/90"
          >
            Awakening the experience
          </motion.p>

          {/* Stage: 1.8s - 2.5s status text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            className="mx-auto mb-8 max-w-xl"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={statusIndex}
                initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(1rem,2vw,1.35rem)] font-medium text-slate-200"
              >
                {STATUS_TEXTS[statusIndex]}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`pct-${statusIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-1 font-mono text-xs tracking-widest text-cyan-300/70"
              >
                {STATUS_PERCENTAGES[statusIndex]}%
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Stage: 2.5s progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="mx-auto h-1.5 w-full max-w-[18rem] overflow-hidden rounded-full border border-white/10 bg-white/10"
          >
            <motion.div
              animate={{
                width: `${STATUS_PERCENTAGES[statusIndex]}%`,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#6B3FB5] via-[#00F5D4] to-[#FF6B35]"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm space-y-4">
      <Skeleton className="h-44 w-full rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="pt-2 flex justify-between items-center">
        <Skeleton className="h-8 w-28 rounded-lg" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}

export function VideoSkeleton() {
  return (
    <div className="relative w-full h-full min-h-[300px] rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between p-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-6 w-32 bg-slate-800" />
        <Skeleton className="h-6 w-6 rounded-full bg-slate-800" />
      </div>
      <div className="space-y-3">
        <Skeleton className="h-6 w-1/2 bg-slate-800" />
        <Skeleton className="h-4 w-3/4 bg-slate-800" />
      </div>
    </div>
  );
}