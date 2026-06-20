import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HIGHLIGHTS } from "../data/profile";
import CursorSpotlight from "./CursorSpotlight";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % HIGHLIGHTS.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 border-b border-border bg-card/20">
      <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <div className="flex items-center justify-center gap-2.5 mb-4 type-meta">
              <div className="w-5 h-px bg-muted-foreground" /> Highlights <div className="w-5 h-px bg-muted-foreground" />
            </div>
            <h2 className="type-header text-[clamp(28px,3.5vw,42px)]">
              What I'm focused on
            </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards row */}
          <div className="flex gap-4 overflow-hidden">
            <div className="flex gap-4 w-full relative min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 60, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <CursorSpotlight className="rounded-2xl border border-border bg-card p-8 relative">
                    {/* Accent mark */}
                    <div className="absolute top-6 right-8 font-serif text-6xl text-accent/10 leading-none select-none">
                      "
                    </div>
                    <div className="type-meta text-accent mb-3">
                      {HIGHLIGHTS[current].subtitle}
                    </div>
                    <h3 className="type-header text-2xl mb-4">
                      {HIGHLIGHTS[current].title}
                    </h3>
                    <p className="type-text text-base mb-6 relative z-10">
                      {HIGHLIGHTS[current].text}
                    </p>
                    <div className="type-meta">
                      {current + 1}/{HIGHLIGHTS.length}
                    </div>
                  </CursorSpotlight>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {HIGHLIGHTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-accent w-5" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
