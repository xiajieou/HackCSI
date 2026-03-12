"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="register"
        className="py-24 border-t border-[#00ff41]/10 bg-[#0a0a0a]"
        aria-labelledby="register-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto border border-[#00ff41]/30 bg-[#0d0d0d] p-8">
            <pre className="text-[#00ff41] terminal-glow font-mono text-sm mb-4">
{`
  ┌─────────────────────────┐
  │   REGISTRATION COMPLETE │
  │        STATUS: OK       │
  └─────────────────────────┘
`}
            </pre>
            <h3 className="text-xl font-bold mb-2 font-mono text-[#00ff41]">You&apos;re Registered!</h3>
            <p className="text-[#00ff41]/60 font-mono text-sm">
              Thank you for registering for Dolphin Hacks 2026! Check your email for
              confirmation and updates.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="py-24 border-t border-[#00ff41]/10 bg-[#050505]"
      aria-labelledby="register-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="register-heading"
            className="text-3xl md:text-4xl font-bold mb-4 font-mono text-[#00ff41]"
          >
            <span className="text-[#00ff41]/40">## </span>register for <span className="text-[#00d4ff]">dolphin_hacks</span>
          </h2>
          <p className="text-lg text-[#00ff41]/60 max-w-2xl mx-auto font-mono">
            Secure your spot at the most exciting hackathon in Staten Island!
            Registration is free and open to all students. April 11, 8 AM - 8 PM.
          </p>
        </div>

        <div className="max-w-2xl mx-auto border border-[#00ff41]/30 bg-[#0d0d0d]">
          <div className="border-b border-[#00ff41]/20 px-4 py-3 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff3333]/80" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#ffb000]/80" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#00ff41]/80" aria-hidden="true" />
            <span className="font-mono text-sm text-[#00ff41]/60 ml-2">register.sh</span>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6 font-mono">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm mb-2 text-[#00ff41]/70"
                  >
                    first_name <span className="text-[#ff3333]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] placeholder:text-[#00ff41]/20"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm mb-2 text-[#00ff41]/70"
                  >
                    last_name <span className="text-[#ff3333]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] placeholder:text-[#00ff41]/20"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[#00ff41]/70">
                  email <span className="text-[#ff3333]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] placeholder:text-[#00ff41]/20"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="school" className="block text-sm mb-2 text-[#00ff41]/70">
                  school <span className="text-[#ff3333]">*</span>
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  required
                  placeholder="e.g., College of Staten Island"
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] placeholder:text-[#00ff41]/20"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm mb-2 text-[#00ff41]/70"
                >
                  experience_level
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41]"
                >
                  <option value="beginner">beginner (first hackathon)</option>
                  <option value="intermediate">intermediate (1-3 hackathons)</option>
                  <option value="experienced">experienced (3+ hackathons)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dietary"
                  className="block text-sm mb-2 text-[#00ff41]/70"
                >
                  dietary_restrictions
                </label>
                <input
                  type="text"
                  id="dietary"
                  name="dietary"
                  placeholder="e.g., Vegetarian, Vegan, Halal, Kosher"
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#00ff41]/30 text-[#00ff41] font-mono text-sm focus:outline-none focus:border-[#00ff41] placeholder:text-[#00ff41]/20"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1 accent-[#00ff41]"
                  aria-required="true"
                />
                <label htmlFor="terms" className="text-sm text-[#00ff41]/60">
                  I agree to the{" "}
                  <a href="#" className="text-[#00d4ff] hover:underline">
                    Code of Conduct
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#00d4ff] hover:underline">
                    Privacy Policy
                  </a>
                  . <span className="text-[#ff3333]">*</span>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-mono bg-[#00ff41] text-[#0a0a0a] hover:bg-[#00ff41]/80 border-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? "> processing..." : "> ./submit_registration.sh"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
