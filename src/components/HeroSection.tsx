import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const HeroScene = lazy(() => import("./HeroScene"));

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(145 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(145 100% 50% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary/70 mb-8 border border-primary/10 rounded-full px-4 py-1.5 bg-primary/5">
            Coming Soon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Turning Parking
          <br />
          Into{" "}
          <span className="gradient-text">Infrastructure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          We help buildings unlock unused parking and power the future with EV-ready infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#waitlist"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_hsl(145_100%_50%/0.3)] transition-all duration-500 animate-pulse-glow"
          >
            Join the Waitlist
          </a>
          <span className="text-sm text-muted-foreground tracking-wide">
            Launching Soon
          </span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
