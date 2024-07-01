import Header from "@/components/landing page/Header";
import Hero from "@/components/landing page/Hero";

export default function Home() {
  return (
    <main className="px-[200px] py-[45px] flex flex-col gap-[150px]">
      <div className="flex flex-col gap-[90px]">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
