import { Card, CardContent } from "@/components/ui/card";

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
      className="py-24"
      aria-labelledby="sponsors-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="sponsors-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-blue-600">Sponsors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            HackCSI is made possible by our generous sponsors and partners.
            Interested in sponsoring? Contact us!
          </p>
        </div>

        {/* Platinum Tier */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
            Platinum Sponsors
          </h3>
          <div className="flex justify-center">
            {tierSponsors.platinum.map((sponsor) => (
              <Card
                key={sponsor.name}
                className="w-64 h-32 flex items-center justify-center hover:shadow-lg transition-shadow border-2 border-blue-600/30"
              >
                <CardContent className="text-center p-6">
                  <p className="font-semibold text-lg text-muted-foreground">
                    {sponsor.placeholder}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tierSponsors.gold.map((sponsor) => (
              <Card
                key={sponsor.name}
                className="w-48 h-24 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="text-center p-4">
                  <p className="font-medium text-muted-foreground">
                    {sponsor.placeholder}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
            Silver Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tierSponsors.silver.map((sponsor) => (
              <Card
                key={sponsor.name}
                className="w-40 h-20 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <CardContent className="text-center p-3">
                  <p className="text-sm text-muted-foreground">
                    {sponsor.placeholder}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
            Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tierSponsors.partners.map((sponsor) => (
              <Card
                key={sponsor.name}
                className="w-36 h-16 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <CardContent className="text-center p-2">
                  <p className="text-xs text-muted-foreground">
                    {sponsor.placeholder}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to support the next generation of tech talent?
          </p>
          <a
            href="mailto:sponsors@hackcsi.com"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
