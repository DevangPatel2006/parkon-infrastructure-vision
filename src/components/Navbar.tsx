import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="gradient-text font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>P</span>
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Parkon
          </span>
        </div>
        <a
          href="https://forms.gle/u4MPw6xvRg5NWkfh8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all duration-300"
        >
          Join Waitlist
        </a>
      </div>
    </motion.nav>
  );
}
