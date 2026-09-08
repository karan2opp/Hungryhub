"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { SectionHeading } from "./SectionHeading";
import { menuCategories } from "@/lib/data";

const variants = ["red", "mustard", "ink", "olive", "wood"] as const;

export function MenuPreview() {
  return (
    <section id="menu" className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="The Menu"
            title="Something For Every Craving"
            description="From wood-fired pizzas to loaded chaap — browse the categories our kitchen is known for."
          />
          <a
            href="#visit"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink-950/15 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-ink-950 hover:text-cream-100"
          >
            View Full Menu
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.a
                href="#visit"
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-950/5 transition-shadow hover:shadow-[0_25px_55px_-18px_rgba(26,21,18,0.28)]"
              >
                <div className="relative">
                  <SmartImage
                    src={cat.image}
                    alt={cat.name}
                    variant={variants[i % variants.length]}
                    icon={Icon}
                    className="aspect-[16/11] w-full transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-mustard-500 text-ink-950 shadow-warm">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="font-display text-2xl text-ink-950">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-ink-800/60">{cat.tagline}</p>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-ink-800/75 transition-colors group-hover:bg-mustard-500/15 group-hover:text-mustard-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
