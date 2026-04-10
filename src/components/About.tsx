export function About() {
  const tracks = [
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "Build solutions that improve patient care, health monitoring, or medical accessibility.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "Create technology that addresses environmental challenges and promotes sustainable living.",
    },
    {
      icon: "📚",
      title: "Education",
      description:
        "Develop tools that enhance learning experiences and make education more accessible.",
    },
    {
      icon: "💼",
      title: "Business",
      description:
        "Design solutions that strengthen business operations and address market challenges.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 border-t border-[#00ff41]/10"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold mb-4 font-mono text-[#00ff41]"
          >
            <span className="text-[#00ff41]/40">## </span>about <span className="text-[#00d4ff]">dolphin_hacks</span>
          </h2>
          <p className="text-lg text-[#00ff41]/60 max-w-3xl mx-auto font-mono">
            Dolphin Hacks is the premier student hackathon at the College of Staten
            Island, bringing together passionate innovators from across CUNY and
            beyond. April 11, 2026 &middot; 8:00 AM - 8:00 PM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="border border-[#00ff41]/20 p-6 bg-[#0d0d0d]">
            <h3 className="text-xl font-mono font-semibold mb-4 text-[#00d4ff]">
              <span className="text-[#00ff41]/40">$ </span>what_is_a_hackathon
            </h3>
            <p className="text-[#00ff41]/60 mb-4 font-mono text-sm leading-relaxed">
              A hackathon is an event where students come together to build
              innovative projects in a limited amount of time. Whether you&apos;re a
              beginner or an experienced developer, hackathons are the perfect
              place to learn new skills, meet like-minded people, and create
              something amazing.
            </p>
            <p className="text-[#00ff41]/60 font-mono text-sm leading-relaxed">
              At Dolphin Hacks, you&apos;ll have 12 hours to conceptualize, design, and
              build a project that addresses real-world challenges. You&apos;ll have
              access to mentors and resources to help you along the
              way.
            </p>
          </div>
          <div className="border border-[#00ff41]/30 p-8 bg-[#0a0a0a]">
            <h3 className="text-xl font-mono font-semibold mb-4 text-[#00d4ff]">
              <span className="text-[#00ff41]/40">$ </span>why_participate
            </h3>
            <ul className="space-y-3 font-mono text-sm" role="list">
              <li className="flex items-start gap-3 text-[#00ff41]">
                <span className="text-[#00ff41]/60" aria-hidden="true">[✓]</span>
                <span>Learn new technologies and frameworks</span>
              </li>
              <li className="flex items-start gap-3 text-[#00ff41]">
                <span className="text-[#00ff41]/60" aria-hidden="true">[✓]</span>
                <span>Network with industry professionals</span>
              </li>
              <li className="flex items-start gap-3 text-[#00ff41]">
                <span className="text-[#00ff41]/60" aria-hidden="true">[✓]</span>
                <span>Win prizes and gain recognition</span>
              </li>
              <li className="flex items-start gap-3 text-[#00ff41]">
                <span className="text-[#00ff41]/60" aria-hidden="true">[✓]</span>
                <span>Build your portfolio with real projects</span>
              </li>
              <li className="flex items-start gap-3 text-[#00ff41]">
                <span className="text-[#00ff41]/60" aria-hidden="true">[✓]</span>
                <span>Free food, swag, and workshops</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-mono font-semibold text-center mb-8 text-[#00ff41]">
          <span className="text-[#00ff41]/40">--- </span>challenge_tracks<span className="text-[#00ff41]/40"> ---</span>
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <div key={track.title} className="border border-[#00ff41]/20 p-6 bg-[#0d0d0d] hover:border-[#00ff41]/50 transition-colors">
              <div className="text-3xl mb-2" aria-hidden="true">{track.icon}</div>
              <h4 className="font-mono font-semibold text-[#00d4ff] mb-2">{track.title}</h4>
              <p className="text-[#00ff41]/50 font-mono text-sm">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
