import Header from "@/components/landing page/Header";
import Hero from "@/components/landing page/Hero";
import HowItWorks from "@/components/landing page/HowItWorks";
import WhyItsImportant from "@/components/landing page/WhyItsImportant";

export default function Home() {
  return (
    <main className="px-[200px] py-[45px] flex flex-col gap-[100px]">
      <div className="flex flex-col gap-[70px]">
        <Header />
        <Hero />
      </div>
      <HowItWorks />
      <WhyItsImportant />
    </main>
  );
}
