import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { Integrations } from "@/components/integrations";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/global/navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className=" border-b -mx-32"></div>
        <Features />
        <div className=" border-b -mx-32"></div>
        <HowItWorks />
        <div className=" border-b -mx-32"></div>
        <Integrations />
        <div className=" border-b -mx-32"></div>
        <Testimonials />
        <div className=" border-b -mx-32"></div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
