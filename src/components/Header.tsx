"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "about" },
    { href: "#schedule", label: "schedule" },
    { href: "#faq", label: "faq" },
    { href: "#sponsors", label: "sponsors" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#00ff41]/30">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-mono font-bold text-[#00ff41] hover:text-[#00ff41]/80 transition-colors terminal-glow"
            aria-label="Dolphin Hacks Home"
          >
            <span className="text-[#00ff41]/60">~/</span>dolphin-hacks
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6" role="menubar">
            {navItems.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  className="text-[#00ff41]/70 hover:text-[#00ff41] transition-colors font-mono text-sm"
                  role="menuitem"
                >
                  <span className="text-[#00ff41]/40">$</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild size="lg" className="font-mono border border-[#00ff41] bg-transparent text-[#00ff41] hover:bg-[#00ff41] hover:text-[#0a0a0a]">
              <Link href="#register">&gt; register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#00ff41]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 border-t border-[#00ff41]/20 pt-4">
            <ul className="flex flex-col gap-3" role="menu">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    href={item.href}
                    className="block py-2 text-[#00ff41]/70 hover:text-[#00ff41] transition-colors font-mono text-sm"
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                  >
                    <span className="text-[#00ff41]/40">$</span> {item.label}
                  </Link>
                </li>
              ))}
              <li role="none">
                <Button asChild className="w-full font-mono border border-[#00ff41] bg-transparent text-[#00ff41] hover:bg-[#00ff41] hover:text-[#0a0a0a]">
                  <Link href="#register" onClick={() => setIsMenuOpen(false)}>
                    &gt; register
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
