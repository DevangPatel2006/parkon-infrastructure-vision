import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-32 relative" ref={ref}>
      <div className="glow-line mb-32" />
      <div className="section-container">
        <div className="glass-card max-w-2xl mx-auto p-10 md:p-14 text-center relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20" style={{
            background: 'radial-gradient(circle, hsl(145 100% 50% / 0.3), transparent 70%)'
          }} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-4">
              Early Access
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Be first in line.
            </h2>
            <p className="text-muted-foreground mb-10 text-sm">
              Launching soon in select cities.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-foreground font-medium">You're on the list.</p>
                <p className="text-muted-foreground text-sm mt-1">We'll reach out soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_hsl(145_100%_50%/0.3)] transition-all duration-500 whitespace-nowrap"
                >
                  Get Early Access
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
