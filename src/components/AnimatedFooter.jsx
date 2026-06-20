import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

const LINKS = [
  { label: "Work", href: "work" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const SOCIAL = [
  { label: "GitHub", href: PROFILE.links.github },
  { label: "npm", href: PROFILE.links.npm },
  { label: "Chrome Store", href: PROFILE.links.chromeExtension },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function AnimatedFooter() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-border px-6 md:px-10 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div
            variants={item}
            className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-accent/35 to-transparent"
          />

          {/* Large display name */}
          <motion.div variants={item} className="mb-12 overflow-hidden">
            <p className="type-header text-[clamp(48px,8vw,100px)] leading-none text-foreground/10 select-none">
              Tushar Singh
            </p>
          </motion.div>

          {/* Footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Tagline */}
            <motion.div variants={item} className="col-span-2">
              <p className="type-text max-w-xs">
                Building things that are meant to be used, not admired. Full-stack developer based in {PROFILE.location}.
              </p>
            </motion.div>

            {/* Nav links */}
            <motion.div variants={item}>
              <div className="type-meta mb-4">Navigation</div>
              <ul className="space-y-2">
                {LINKS.map(l => (
                  <li key={l.href}>
                    <button
                      onClick={() => scrollTo(l.href)}
                      className="type-text hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item}>
              <div className="type-meta mb-4">Social</div>
              <ul className="space-y-2">
                {SOCIAL.map(s => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="type-text hover:text-foreground transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-8 border-t border-border"
          >
            <div>
              <span className="type-header text-sm text-muted-foreground/50">Tushar Singh · 2026</span>
              <p className="type-meta mt-1 text-muted-foreground/50">
                Product engineering, carefully shipped.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
