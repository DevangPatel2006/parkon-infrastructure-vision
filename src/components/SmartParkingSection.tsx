import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Car, Zap, BarChart3, ShieldCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Building2,
    title: "Monetize Empty Parking",
    desc: "Turn unused parking spaces into a steady income stream with real-time booking and pricing control.",
  },
  {
    icon: Car,
    title: "Find Parking Instantly",
    desc: "Discover nearby parking, check availability, prices, and reserve in seconds.",
  },
  {
    icon: Zap,
    title: "EV Charging Integration",
    desc: "Support EV users with charging-enabled parking and track charging sessions seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Live Dashboard Control",
    desc: "Monitor slots, bookings, revenue, and occupancy in real time from one dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Intelligent Slot Allocation",
    desc: "Availability-based allocation with locking ensures fair and accurate bookings.",
  },
  {
    icon: CreditCard,
    title: "Fast & Secure Payments",
    desc: "UPI, cards, and invoices — all handled automatically and transparently.",
  },
];

export default function SmartParkingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

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
          Platform Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 sm:mb-16 tracking-tight leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Everything You Need to
          <br />
          <span className="gradient-text">Run Smart Parking.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card-hover p-5 sm:p-7 flex flex-col gap-3 sm:gap-4"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3
                className="text-base sm:text-lg font-semibold tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center text-muted-foreground text-xs sm:text-sm mt-10 sm:mt-14"
        >
          Built to scale — from a single parking lot to city-wide infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex justify-center mt-6 sm:mt-8"
        >
          <Button
            onClick={scrollToWaitlist}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold tracking-tight transition-all duration-300 hover:shadow-[0_0_30px_hsl(145_100%_50%/0.3)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Join the Smart Parking Network
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
