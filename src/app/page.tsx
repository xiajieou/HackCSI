import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Schedule } from "@/components/Schedule";
import { FAQ } from "@/components/FAQ";
import { Sponsors } from "@/components/Sponsors";
import { Register } from "@/components/Register";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Schedule />
        <FAQ />
        <Sponsors />
        <Register />
      </main>
      <Footer />
    </>
  );
}

