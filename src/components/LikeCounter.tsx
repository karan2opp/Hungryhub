"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const BASE_LIKES = 1247;

type Particle = { id: number; x: number };

export function LikeCounter() {
  const [taps, setTaps] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextId = useRef(0);

  const count = BASE_LIKES + taps;

  const handleTap = () => {
    setTaps((t) => t + 1);
    const id = nextId.current++;
    setParticles((p) => [...p, { id, x: (Math.random() - 0.5) * 30 }]);
    window.setTimeout(() => {
      setParticles((p) => p.filter((particle) => particle.id !== id));
    }, 900);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            initial={{ opacity: 1, y: 0, x: particle.x, scale: 0.6 }}
            animate={{ opacity: 0, y: -70, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-16 right-6 text-red-600"
          >
            <Heart className="h-5 w-5" fill="currentColor" strokeWidth={0} />
          </motion.span>
        ))}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={handleTap}
        aria-label="Like Hungry Hub"
        title="Tap to show some love"
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-3 rounded-full bg-white/95 pl-4 pr-5 py-3 shadow-soft ring-1 ring-ink-950/5 backdrop-blur transition-shadow hover:shadow-[0_20px_45px_-15px_rgba(200,29,37,0.35)]"
      >
        <motion.span
          key={taps}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex h-12 w-12 shrink-0 items-center justify-center"
        >
          <Heart className="h-10 w-10 text-red-600" fill="currentColor" strokeWidth={0} />
        </motion.span>
        <span className="flex flex-col leading-tight text-left">
          <span className="text-base font-bold text-ink-950 tabular-nums">
            {count.toLocaleString("en-IN")}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-ink-800/50">
            liked by people
          </span>
        </span>
      </motion.button>
    </div>
  );
}
