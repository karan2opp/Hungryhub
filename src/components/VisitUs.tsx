"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/lib/data";

export function VisitUs() {
  return (
    <section id="visit" className="relative bg-stone-100 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Come Say Hi, We&rsquo;ll Have a Table Ready"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col justify-between rounded-3xl bg-ink-950 p-8 text-cream-100 shadow-soft"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mustard-400">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cream-200/85">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mustard-500/15 text-mustard-400">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mustard-400">
                    Call / WhatsApp
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="mt-1 block text-sm text-cream-200/85 hover:text-cream-100"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-olive-500/20 text-olive-500">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mustard-400">
                    Hours
                  </p>
                  <p className="mt-1 text-sm text-cream-200/85">
                    {siteConfig.hours}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
                siteConfig.whatsappMessage,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-mustard-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-warm transition-all hover:bg-mustard-400 hover:-translate-y-0.5"
            >
              <Navigation className="h-4 w-4" />
              Get Directions on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-3 min-h-[320px] overflow-hidden rounded-3xl border border-ink-950/10 bg-white shadow-soft"
          >
            {/* Map placeholder — swap for a live embed when ready */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(10,23,48,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,23,48,0.08) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-cream-100 shadow-warm animate-float">
                <MapPin className="h-6 w-6" fill="currentColor" strokeWidth={0.5} />
              </span>
              <p className="font-display text-xl text-ink-950">
                Pehowa&ndash;Kaithal Road
              </p>
              <p className="max-w-xs text-sm text-ink-800/60">
                Opposite Gupta Pump — look for the glowing Hungry Hub sign.
              </p>
              <span className="mt-1 rounded-full border border-ink-950/15 px-3 py-1 text-xs text-ink-800/50">
                Live map embed goes here
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
