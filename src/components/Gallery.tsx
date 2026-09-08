"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { SmartImage } from "./SmartImage";
import { SectionHeading } from "./SectionHeading";
import { galleryImages } from "@/lib/data";

const variants = ["ink", "red", "mustard", "olive", "wood"] as const;

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Vibe"
          title="A Peek Inside Hungry Hub"
          description="Warm hanging lights, wooden tables, and plates worth photographing."
        />

        <div className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="break-inside-avoid"
            >
              <SmartImage
                src={img.image}
                alt={img.alt}
                variant={variants[i % variants.length]}
                className={clsx(
                  "w-full rounded-2xl shadow-soft transition-transform duration-500 hover:scale-[1.02]",
                  img.span === "tall" && "aspect-[3/4]",
                  img.span === "wide" && "aspect-[4/3]",
                  !img.span && "aspect-square",
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
