import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

const TIMELINE = [
  {
    period: "Currently",
    year: "2026",
    title: "CoolR",
    org: "AI SaaS Platform",
    desc:
      "Currently working on CoolR, an AI-powered retail intelligence platform that turns cooler and freezer images into commercial insight.",
    tags: ["React.js", "Node.js", "MSSQL", "ElasticSearch", "Cloud"],
    accent: "hsl(271 81% 66%)",
    link: PROFILE.links.coolr,
  },
  {
    period: "2025",
    year: "2025",
    title: "AI Usage Tracker",
    org: "Chrome Extension",
    desc:
      "Shipped the AI Usage Tracker Chrome extension for tracking Claude, ChatGPT, and Gemini usage from the browser toolbar.",
    tags: ["Chrome MV3", "JavaScript", "Canvas API", "IndexedDB"],
    accent: "hsl(330 81% 60%)",
    link: PROFILE.links.chromeExtension,
  },
  {
    period: "May 2026",
    year: "2026",
    title: "npm packages",
    org: "@tushar89",
    desc:
      "Published and refined npm packages like nexbase-ui, nexbase, and nexlogger under my npm profile.",
    tags: ["React.js", "TypeScript", "npm", "Open Source"],
    accent: "hsl(142 71% 45%)",
    link: PROFILE.links.npmSettings,
  },
  {
    period: "2020 - 2023",
    year: "2023",
    title: "Volza",
    org: "Trade Intelligence",
    desc:
      "Worked on Volza from 2020 to 2023, building global export-import trade data and analytics experiences.",
    tags: ["React.js", "Node.js", "MSSQL", "ElasticSearch", "REST APIs", "Data Viz"],
    accent: "hsl(217 91% 60%)",
    link: PROFILE.links.volza,
  },
];

export default function RadialTimeline() {
  return (
    <section className="py-24 px-6 md:px-10 border-b border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2.5 mb-4 type-meta">
            <div className="w-5 h-px bg-muted-foreground" /> Experience
          </div>
          <h2 className="type-header text-[clamp(28px,3.5vw,42px)]">
            What I've shipped
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border to-transparent origin-top"
          />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-1 w-10 h-10 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                    className="w-4 h-4 rounded-full border-2 border-accent bg-background"
                    style={{ boxShadow: `0 0 12px ${item.accent}40` }}
                  />
                </div>

                <div className="group">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="type-meta text-accent font-medium">
                      {item.period}
                    </span>
                    <span className="type-meta">
                      {item.org}
                    </span>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-header text-xl mb-2 group-hover:text-accent/90 transition-colors duration-300 inline-block"
                  >
                    {item.title} <span className="type-meta text-sm">↗</span>
                  </a>
                  <p className="type-text mb-3 max-w-lg">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="type-meta px-2 py-0.5 rounded border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
