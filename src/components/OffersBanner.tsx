import { Sparkles } from "lucide-react";

const offers = [
  "Student Combo Deals, Weekdays 4–7 PM",
  "Family Sunday Brunch Spread",
  "Free Delivery on Orders Above ₹499*",
  "Loaded Fries + Shake Combo",
  "Buy 1 Get 1 on Select Momos, Weekdays",
];

export function OffersBanner() {
  const track = [...offers, ...offers];
  return (
    <section className="relative overflow-hidden bg-red-600 py-4">
      <div className="absolute inset-0 bg-stripes opacity-40" />
      <div className="relative flex overflow-hidden mask-fade-x">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-10 pr-10">
          {track.map((offer, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-sm sm:text-base font-semibold text-cream-100 whitespace-nowrap"
            >
              <Sparkles className="h-4 w-4 text-mustard-400 shrink-0" />
              {offer}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
