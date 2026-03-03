import { motion } from "framer-motion";
import parkonLogo from "@/assets/parkon-logo.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5"
    >
      <div className="max-w-6xl mx-auto flex items-center">
        <img src={parkonLogo} alt="ParkOn" className="h-24 sm:h-28" />
      </div>
    </motion.nav>
  );
}
