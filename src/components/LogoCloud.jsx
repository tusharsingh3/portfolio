import { motion } from "framer-motion";
import { SKILLS, STACK_ROWS } from "../data/profile";

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex gap-4 shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card/60 backdrop-blur-sm shrink-0 hover:border-accent/30 transition-colors"
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span className="type-text text-xs font-medium whitespace-nowrap">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoCloud() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 border-b border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-4 type-meta">
            <div className="w-5 h-px bg-muted-foreground" /> Expertise
          </div>
          <h2 className="type-header text-[clamp(28px,3.5vw,42px)]">
            Stack & proficiency
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 mb-16">
          {SKILLS.map((s, i) => (
            <SkillBar key={s.label} label={s.label} pct={s.pct} note={s.note} delay={i * 0.07} />
          ))}
        </div>

        {/* Logo Cloud Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <MarqueeRow items={STACK_ROWS[0]} />
          <MarqueeRow items={STACK_ROWS[1]} reverse />
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ label, pct, note, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between py-4 border-b border-border gap-4"
    >
      <span className="type-text w-28 shrink-0">{label}</span>
      <div className="flex-1 h-px bg-border relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 h-px bg-accent"
          style={{ boxShadow: '0 0 6px hsl(var(--accent) / 0.6)' }}
        />
        <motion.div
          initial={{ left: 0 }}
          whileInView={{ left: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[-3px] w-px h-[7px] bg-accent"
        />
      </div>
      <span className="type-meta text-accent">{note}</span>
      <span className="type-meta w-8 text-right">{pct}%</span>
    </motion.div>
  );
}
