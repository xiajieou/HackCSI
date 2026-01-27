import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-blue-800/5" aria-hidden="true" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
          📅 March 15-16, 2026
        </Badge>
        
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
            Hack
          </span>
          <span className="text-foreground">CSI</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          City University of New York, College of Staten Island
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A 24-hour hackathon where students come together to innovate, create,
          and push the boundaries of technology. Join us for an unforgettable
          experience!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="#register">Register Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">24</p>
            <p className="text-muted-foreground">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">200+</p>
            <p className="text-muted-foreground">Hackers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">$5K+</p>
            <p className="text-muted-foreground">In Prizes</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-600">10+</p>
            <p className="text-muted-foreground">Workshops</p>
          </div>
        </div>
      </div>
    </section>
  );
}
