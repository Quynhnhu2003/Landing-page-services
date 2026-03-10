import Booking from "../components/Booking/Booking";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";

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
