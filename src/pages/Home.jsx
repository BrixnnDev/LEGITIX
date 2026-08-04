import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import WhyAccounts from "../components/landing/WhyAccounts";
import WhyLegitix from "../components/landing/WhyLegitix";
import ProductShowcase from "../components/landing/ProductShowcase";
import BlogSection from "../components/landing/BlogSection";
import UpcomingSection from "../components/products/UpcomingSection";
import HackStatus from "../components/landing/HackStatus";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyAccounts />
      <WhyLegitix />
      <ProductShowcase />
      <BlogSection />
      <UpcomingSection />
      <HackStatus />
    </>
  );
}
