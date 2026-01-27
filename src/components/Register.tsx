"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        className="py-24 bg-gradient-to-br from-blue-600 to-blue-800"
        aria-labelledby="register-heading"
      >
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-8">
              <div className="text-6xl mb-4" aria-hidden="true">🎉</div>
              <h3 className="text-2xl font-bold mb-2">You&apos;re Registered!</h3>
              <p className="text-muted-foreground">
                Thank you for registering for HackCSI 2026! Check your email for
                confirmation and updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="py-24 bg-gradient-to-br from-blue-600 to-blue-800"
      aria-labelledby="register-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="register-heading"
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Register for HackCSI
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Secure your spot at the most exciting hackathon in Staten Island!
            Registration is free and open to all students.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium mb-2">
                  School/University <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  required
                  placeholder="e.g., College of Staten Island"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium mb-2"
                >
                  Experience Level
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="beginner">Beginner (First hackathon)</option>
                  <option value="intermediate">Intermediate (1-3 hackathons)</option>
                  <option value="experienced">Experienced (3+ hackathons)</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="dietary"
                  className="block text-sm font-medium mb-2"
                >
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  id="dietary"
                  name="dietary"
                  placeholder="e.g., Vegetarian, Vegan, Halal, Kosher, etc."
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1"
                  aria-required="true"
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Code of Conduct
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  . <span className="text-red-500">*</span>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register Now"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
