import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      icon: "🤝",
      title: "Community",
      description:
        "Design solutions that strengthen community bonds and address local challenges.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-muted/50"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-blue-600">HackCSI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HackCSI is the premier student hackathon at the College of Staten
            Island, bringing together passionate innovators from across CUNY and
            beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What is a Hackathon?</h3>
            <p className="text-muted-foreground mb-4">
              A hackathon is an event where students come together to build
              innovative projects in a limited amount of time. Whether you&apos;re a
              beginner or an experienced developer, hackathons are the perfect
              place to learn new skills, meet like-minded people, and create
              something amazing.
            </p>
            <p className="text-muted-foreground">
              At HackCSI, you&apos;ll have 24 hours to conceptualize, design, and
              build a project that addresses real-world challenges. You&apos;ll have
              access to mentors, workshops, and resources to help you along the
              way.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Why Participate?</h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">✓</span>
                <span>Learn new technologies and frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">✓</span>
                <span>Network with industry professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">✓</span>
                <span>Win prizes and gain recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">✓</span>
                <span>Build your portfolio with real projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl" aria-hidden="true">✓</span>
                <span>Free food, swag, and workshops</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8">
          Challenge Tracks
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track) => (
            <Card key={track.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2" aria-hidden="true">{track.icon}</div>
                <CardTitle>{track.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{track.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
