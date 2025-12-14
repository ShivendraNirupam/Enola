import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div
        data-aos="zoom-in"
        className="mt-10 hidden md:flex justify-center items-center w-full"
      >
        <div className="w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent"></div>
      </div>
      <About />
      <Footer />
    </div>
  );
}
