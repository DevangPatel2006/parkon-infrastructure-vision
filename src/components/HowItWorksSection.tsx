import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Partner with buildings",
    desc: "We onboard properties with underused parking capacity.",
  },
  {
    num: "02",
    title: "Open to nearby drivers",
    desc: "Spaces become accessible to verified, local drivers.",
  },
  {
    num: "03",
    title: "Add EV charging",
    desc: "Install chargers where demand actually exists.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="glow-line mb-32" />
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-4"
        >
          How It Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Three steps.
          <br />
          <span className="text-muted-foreground">Zero complexity.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              <span className="text-6xl font-bold text-primary/[0.07] absolute -top-4 -left-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {step.num}
              </span>
              <div className="pt-12">
                <h3 className="text-lg font-semibold mb-2 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 text-primary/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
