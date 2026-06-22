import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, User, Code2, Mail } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "home" },
  { label: "Work", icon: Briefcase, href: "work" },
  { label: "About", icon: User, href: "about" },
  { label: "Skills", icon: Code2, href: "skills" },
  { label: "Contact", icon: Mail, href: "contact" },
];

export default function TubelightNavbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" }
    );

    const observed = new Set();
    let mutationObserver = null;

    const checkAndObserve = () => {
      NAV_ITEMS.forEach((item) => {
        const el = document.getElementById(item.href);
        if (el && !observed.has(el)) {
          observer.observe(el);
          observed.add(el);
        }
      });

      if (observed.size === NAV_ITEMS.length && mutationObserver) {
        mutationObserver.disconnect();
      }
    };

    // Initial check (handles static components)
    checkAndObserve();

    if (observed.size < NAV_ITEMS.length) {
      mutationObserver = new MutationObserver(() => {
        checkAndObserve();
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-2" : "py-4"
    )}>
      <div className={cn(
        "mx-auto flex items-center justify-between px-6 transition-all duration-300",
        scrolled
          ? "max-w-3xl rounded-2xl border border-border bg-background/80 backdrop-blur-xl shadow-lg px-5 py-2"
          : "max-w-6xl"
      )}>
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="group">
          <span className="inline-flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-[10px] font-semibold tracking-[0.2em] text-foreground transition-colors group-hover:border-accent/30 group-hover:text-accent">
              TS
            </span>
            <span className="type-header text-lg">
              Tushar
            </span>
          </span>
        </button>

        {/* Tubelight Nav */}
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map(item => {
            const Icon = item.icon;
            const isActive = active === item.href;
            return (
              <button
                key={item.href}
                onClick={() => { setActive(item.href); scrollTo(item.href); }}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="tubelight"
                    className="absolute inset-0 rounded-full border border-accent/40 bg-transparent"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10 hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="text-sm"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </motion.span>
            </AnimatePresence>
          </button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("contact")}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-white text-sm font-semibold tracking-wide"
          >
            Hire me
          </motion.button>
        </div>
      </div>
    </header>
  );
}
