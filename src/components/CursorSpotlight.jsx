import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function CursorSpotlight({ className = "", children }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, hsl(var(--accent) / 0.18), transparent 60%)`;

  const handleMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    mouseX.set(Math.min(100, Math.max(0, x)));
    mouseY.set(Math.min(100, Math.max(0, y)));
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleMove}
      onMouseLeave={() => {
        mouseX.set(50);
        mouseY.set(50);
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
