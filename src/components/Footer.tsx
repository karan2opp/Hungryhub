import type { SVGProps } from "react";
import { Heart, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink-950 pt-16 pb-8 bg-wood-grain">
      <div className="absolute inset-0 bg-ink-950/92" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600">
                <Heart className="h-4.5 w-4.5 text-cream-100" fill="currentColor" strokeWidth={0} />
              </span>
              <span className="font-display text-xl text-cream-100">
                Hungry Hub
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/60">
              Pehowa&rsquo;s warm, modern fast-food cafe — fresh burgers,
              cheesy pizzas, loaded fries &amp; refreshing shakes.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream-100/70 transition-colors hover:bg-red-600 hover:text-cream-100"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cream-100/70 transition-colors hover:bg-red-600 hover:text-cream-100"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mustard-400">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream-200/65">
              <li><a href="#menu" className="hover:text-cream-100">Menu</a></li>
              <li><a href="#favorites" className="hover:text-cream-100">Favorites</a></li>
              <li><a href="#gallery" className="hover:text-cream-100">Gallery</a></li>
              <li><a href="#why-us" className="hover:text-cream-100">Why Us</a></li>
              <li><a href="#visit" className="hover:text-cream-100">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mustard-400">
              Get In Touch
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream-200/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-red-500" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-red-500" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-cream-100">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-cream-200/45">
            &copy; {new Date().getFullYear()} Hungry Hub, Pehowa. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/45">
            Crafted with <Heart className="inline h-3 w-3 text-red-500 -mt-0.5" fill="currentColor" strokeWidth={0} /> in Pehowa
          </p>
        </div>
      </div>
    </footer>
  );
}
