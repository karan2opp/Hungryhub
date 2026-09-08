"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Leaf, Heart, Zap, Star } from "lucide-react";
import { SmartImage } from "./SmartImage";

const badges = [
  { icon: Leaf, label: "Fresh Ingredients", className: "top-6 -left-4 sm:-left-8" },
  { icon: Heart, label: "Customer Favorites", className: "top-1/2 -right-4 sm:-right-10 -translate-y-1/2" },
  { icon: Zap, label: "Fast Service", className: "bottom-6 -left-4 sm:-left-6" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream to-cream pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-mustard-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-wood-grain opacity-80" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-mustard-500/30 bg-mustard-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-mustard-600">
            <MapPin className="h-3.5 w-3.5" />
            Pehowa&rsquo;s Favourite Hangout
          </span>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-ink-950 text-balance">
            Taste The{" "}
            <span className="relative italic text-mustard-600">
              Quality
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 left-0 w-full text-red-500"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 15 Q 75 2, 150 10 T 298 8"
                  stroke="currentColor"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto lg:mx-0 mt-6 max-w-lg text-lg text-ink-800/70 leading-relaxed">
            Fresh-stacked burgers, cheesy wood-fired pizzas, loaded fries and
            refreshing shakes — made fresh, served warm, in Pehowa&rsquo;s
            coziest corner.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#menu"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-cream-100 shadow-warm transition-all hover:bg-red-500 hover:-translate-y-0.5"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#visit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-ink-950/12 bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-soft transition-all hover:bg-cream-200 hover:-translate-y-0.5"
            >
              Visit Us
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-3">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-3.5 w-3.5 text-mustard-500"
                >
                  <Star className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                </div>
              ))}
              <Star className="h-3.5 w-3.5 text-mustard-500" fill="currentColor" strokeWidth={0} />
            </div>
            <p className="text-sm text-ink-800/55">
              Loved by students, couples &amp; families across Pehowa
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            <SmartImage
              src="/images/hero-food.jpg"
              alt="Signature loaded burger and cheesy pizza at Hungry Hub"
              variant="red"
              objectPosition="center 88%"
              className="aspect-[4/5] w-full rounded-[2.5rem] shadow-soft ring-1 ring-ink-950/5"
            />

            {badges.map(({ icon: Icon, label, className }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                className={`absolute z-20 flex items-center gap-2 rounded-2xl border border-ink-950/5 bg-cream-100/95 px-4 py-3 shadow-soft backdrop-blur animate-float ${className}`}
                style={{ animationDelay: `${i * 0.7}s` }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-600">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-ink-950 whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
