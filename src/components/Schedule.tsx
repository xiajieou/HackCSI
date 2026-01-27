import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Schedule() {
  const day1Events = [
    { time: "8:00 AM", event: "Check-in & Registration", type: "logistics" },
    { time: "9:00 AM", event: "Opening Ceremony", type: "ceremony" },
    { time: "10:00 AM", event: "Hacking Begins!", type: "hacking" },
    { time: "11:00 AM", event: "Workshop: Intro to APIs", type: "workshop" },
    { time: "12:00 PM", event: "Lunch", type: "food" },
    { time: "2:00 PM", event: "Workshop: UI/UX Design", type: "workshop" },
    { time: "4:00 PM", event: "Sponsor Tech Talks", type: "sponsor" },
    { time: "6:00 PM", event: "Dinner", type: "food" },
    { time: "8:00 PM", event: "Workshop: Machine Learning Basics", type: "workshop" },
    { time: "10:00 PM", event: "Midnight Snacks & Games", type: "fun" },
  ];

  const day2Events = [
    { time: "12:00 AM", event: "Late Night Coding", type: "hacking" },
    { time: "7:00 AM", event: "Breakfast", type: "food" },
    { time: "9:00 AM", event: "Hacking Ends - Submissions Due", type: "hacking" },
    { time: "10:00 AM", event: "Project Expo & Judging", type: "ceremony" },
    { time: "12:00 PM", event: "Lunch", type: "food" },
    { time: "1:00 PM", event: "Closing Ceremony & Awards", type: "ceremony" },
    { time: "2:00 PM", event: "Networking Session", type: "sponsor" },
    { time: "3:00 PM", event: "Event Concludes", type: "logistics" },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      logistics: "bg-gray-500",
      ceremony: "bg-blue-600",
      hacking: "bg-green-600",
      workshop: "bg-purple-600",
      food: "bg-orange-500",
      sponsor: "bg-blue-700",
      fun: "bg-pink-500",
    };
    return colors[type] || "bg-gray-500";
  };

  return (
    <section
      id="schedule"
      className="py-24"
      aria-labelledby="schedule-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="schedule-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Event <span className="text-blue-600">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            24 hours of hacking, learning, and fun. Here&apos;s what to expect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600">Day 1</span>
                <Badge variant="secondary">Saturday, March 15</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4" role="list">
                {day1Events.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-sm font-mono text-muted-foreground min-w-[80px]">
                      {item.time}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}
                        aria-hidden="true"
                      />
                      <span>{item.event}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-blue-600">Day 2</span>
                <Badge variant="secondary">Sunday, March 16</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4" role="list">
                {day2Events.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-sm font-mono text-muted-foreground min-w-[80px]">
                      {item.time}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}
                        aria-hidden="true"
                      />
                      <span>{item.event}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {[
            { type: "ceremony", label: "Ceremony" },
            { type: "hacking", label: "Hacking" },
            { type: "workshop", label: "Workshop" },
            { type: "food", label: "Food" },
            { type: "sponsor", label: "Sponsor" },
            { type: "fun", label: "Fun" },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${getTypeColor(item.type)}`}
                aria-hidden="true"
              />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
