import AboutUs from "@/components/landing page/AboutUs";
import Footer from "@/components/landing page/Footer";
import Form from "@/components/landing page/Form";
import Header from "@/components/landing page/Header";
import Hero from "@/components/landing page/Hero";
import HowItWorks from "@/components/landing page/HowItWorks";
import JoinNow from "@/components/landing page/JoinNow";
import Pricing from "@/components/landing page/Pricing";
import WhyItsImportant from "@/components/landing page/WhyItsImportant";

export default function Home() {
  return (
    <main className="pt-[45px] flex flex-col gap-[100px]">
      <div className="flex flex-col gap-[70px]">
        <Header />
        <Hero />
      </div>
      <HowItWorks />
      <WhyItsImportant />
      <Pricing />
      <JoinNow />
      <AboutUs />
      <div>
        <Form />
        <Footer />
      </div>
    </main>
  );
}
