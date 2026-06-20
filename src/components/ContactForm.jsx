import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2.5 mb-4 type-meta">
            <div className="w-5 h-px bg-muted-foreground" /> Contact
          </div>
          <h2 className="type-header text-[clamp(32px,5vw,64px)] leading-none">
            Let's build something<br />
            <em className="text-accent">that ships.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="type-text mb-10 max-w-xs">
              Product work, AI tooling, and browser extensions are the main areas I focus on.
            </p>
            <div className="mb-2 type-meta">Quick links</div>
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                ["GitHub", PROFILE.links.github],
                ["npm", PROFILE.links.npm],
                ["Chrome Store", PROFILE.links.chromeExtension],
              ].map(([l, h]) => (
                <a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-link"
                >
                  {l} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form with AnimatePresence */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="py-10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="type-meta text-accent">Message sent</span>
                  </div>
                  <p className="type-header text-[clamp(22px,2.5vw,30px)] leading-snug">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-0"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField placeholder="Name" required />
                    <FormField placeholder="Email" type="email" required />
                  </div>
                  <FormField placeholder="What are you building?" />
                  <FormField placeholder="Tell me more…" isTextarea required />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={sending}
                    className="w-full py-3.5 rounded-sm bg-accent text-white text-xs font-semibold tracking-widest uppercase disabled:opacity-60 transition-opacity"
                  >
                    {sending ? "Sending…" : "Send message →"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({ placeholder, type = "text", isTextarea = false, required }) {
  return (
    <div className="relative group mb-6">
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          required={required}
          rows={4}
          className="w-full bg-transparent border-0 border-b border-border pb-3 pt-1 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none resize-none focus:border-accent transition-colors duration-200"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full bg-transparent border-0 border-b border-border pb-3 pt-1 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-accent transition-colors duration-200"
        />
      )}
    </div>
  );
}
