import BottomNavbar from "./components/BottomNavbar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <main className="mx-auto max-w-sm py-8 text-white md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BottomNavbar />
    </main>
  );
}
