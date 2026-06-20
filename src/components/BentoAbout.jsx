import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";
import CursorSpotlight from "./CursorSpotlight";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
  })
};

const TAGS = [
  "Full-Stack Dev",
  "Chrome Extensions",
  "Open Source",
  "AI Workflows",
  "Trade Tech",
  "F&B SaaS",
];

function BentoCard({ className, children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={className}
    >
      <CursorSpotlight className="rounded-2xl border border-border bg-card p-6">
        {children}
      </CursorSpotlight>
    </motion.div>
  );
}

export default function BentoAbout() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-4 type-meta">
            <div className="w-5 h-px bg-muted-foreground" /> About
          </div>
          <h2 className="type-header text-[clamp(28px,3.5vw,42px)]">
            Background & stack
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* Main bio card — spans 2 cols */}
          <BentoCard className="md:col-span-2 md:row-span-2" delay={0}>
            <p className="type-header text-[clamp(20px,2.4vw,28px)] mb-6">
              I build things that
              <br />
              are meant to be used,
              <br />
              <em className="text-muted-foreground">not just admired.</em>
            </p>
            <p className="type-text mb-4">
              Working with <span className="text-foreground">CoolR</span> on AI-powered retail intelligence and with{" "}
              <span className="text-foreground">Volza</span> on global trade data experiences.
            </p>
            <p className="type-text mb-4">
              On the open-source side: <span className="text-foreground">nexbase-ui</span> and{" "}
              <span className="text-foreground">nexbase</span>, both published under my npm profile
              <span className="text-foreground"> @tushar89</span>.
            </p>
            <p className="type-text">
              Also published the <span className="text-foreground">AI Usage Tracker</span> Chrome extension for tracking Claude, ChatGPT, and Gemini usage from the browser toolbar.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map(t => (
                <span key={t} className="type-meta px-2.5 py-1 rounded-full border border-border">
                  {t}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* Availability card */}
          <BentoCard delay={0.1}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="type-meta text-accent font-medium">Current focus</span>
            </div>
            <p className="type-text">
              Product engineering, AI workflows, browser extensions, and full-stack systems.
            </p>
          </BentoCard>

          {/* Location card */}
          <BentoCard delay={0.15}>
            <div className="text-2xl mb-2">📍</div>
            <div className="type-text text-foreground font-medium">Ghaziabad, IN</div>
            <div className="type-meta mt-1">UTC+5:30 · Open to remote</div>
          </BentoCard>

          {/* Info table */}
          <BentoCard className="md:col-span-3" delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="py-4 md:py-0 md:pr-6">
                <InfoBlock label="Role" value="Full-Stack Developer" />
                <InfoBlock className="mt-5" label="npm" value="@tushar89" />
                <InfoBlock className="mt-5" label="OSS" value="nexbase-ui · nexbase" />
              </div>

              <div className="py-4 md:py-0 md:px-6">
                <InfoBlock label="Location" value={PROFILE.location} />
                <InfoBlock className="mt-5" label="Stack" value="React · Node.js · MSSQL · MongoDB" />
              </div>

              <div className="py-4 md:py-0 md:pl-6">
                <InfoBlock label="GitHub" value="tusharsingh3" />
                <InfoBlock className="mt-5" label="Currently" value="CoolR + npm packages" />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value, className = "" }) {
  return (
    <div className={className}>
      <div className="type-meta mb-1">{label}</div>
      <div className="type-text text-foreground">{value}</div>
    </div>
  );
}
