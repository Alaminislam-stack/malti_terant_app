import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";


export default function Home() {
  return (
    <main className=" py-10 lg:py-[50px] px-10 lg:px-[200px]">
       <Hero />
       <Why />
       <HowWorks />
       <Pricing />
       <Testimonials />
    </main>
  );
}
