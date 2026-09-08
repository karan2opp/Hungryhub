"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-red-600/20 bg-red-600/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.05] text-balance text-ink-950">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-800/70">
          {description}
        </p>
      )}
    </motion.div>
  );
}
