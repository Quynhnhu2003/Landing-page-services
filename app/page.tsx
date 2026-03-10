import Booking from "../components/Booking";
import Footer from "../components/Footer/Footer";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import Navbar from "../components/Navbar/Navbar";

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
