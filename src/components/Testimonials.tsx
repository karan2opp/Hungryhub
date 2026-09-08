"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-28">
      <div className="pointer-events-none absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-mustard-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Straight From Our Regulars"
          align="center"
        />

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative w-[85%] shrink-0 snap-center rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-950/5 sm:w-auto sm:shrink"
            >
              <Quote className="h-7 w-7 text-red-500/30" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink-800/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-3.5 w-3.5 text-mustard-500"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="text-sm font-semibold text-ink-950">{t.name}</p>
                <p className="text-xs text-ink-800/50">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
