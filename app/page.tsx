import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ServicesSection />
      <TestimonialsSection />
      <Booking />
      <Footer />
    </main>
  );
}
