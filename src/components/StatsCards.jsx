import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { STATS } from "../data/profile";
import CursorSpotlight from "./CursorSpotlight";

function Counter({ target, suffix, visible }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const steps = 40, dur = 1200;
    const inc = target / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + inc, target);
      setCount(Math.round(cur));
      if (cur >= target) clearInterval(id);
    }, dur / steps);
    return () => clearInterval(id);
  }, [visible, target]);
  return <>{count}{suffix}</>;
}

export default function StatsCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6 md:px-10 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-border bg-card transition-colors hover:border-accent/30"
            >
              <CursorSpotlight className="p-6">
                <div className="type-header text-[clamp(36px,4vw,52px)] leading-none mb-2 group-hover:text-accent transition-colors duration-300">
                  <Counter target={s.n} suffix={s.suf} visible={inView} />
                </div>
                <div className="type-meta">{s.label}</div>
              </CursorSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
