"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { clsx } from "clsx";

type Variant = "ink" | "red" | "mustard" | "olive" | "wood";

const variantClasses: Record<Variant, string> = {
  ink: "from-ink-800 via-ink-900 to-ink-950",
  red: "from-red-500 via-red-600 to-red-700",
  mustard: "from-mustard-400 via-mustard-500 to-mustard-600",
  olive: "from-olive-500 via-olive-600 to-ink-900",
  wood: "from-wood-500 via-wood-600 to-wood-700",
};

export function SmartImage({
  src,
  alt,
  fill = true,
  className,
  variant = "ink",
  icon: Icon = UtensilsCrossed,
  sizes,
  priority,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  variant?: Variant;
  icon?: LucideIcon;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={clsx("relative overflow-hidden bg-grain", className)}>
      <div
        className={clsx(
          "absolute inset-0 bg-gradient-to-br",
          variantClasses[variant],
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-1/3 w-1/3 text-white/15"
            strokeWidth={1.25}
          />
        </div>
      </div>
      {!errored && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          priority={priority}
          className="object-cover"
          style={{ objectPosition }}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
