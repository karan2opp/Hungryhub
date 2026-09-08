import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OffersBanner } from "@/components/OffersBanner";
import { CustomerFavorites } from "@/components/CustomerFavorites";
import { MenuPreview } from "@/components/MenuPreview";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { VisitUs } from "@/components/VisitUs";
import { Footer } from "@/components/Footer";
import { LikeCounter } from "@/components/LikeCounter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OffersBanner />
        <CustomerFavorites />
        <MenuPreview />
        <Events />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <VisitUs />
      </main>
      <Footer />
      <LikeCounter />
    </>
  );
}
