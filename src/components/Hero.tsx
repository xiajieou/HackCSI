import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]"
      aria-labelledby="hero-heading"
    >
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,255,65,0.03) 24px, rgba(0,255,65,0.03) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(0,255,65,0.03) 24px, rgba(0,255,65,0.03) 25px)`,
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <pre
          id="hero-heading"
          className="text-[#00ff41] terminal-glow mb-2 text-xs sm:text-sm md:text-base leading-tight font-mono mx-auto inline-block text-left"
          aria-label="Dolphin Hacks"
        >
{`  ____        _       _     _         _   _            _        
 |  _ \\  ___ | |_ __ | |__ (_)_ __   | | | | __ _  ___| | _____ 
 | | | |/ _ \\| | '_ \\| '_ \\| | '_ \\  | |_| |/ _\` |/ __| |/ / __|
 | |_| | (_) | | |_) | | | | | | | | |  _  | (_| | (__|   <\\__ \\
 |____/ \\___/|_| .__/|_| |_|_|_| |_| |_| |_|\\__,_|\\___|_|\\_\\___/
               |_|                                               `}<span className="cursor-blink-block" aria-hidden="true">█</span>
        </pre>

        <p className="font-mono text-sm text-[#00ff41]/70 mb-8">
          📅 April 11, 2026 &middot; 8:00 AM - 8:00 PM
        </p>

        <p className="text-lg md:text-xl text-[#00ff41]/60 mb-4 max-w-2xl mx-auto font-mono">
          <span className="text-[#00ff41]/40">// </span>City University of New York, College of Staten Island
        </p>

        <p className="text-base md:text-lg text-[#00ff41]/50 mb-8 max-w-3xl mx-auto font-mono">
          <span className="text-[#00ff41]/30">&gt; </span>A 12-hour hackathon where students come together to innovate, create,
          and push the boundaries of technology. Join us for an unforgettable
          experience!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6 font-mono bg-[#00ff41] text-[#0a0a0a] hover:bg-[#00ff41]/80 border-0">
            <Link href="#register">&gt; ./register.sh</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 font-mono border-[#00ff41]/50 text-[#00ff41] bg-transparent hover:bg-[#00ff41]/10">
            <Link href="#about">&gt; cat README.md</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto font-mono">
          <div className="text-center border border-[#00ff41]/20 p-4 bg-[#00ff41]/5">
            <p className="text-4xl md:text-5xl font-bold text-[#00ff41] terminal-glow">12</p>
            <p className="text-[#00ff41]/50 text-sm">hours</p>
          </div>
          <div className="text-center border border-[#00ff41]/20 p-4 bg-[#00ff41]/5">
            <p className="text-4xl md:text-5xl font-bold text-[#00ff41] terminal-glow">N/A</p>
            <p className="text-[#00ff41]/50 text-sm">hackers</p>
          </div>
          <div className="text-center border border-[#00ff41]/20 p-4 bg-[#00ff41]/5">
            <p className="text-4xl md:text-5xl font-bold text-[#00ff41] terminal-glow">$650+</p>
            <p className="text-[#00ff41]/50 text-sm">in_prizes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
