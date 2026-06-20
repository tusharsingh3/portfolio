import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Components
import TubelightNavbar from "./components/TubelightNavbar";
import ScrollMorphHero from "./components/ScrollMorphHero";
import StatsCards from "./components/StatsCards";
import ProjectGallery from "./components/ProjectGallery";
import BentoAbout from "./components/BentoAbout";
import LogoCloud from "./components/LogoCloud";
import RadialTimeline from "./components/RadialTimeline";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ContactForm from "./components/ContactForm";
import AnimatedFooter from "./components/AnimatedFooter";

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

  // Custom spring cursor
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springX = useSpring(cursorX, { stiffness: 350, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 350, damping: 28 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const h = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, select');
      setCursorHover(!!interactive);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Spring cursor */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: -4,
          translateY: -4,
          width: 8,
          height: 8,
          background: "hsl(var(--accent))",
          opacity: cursorHover ? 0 : 1,
          transition: "opacity 0.15s",
          top: 0,
          left: 0,
        }}
      />

      {/* Tubelight Navbar */}
      <TubelightNavbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Sections */}
      <main>
        <ScrollMorphHero />
        <StatsCards />
        <ProjectGallery />
        <BentoAbout />
        <LogoCloud />
        <RadialTimeline />
        <TestimonialsCarousel />
        <ContactForm />
        <AnimatedFooter />
      </main>
    </div>
  );
}
