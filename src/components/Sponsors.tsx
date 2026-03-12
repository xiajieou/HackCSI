export function Sponsors() {
  const tierSponsors = {
    platinum: [
      { name: "TechCorp", placeholder: "Platinum Sponsor" },
    ],
    gold: [
      { name: "InnovateTech", placeholder: "Gold Sponsor" },
      { name: "CodeWorks", placeholder: "Gold Sponsor" },
    ],
    silver: [
      { name: "DataFlow", placeholder: "Silver Sponsor" },
      { name: "CloudNine", placeholder: "Silver Sponsor" },
      { name: "DevStudio", placeholder: "Silver Sponsor" },
    ],
    partners: [
      { name: "CSI Computer Science", placeholder: "Partner" },
      { name: "CUNY TechWorks", placeholder: "Partner" },
      { name: "NYC Tech Hub", placeholder: "Partner" },
      { name: "MLH", placeholder: "Partner" },
    ],
  };

  return (
    <section
      id="sponsors"
      className="py-24 border-t border-[#00ff41]/10"
      aria-labelledby="sponsors-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="sponsors-heading"
            className="text-3xl md:text-4xl font-bold mb-4 font-mono text-[#00ff41]"
          >
            <span className="text-[#00ff41]/40">## </span>our <span className="text-[#00d4ff]">sponsors</span>
          </h2>
          <p className="text-lg text-[#00ff41]/60 max-w-2xl mx-auto font-mono">
            Dolphin Hacks is made possible by our generous sponsors and partners.
            Interested in sponsoring? Contact us!
          </p>
        </div>

        {/* Platinum Tier */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-mono text-[#ffb000] mb-6">
            ╔══ PLATINUM ══╗
          </h3>
          <div className="flex justify-center">
            {tierSponsors.platinum.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-64 h-32 flex items-center justify-center border-2 border-[#ffb000]/40 bg-[#0d0d0d] hover:border-[#ffb000] transition-colors"
              >
                <p className="font-mono text-[#ffb000]/70">
                  {sponsor.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-mono text-[#00d4ff] mb-6">
            ╔══ GOLD ══╗
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tierSponsors.gold.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-48 h-24 flex items-center justify-center border border-[#00d4ff]/30 bg-[#0d0d0d] hover:border-[#00d4ff] transition-colors"
              >
                <p className="font-mono text-sm text-[#00d4ff]/60">
                  {sponsor.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-mono text-[#00ff41]/70 mb-6">
            ╔══ SILVER ══╗
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tierSponsors.silver.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-40 h-20 flex items-center justify-center border border-[#00ff41]/20 bg-[#0d0d0d] hover:border-[#00ff41]/50 transition-colors"
              >
                <p className="text-xs font-mono text-[#00ff41]/50">
                  {sponsor.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-center text-sm font-mono text-[#00ff41]/50 mb-6">
            ╔══ PARTNERS ══╗
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tierSponsors.partners.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-36 h-16 flex items-center justify-center border border-[#00ff41]/15 bg-[#0d0d0d] hover:border-[#00ff41]/40 transition-colors"
              >
                <p className="text-xs font-mono text-[#00ff41]/40">
                  {sponsor.placeholder}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#00ff41]/50 mb-4 font-mono text-sm">
            Want to support the next generation of tech talent?
          </p>
          <a
            href="mailto:sponsors@dolphinhacks.com"
            className="inline-flex items-center justify-center font-mono text-sm border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-[#0a0a0a] transition-colors h-10 px-6 py-2"
          >
            &gt; become_a_sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
