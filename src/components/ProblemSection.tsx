import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 14h24M12 14v10M20 14v10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="19" x2="18" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Parking sits unused",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 10v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 6l-2-2M24 6l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "Drivers circle endlessly",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8v4M20 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28h8a2 2 0 002-2V10l-6-6h-8a2 2 0 00-2 2v4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 18l2 6h4l2-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="5" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    text: "EV charging is unplanned",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-4"
        >
          The Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Cities weren't designed
          <br />
          <span className="text-muted-foreground">for what's coming.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-8"
            >
              <div className="text-primary/60 mb-6">{p.icon}</div>
              <p className="text-xl font-semibold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
