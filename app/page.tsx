import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";


export default function Home() {
  return (
    <main>
      <Navbar />
      <ServicesSection />
    <Booking />
      <Footer />
    </main>
  );
}
