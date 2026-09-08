"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-cream-200/60 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Hungry Hub"
          title="Built On Fresh Food & Good Vibes"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-start gap-4 rounded-3xl bg-cream-100 p-6 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-950 text-mustard-400 transition-colors group-hover:bg-red-600">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-800/65">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
