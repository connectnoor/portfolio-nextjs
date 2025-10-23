import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import LogoLoop from "@/components/LogoLoop";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <LogoLoop />
        {/* <Blog /> */}
        {/* <Testimonials /> */}
        <AboutMe />
        {/* <Contact /> */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
