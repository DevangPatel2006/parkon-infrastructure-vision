import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type UserType = "building_owner" | "driver" | "other" | "";

export default function WaitlistSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("");
  const [city, setCity] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/20 transition-all";

  const userTypes: { value: UserType; label: string }[] = [
    { value: "building_owner", label: "Building Owner" },
    { value: "driver", label: "Driver" },
    { value: "other", label: "Other" },
  ];

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

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M5 10l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-foreground font-medium">You're on the list.</p>
                <p className="text-muted-foreground text-sm mt-1">
                  We'll reach out soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 ml-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 ml-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className={inputClasses}
                  />
                </div>

                {/* User Type */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 ml-1">
                    I am a...
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {userTypes.map((t) => (
                      <button
                        type="button"
                        key={t.value}
                        onClick={() => setUserType(t.value)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 border ${
                          userType === t.value
                            ? "bg-primary/15 border-primary/30 text-primary"
                            : "bg-secondary border-border text-muted-foreground hover:border-primary/20"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 ml-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Where are you based?"
                    className={inputClasses}
                  />
                </div>

                {/* Suggestion */}
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5 ml-1">
                    Any suggestions or thoughts?
                  </label>
                  <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Tell us what you'd like to see..."
                    rows={3}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_hsl(145_100%_50%/0.3)] transition-all duration-500 mt-2"
                >
                  Get Early Access
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
