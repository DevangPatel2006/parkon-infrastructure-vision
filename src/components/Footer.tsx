export default function Footer() {
  return (
    <footer className="py-10 sm:py-16 border-t border-border/50">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="gradient-text font-bold text-[10px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>P</span>
          </div>
          <span className="text-foreground font-semibold text-sm tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Parkon
          </span>
        </div>
        <p className="text-muted-foreground text-[10px] sm:text-xs tracking-wide">
          Built for cities, not chaos.
        </p>
      </div>
    </footer>
  );
}
