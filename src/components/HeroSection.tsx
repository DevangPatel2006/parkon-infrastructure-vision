import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import heroCarImage from "@/assets/hero-car.jpg";

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

      {/* Hero car image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroCarImage}
          alt="Futuristic EV in premium parking infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 section-container text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1] sm:leading-[0.95] mb-6 sm:mb-8"
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
          className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
        >
          We help buildings unlock unused parking and power the future with EV-ready infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://forms.gle/u4MPw6xvRg5NWkfh8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 sm:py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_hsl(145_100%_50%/0.3)] transition-all duration-500 animate-pulse-glow text-center"
          >
            Join the Waitlist
          </a>
          <span className="text-xs sm:text-sm text-muted-foreground tracking-wide">
            Launching Soon
          </span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
