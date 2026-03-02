import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GOOGLE_FORM_URL = "https://forms.gle/u4MPw6xvRg5NWkfh8";

export default function WaitlistSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="waitlist" className="py-20 sm:py-32 relative" ref={ref}>
      <div className="glow-line mb-20 sm:mb-32" />
      <div className="section-container px-4">
        <div className="glass-card max-w-lg mx-auto p-6 sm:p-10 md:p-14 relative overflow-hidden">
          {/* Glow effect */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, hsl(145 100% 50% / 0.3), transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary/60 mb-3 sm:mb-4 text-center">
              Early Access
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 tracking-tight text-center"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Be first in line.
            </h2>
            <p className="text-muted-foreground mb-8 sm:mb-10 text-xs sm:text-sm text-center">
              Launching soon in select cities.
            </p>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_hsl(145_100%_50%/0.3)] transition-all duration-500 text-center"
            >
              Get Early Access
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
