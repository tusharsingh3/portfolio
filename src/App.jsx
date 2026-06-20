import { useState, useEffect, lazy, Suspense } from "react";

import TubelightNavbar from "./components/TubelightNavbar";
import ScrollMorphHero from "./components/ScrollMorphHero";

const StatsCards = lazy(() => import("./components/StatsCards"));
const ProjectGallery = lazy(() => import("./components/ProjectGallery"));
const BentoAbout = lazy(() => import("./components/BentoAbout"));
const LogoCloud = lazy(() => import("./components/LogoCloud"));
const RadialTimeline = lazy(() => import("./components/RadialTimeline"));
const TestimonialsCarousel = lazy(() => import("./components/TestimonialsCarousel"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const AnimatedFooter = lazy(() => import("./components/AnimatedFooter"));

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);

    requestAnimationFrame(() => {
      const el = document.createElement("div");
      el.style.color = `hsl(${getComputedStyle(root).getPropertyValue("--accent").trim()})`;
      document.body.appendChild(el);
      const rgb = getComputedStyle(el).color;
      el.remove();
      const [r, g, b] = rgb.match(/\d+/g).map(Number);
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='24' viewBox='0 0 20 24'><path d='M2 1L18 12L9.5 13.5L6 22Z' fill='${hex}' stroke='${hex}' stroke-width='1.5' stroke-linejoin='round'/></svg>`;
      const encoded = `url("data:image/svg+xml,${encodeURIComponent(svg)}") 2 1, pointer`;
      root.style.setProperty("--cursor-pointer", encoded);
    });
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Tubelight Navbar */}
      <TubelightNavbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <ScrollMorphHero />
        <Suspense>
          <StatsCards />
          <ProjectGallery />
          <BentoAbout />
          <LogoCloud />
          <RadialTimeline />
          <TestimonialsCarousel />
          <ContactForm />
          <AnimatedFooter />
        </Suspense>
      </main>
    </div>
  );
}
