import Booking from "../components/Booking";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Navbar from "../components/Navbar";

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
