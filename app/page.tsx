import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
import Stats from "@/components/Stats";
import VillaHighlights from "@/components/VillaHighlights";
import ScrollToTop from "@/components/ScrollToTop";



export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <Hero />
      
      <Stats />

      <BookingBar />

      <About />

      <Amenities />

      <Rooms />
      
      <VillaHighlights />

      <GallerySection />

      <BookingForm />

      <Testimonials />

      <Contact />

      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}