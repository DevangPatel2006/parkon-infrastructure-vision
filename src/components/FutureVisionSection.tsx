import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const visions = [
  "Parking becomes energy infrastructure",
  "Smart cities powered by real data",
  "EV-ready neighborhoods by default",
];

export default function FutureVisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-32 relative" ref={ref}>
      <div className="glow-line mb-20 sm:mb-32" />
      <div className="section-container text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary/60 mb-3 sm:mb-4"
        >
          The Future
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-16 tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Beyond parking.
          <br />
          <span className="gradient-text">Urban energy.</span>
        </motion.h2>

        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-lg mx-auto">
          {visions.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card px-6 sm:px-8 py-4 sm:py-5 w-full text-center"
            >
              <p className="text-sm sm:text-base font-medium tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {v}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
