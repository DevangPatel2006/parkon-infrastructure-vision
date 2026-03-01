import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    title: "Buildings stay in control",
    desc: "Property owners choose when and how to share their spaces.",
  },
  {
    title: "Drivers park legally nearby",
    desc: "Access verified spots without circling blocks.",
  },
  {
    title: "EV charging meets demand",
    desc: "Infrastructure appears where drivers actually need it.",
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-32 relative" ref={ref}>
      <div className="glow-line mb-20 sm:mb-32" />
      <div className="section-container px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary/60 mb-3 sm:mb-4"
        >
          The Solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-16 tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Simple for everyone.
          <br />
          <span className="gradient-text">Powerful for cities.</span>
        </motion.h2>

        <div className="space-y-3 sm:space-y-4">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-5 sm:p-8 flex items-start gap-4 sm:gap-6"
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xs sm:text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
