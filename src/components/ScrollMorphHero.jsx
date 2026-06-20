import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function ScrollMorphHero() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const tsY = useTransform(smoothProgress, [0, 1], [0, -120]);
  const tsOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const nameY = useTransform(smoothProgress, [0, 0.4], [0, -80]);
  const nameOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
  const subY = useTransform(smoothProgress, [0, 0.3], [0, -40]);
  const subOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const tiltX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const tiltY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);
  const spotlightX = useTransform(mouseX, (value) => `${(value + 0.5) * 100}%`);
  const spotlightY = useTransform(mouseY, (value) => `${(value + 0.5) * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${spotlightX} ${spotlightY}, hsl(var(--accent) / 0.22), transparent 58%)`;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleCardMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 border-b border-border overflow-hidden"
    >
      {/* TS watermark parallax */}
      <motion.div
        style={{ y: tsY, opacity: tsOpacity }}
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 select-none pointer-events-none"
      >
        <span className="font-serif text-[clamp(200px,28vw,380px)] font-normal leading-none tracking-[-0.04em] text-foreground/[0.02]">
          TS
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-10 xl:gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-6 h-px bg-accent" />
            <span className="type-meta">
              {PROFILE.title} · {PROFILE.location}
            </span>
          </motion.div>

          <motion.div style={{ y: nameY, opacity: nameOpacity }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="type-header text-[clamp(54px,8.5vw,120px)] italic"
            >
              Tushar
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="type-header text-[clamp(54px,8.5vw,120px)] italic mb-7"
            >
              Singh
            </motion.h1>
          </motion.div>

          <motion.div style={{ y: subY, opacity: subOpacity }} className="mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="type-text text-[clamp(14px,1.4vw,17px)] max-w-xl mb-7"
            >
              {PROFILE.summary} I've contributed to <span className="text-foreground">CoolR</span> and
              <span className="text-foreground"> Volza</span>, published npm packages, and shipped a Chrome extension.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("work")}
                className="px-7 py-3 rounded-sm bg-accent text-white text-xs font-semibold tracking-widest uppercase"
              >
                View work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("skills")}
                className="px-7 py-3 rounded-sm border border-border text-muted-foreground text-xs font-medium tracking-widest uppercase hover:border-accent/30 hover:text-foreground transition-colors"
              >
                Skills
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("contact")}
                className="px-7 py-3 rounded-sm border border-border text-muted-foreground text-xs font-medium tracking-widest uppercase hover:border-accent/30 hover:text-foreground transition-colors"
              >
                Contact
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3 max-w-2xl"
          >
            {PROFILE.featuredTech.map((s) => (
              <div
                key={s}
                className="type-meta rounded-full border border-border bg-card/80 px-4 py-2"
              >
                {s}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative justify-self-center lg:justify-self-end w-full max-w-[400px]"
          style={{ perspective: 1400 }}
        >
          <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-accent/10 blur-2xl" />
          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl"
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 120, damping: 24, mass: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: spotlight }}
            />
            <div className="aspect-[4/5] overflow-hidden">
              <picture>
                <source srcSet={PROFILE.photo} type="image/webp" />
                <motion.img
                  src={PROFILE.photoFallback}
                  alt="Tushar Singh — Full-Stack Developer"
                  width={1024}
                  height={1536}
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-top"
                  style={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.6 }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </picture>
            </div>

            <motion.div
              className="border-t border-border p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="type-text text-foreground font-medium">{PROFILE.name}</div>
                  <div className="type-meta">{PROFILE.title}</div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background type-meta">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Currently building
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background/50 p-3">
                  <div className="type-meta mb-1">Location</div>
                  <div className="type-text">{PROFILE.location}</div>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-3">
                  <div className="type-meta mb-1">Time zone</div>
                  <div className="type-text">{PROFILE.timeZone}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
      </motion.div>
    </section>
  );
}
