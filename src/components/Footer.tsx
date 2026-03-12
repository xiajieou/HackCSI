import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#00ff41]/20 py-12 bg-[#050505]" role="contentinfo">
      <div className="container mx-auto px-4 font-mono">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-[#00ff41] hover:text-[#00ff41]/80 transition-colors terminal-glow"
            >
              <span className="text-[#00ff41]/60">~/</span>dolphin-hacks
            </Link>
            <p className="mt-4 text-[#00ff41]/50 text-sm">
              A 12-hour hackathon at the City University of New York, College of
              Staten Island.
            </p>
          </div>

          <div>
            <h3 className="text-sm text-[#00d4ff] mb-4">quick_links/</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li>
                <Link
                  href="#about"
                  className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                >
                  <span className="text-[#00ff41]/30">$ </span>about
                </Link>
              </li>
              <li>
                <Link
                  href="#schedule"
                  className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                >
                  <span className="text-[#00ff41]/30">$ </span>schedule
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                >
                  <span className="text-[#00ff41]/30">$ </span>faq
                </Link>
              </li>
              <li>
                <Link
                  href="#sponsors"
                  className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                >
                  <span className="text-[#00ff41]/30">$ </span>sponsors
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-[#00d4ff] mb-4">contact/</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li>
                <a
                  href="mailto:hello@dolphinhacks.com"
                  className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                >
                  hello@dolphinhacks.com
                </a>
              </li>
              <li className="text-[#00ff41]/40">
                2800 Victory Blvd
              </li>
              <li className="text-[#00ff41]/40">
                Staten Island, NY 10314
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-[#00d4ff] mb-4">social/</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/dolphinhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/dolphinhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://discord.gg/dolphinhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                aria-label="Join our Discord"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://github.com/dolphinhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                aria-label="View our GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00ff41]/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#00ff41]/40">
            <p><span className="text-[#00ff41]/20">// </span>&copy; 2026 Dolphin Hacks. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#00ff41] transition-colors">
                privacy_policy
              </Link>
              <Link href="#" className="hover:text-[#00ff41] transition-colors">
                code_of_conduct
              </Link>
              <Link href="#" className="hover:text-[#00ff41] transition-colors">
                terms_of_service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
