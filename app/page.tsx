import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BookingBar from "@/components/BookingBar";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";
import GallerySection from "@/components/GallerySection";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VillaHighlights from "@/components/VillaHighlights";
import ScrollToTop from "@/components/ScrollToTop";
import TrustSection from "@/components/TrustSection";
import FAQ from "@/components/FAQ";
import CallButton from "@/components/CallButton";
import ScrollProgress from "@/components/ScrollProgress";
import NearbyAttractions from "@/components/NearbyAttractions";
import HouseRules from "@/components/HouseRules";
import WhyBookDirect from "@/components/WhyBookDirect";
import CancellationPolicy from "@/components/CancellationPolicy";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <ScrollProgress />

      <Navbar />

      <Hero />

      <Stats />

      <BookingBar />

      <About />

      <TrustSection />

      <Amenities />

      <Rooms />

      <VillaHighlights />

      <GallerySection />

      <NearbyAttractions />

      <BookingForm />

      <HouseRules />

      <WhyBookDirect />

      <CancellationPolicy />

      <Testimonials />

      <FAQ />

      <Contact />

      <Footer />

      <WhatsAppButton />

      <CallButton />

      <ScrollToTop />

    </main>
  );
}