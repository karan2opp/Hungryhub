"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { clsx } from "clsx";
import { SmartImage } from "./SmartImage";
import { SectionHeading } from "./SectionHeading";
import { favoriteItems } from "@/lib/data";

function FavoriteCard({
  item,
  index,
}: {
  item: (typeof favoriteItems)[number];
  index: number;
}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(item.likes);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-950/5"
    >
      <div className="relative">
        <SmartImage
          src={item.image}
          alt={item.name}
          variant={index % 2 === 0 ? "red" : "mustard"}
          className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
        />
        {item.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-mustard-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-950 shadow-warm">
            {item.tag}
          </span>
        )}

        <button
          onClick={toggleLike}
          aria-label="Like this item"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/95 backdrop-blur transition-transform hover:scale-110 active:scale-95"
        >
          <Heart
            className={clsx(
              "h-5 w-5 transition-colors",
              liked ? "text-red-600 animate-pop" : "text-ink-950/50",
            )}
            fill={liked ? "currentColor" : "none"}
            strokeWidth={liked ? 0 : 2}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl text-ink-950">{item.name}</h3>
        <p className="text-sm leading-relaxed text-ink-800/65">
          {item.description}
        </p>
        <div className="mt-3 flex items-center gap-1.5 text-sm text-red-600">
          <Heart className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
          <span className="font-semibold tabular-nums">{likes}</span>
          <span className="text-ink-800/45">people love this</span>
        </div>
      </div>
    </motion.div>
  );
}

export function CustomerFavorites() {
  return (
    <section
      id="favorites"
      className="relative bg-stone-100 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Fan Favourites"
          title="What Pehowa Keeps Coming Back For"
          description="Tap the heart — these are the plates our regulars order on repeat."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {favoriteItems.map((item, i) => (
            <FavoriteCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
