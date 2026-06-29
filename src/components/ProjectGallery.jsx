import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { PROJECTS } from "../data/profile";
import CursorSpotlight from "./CursorSpotlight";

export default function ProjectGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="py-24 px-6 md:px-10 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-14"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4 type-meta">
              <div className="w-5 h-px bg-muted-foreground" /> Selected work
            </div>
            <h2 className="type-header text-[clamp(28px,3.5vw,42px)]">What I've shipped</h2>
          </div>
          <a
            href="https://github.com/tusharsingh3"
            target="_blank"
            rel="noopener noreferrer"
            className="type-link hidden sm:block"
          >
            GitHub ↗
          </a>
        </motion.div>

        {/* Project rows */}
        <div className="space-y-0">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              id={`project-${p.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
            <motion.div
              layout
              onClick={() => setSelected(selected === p.id ? null : p.id)}
              className="-mx-4"
            >
              <CursorSpotlight
                className={`group border-t border-border py-6 rounded-2xl px-4 transition-all duration-300 ${
                  selected === p.id
                    ? `bg-gradient-to-r ${p.color} border-accent/20 shadow-[0_12px_40px_hsl(var(--accent)/0.08)]`
                    : "hover:bg-card/40 hover:border-accent/10"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className={`font-serif text-xs tracking-widest pt-1 shrink-0 ${selected === p.id ? p.accent : "text-muted-foreground/40"} transition-colors`}>
                    {p.n}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4 mb-1">
                      <motion.h3
                        className="type-header text-[clamp(24px,3vw,40px)] text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        animate={{ x: selected === p.id ? 6 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      >
                        {p.title}
                      </motion.h3>
                      <span className="type-meta hidden sm:inline">{p.cat}</span>
                    </div>

                    <AnimatePresence initial={false}>
                      {selected === p.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                            <div>
                              <p className="type-text mb-2 max-w-xl">{p.desc}</p>
                              <div className="type-meta normal-case italic">{p.customers}</div>
                            </div>
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="type-link inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5"
                            >
                              Open project
                              <span className="text-sm leading-none">↗</span>
                            </a>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4 mb-4">
                            {p.stack.map(s => (
                              <motion.span
                                key={s}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="type-meta px-2 py-0.5 rounded-full border border-border bg-background/40"
                              >
                                {s}
                              </motion.span>
                            ))}
                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0 pt-1">
                    <span className="type-meta">{p.year}</span>
                    <motion.span
                      className={`text-xl ${selected === p.id ? p.accent : "text-muted-foreground/30"} transition-colors`}
                      animate={{ x: selected === p.id ? 3 : 0, y: selected === p.id ? -3 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      ↗
                    </motion.span>
                  </div>
                </div>
              </CursorSpotlight>
            </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
