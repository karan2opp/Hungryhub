import type { LucideIcon } from "lucide-react";
import {
  Pizza,
  Beef,
  Soup,
  Sandwich,
  Flame,
  IceCreamCone,
  Leaf,
  Timer,
  Sparkles,
  Users,
  ChefHat,
  ThumbsUp,
} from "lucide-react";

export type MenuCategory = {
  id: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  items: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: "Pizzas",
    tagline: "Hand-stretched, wood-fired finish",
    icon: Pizza,
    image: "/images/menu/pizza.jpg",
    items: ["Margherita", "Cheese & Mushroom", "Achaari Pizza", "Tandoori Paneer Tikka"],
  },
  {
    id: "burgers",
    name: "Burgers",
    tagline: "Stacked high, grilled fresh",
    icon: Beef,
    image: "/images/menu/burger.jpg",
    items: ["Hungover Burger", "American Grilled Burger", "Crispy Veggie Burger", "Fickle Pickle Burger"],
  },
  {
    id: "momos",
    name: "Momos",
    tagline: "Steamed or pan-fried, extra chutney",
    icon: Soup,
    image: "/images/menu/momos.jpg",
    items: ["Makhani Dim Sums", "Schezwan Dim Sums", "Tandoori Momos", "Kurkure Momos"],
  },
  {
    id: "chaap",
    name: "Chaap",
    tagline: "A Hungry Hub crowd favourite",
    icon: Flame,
    image: "/images/menu/chaap.jpg",
    items: ["Hungry Crispy Chaap", "Chap Chilly", "Chap Manchurian", "Honey Chilli Chaap"],
  },
  {
    id: "wraps",
    name: "Wraps",
    tagline: "Rolled tight, packed with flavour",
    icon: Sandwich,
    image: "/images/menu/wraps.jpg",
    items: ["Tandoori Wrap", "Paneer Tikka Wrap", "Spicy Jalapeno Wrap", "Veggie Wraps"],
  },
  {
    id: "shakes",
    name: "Fries & Shakes",
    tagline: "Loaded, cheesy, ice-cold",
    icon: IceCreamCone,
    image: "/images/menu/shakes.jpg",
    items: ["Peri Peri Fries", "Cheesy Fries", "Oreo Shake", "Cold Coffee"],
  },
];

export type FavoriteItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  likes: number;
  tag?: string;
};

export const favoriteItems: FavoriteItem[] = [
  {
    id: "hungry-special-pizza",
    name: "Hungru Hub Spacial Pizza",
    description: "Half Makhni, half Achaari — our two most-loved pizzas on one base.",
    image: "/images/menu/pizza.jpg",
    likes: 482,
    tag: "Bestseller",
  },
  {
    id: "hungover-burger",
    name: "Hangover Burger",
    description: "Double patty, double cheese, house sauce. Not for the faint-hearted.",
    image: "/images/menu/burger.jpg",
    likes: 361,
    tag: "Chef's Pick",
  },
  {
    id: "chilli-cheese-fries",
    name: "Cheesy Peri Peri Fries",
    description: "Golden fries loaded with molten cheese and a peri peri kick.",
    image: "/images/menu/shakes.jpg",
    likes: 298,
  },
  {
    id: "crispy-chaap",
    name: "Hungry Crispy Chaap",
    description: "Soy chaap, fried crisp, tossed in our signature masala.",
    image: "/images/menu/chaap.jpg",
    likes: 274,
    tag: "Trending",
  },
];

export type GalleryImage = {
  id: string;
  image: string;
  alt: string;
  span?: "tall" | "wide";
};

export const galleryImages: GalleryImage[] = [
  { id: "g1", image: "/images/gallery/interior-1.jpg", alt: "Warm hanging lights over wooden tables at Hungry Hub", span: "tall" },
  { id: "g2", image: "/images/gallery/pizza.jpg", alt: "Fresh loaded pizza fresh out of the oven" },
  { id: "g3", image: "/images/gallery/interior-2.jpg", alt: "Olive green velvet chairs and cozy seating" },
  { id: "g4", image: "/images/gallery/burger.jpg", alt: "Stacked cheeseburger with dips", span: "wide" },
  { id: "g5", image: "/images/gallery/spread.jpg", alt: "Paneer tikka spread with naan and dips" },
  { id: "g6", image: "/images/gallery/friends.jpg", alt: "Friends enjoying food together at Hungry Hub" },
  { id: "g7", image: "/images/gallery/interior-3.jpg", alt: "Herringbone wood floor and warm interior lighting", span: "tall" },
  { id: "g8", image: "/images/gallery/dessert.jpg", alt: "Shakes and desserts at Hungry Hub" },
];

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ananya S.",
    role: "College Student, Kurukshetra University",
    quote:
      "Our group's default hangout spot now. The chaap is unmatched and the lighting makes every plate look like a magazine shot.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Rohit & Priya",
    role: "Regulars, Date Night",
    quote:
      "Cozy corner seating, warm lights, great pizza — it genuinely feels premium without feeling like it's trying too hard.",
    rating: 5,
  },
  {
    id: "t3",
    name: "The Malhotra Family",
    role: "Weekend Regulars",
    quote:
      "Finally a place in Pehowa where the kids are happy with the burgers and we're happy with the ambience. Win-win.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Karan V.",
    role: "Food Vlogger",
    quote:
      "The Hungry Hub Special pizza deserves its own fan club. Consistent quality every single visit.",
    rating: 5,
  },
];

export type WhyItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: WhyItem[] = [
  {
    icon: Leaf,
    title: "Fresh, Daily-Sourced",
    description: "No frozen shortcuts — dough, sauces and veggies prepped fresh every morning.",
  },
  {
    icon: Timer,
    title: "Fast Without Rushing",
    description: "Quick-fire kitchen, but never at the cost of getting your order exactly right.",
  },
  {
    icon: Sparkles,
    title: "Instagram-Worthy Ambience",
    description: "Warm hanging lights, wooden tables and olive velvet seating built for good photos.",
  },
  {
    icon: Users,
    title: "Made for Every Group",
    description: "Cozy corners for couples, big tables for families, room to hang for friends.",
  },
  {
    icon: ChefHat,
    title: "Chef-Curated Menu",
    description: "From wood-fired pizzas to loaded chaap — every recipe is tuned in-house.",
  },
  {
    icon: ThumbsUp,
    title: "Loved Locally",
    description: "Pehowa's go-to for a reason — ask anyone who's had the Hangover Burger.",
  },
];

export type EventItem = {
  title: string;
  description: string;
  day: string;
};

export const events: EventItem[] = [
  {
    title: "Student Hangout Hour",
    description: "Special combo pricing for college groups — bring your ID, bring your crew.",
    day: "Weekdays, 4–7 PM",
  },
  {
    title: "Family Sunday Brunch",
    description: "Extended brunch spread perfect for a relaxed Sunday out with the family.",
    day: "Sundays, 11 AM–2 PM",
  },
  {
    title: "Weekend Live Nights",
    description: "Acoustic sets and good food — the weekend wind-down Pehowa asked for.",
    day: "Fri–Sat, 8 PM onward",
  },
];

export const siteConfig = {
  name: "Hungry Hub",
  tagline: "Taste The Quality",
  phone: "+91 77000 01906",
  phoneRaw: "917700001906",
  whatsappMessage: "Hi Hungry Hub! I'd like to know more / place an order.",
  address: "Pehowa–Kaithal Road, Opp. Gupta Pump, Pehowa, Haryana",
  hours: "11:00 AM – 11:00 PM, all week",
  instagram: "https://instagram.com",
};
