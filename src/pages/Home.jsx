import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import WhyAccounts from "../components/landing/WhyAccounts";
import WhyLegitix from "../components/landing/WhyLegitix";
import ProductShowcase from "../components/landing/ProductShowcase";
import VideoShowcase from "../components/landing/VideoShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyAccounts />
      <WhyLegitix />
      <ProductShowcase />
      <VideoShowcase />
    </>
  );
}
