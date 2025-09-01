import Header from "@/react-app/components/Header";
import Hero from "@/react-app/components/Hero";
import Features from "@/react-app/components/Features";
import CEOMessage from "@/react-app/components/CEOMessage";
import HowItWorks from "@/react-app/components/HowItWorks";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CEOMessage />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}
