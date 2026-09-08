"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { events } from "@/lib/data";

export function Events() {
  return (
    <section className="relative bg-stone-100 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Happenings"
          title="More Than Just a Meal"
          description="Regular reasons to swing by — with your crew, your family, or just yourself."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-950/5 transition-shadow hover:shadow-[0_25px_55px_-18px_rgba(26,21,18,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mustard-500/15 text-mustard-600">
                <CalendarDays className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
                {event.day}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink-950">
                {event.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800/65">
                {event.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mustard-600 opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
