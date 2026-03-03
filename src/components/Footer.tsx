import parkonLogo from "@/assets/parkon-logo.png";

export default function Footer() {
  return (
    <footer className="py-10 sm:py-16 border-t border-border/50">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 px-4">
        <img src={parkonLogo} alt="ParkOn" className="h-6" />
        <p className="text-muted-foreground text-[10px] sm:text-xs tracking-wide">
          Built for cities, not chaos.
        </p>
      </div>
    </footer>
  );
}
