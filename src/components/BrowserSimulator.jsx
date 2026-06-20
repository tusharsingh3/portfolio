import { motion } from "framer-motion";

export default function BrowserSimulator({ url, title, accent, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="rounded-xl border border-border overflow-hidden shadow-lg max-w-xl mt-4 hover:border-accent/30 transition-colors"
    >
      {/* Browser chrome */}
      <div className="bg-card border-b border-border px-3 py-2.5 flex items-center gap-2">
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        {/* URL bar */}
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-background/60 border border-border flex items-center gap-2">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-muted-foreground/40 shrink-0">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[10px] text-muted-foreground/60 tracking-wide truncate">{url}</span>
        </div>
        <div className="w-4 h-4 rounded-sm bg-muted/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/20" />
        </div>
      </div>

      {/* Browser content - simulated UI */}
      <div className="bg-background/40 p-4 min-h-[120px] flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className={`text-sm font-medium ${accent || "text-accent"}`}>{title}</div>
          <div className="flex gap-1 justify-center">
            {[60, 80, 45, 70, 55].map((w, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                className="w-4 rounded-sm bg-accent/20 origin-bottom"
                style={{ height: `${w * 0.6}px` }}
              />
            ))}
          </div>
          <div className="text-[10px] text-muted-foreground">Live demo preview</div>
        </div>
      </div>
    </motion.div>
    </a>
  );
}
