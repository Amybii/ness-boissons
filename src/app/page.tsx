import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PartnersBanner from "@/components/PartnersBanner";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PartnersBanner />
        <Categories />
        <About />
      </main>
      <Footer />
    </>
  );
}
