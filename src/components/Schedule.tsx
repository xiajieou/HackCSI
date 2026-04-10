export function Schedule() {
  const events = [
    { time: "8:00 AM", event: "Registration & Breakfast", type: "food" },
    { time: "8:30 AM", event: "Opening + Team Formation Ceremony", type: "ceremony" },
    { time: "9:00 AM", event: "Hacking Begins + Vibe coding workshop", type: "hacking" },
    { time: "1:00 PM", event: "Lunch Break", type: "food" },
    { time: "4:30 PM", event: "Dinner Break", type: "food" },
    { time: "7:00 PM", event: "Presentations & Judging", type: "ceremony" },
    { time: "7:30 PM", event: "Awards Ceremony", type: "ceremony" },
    { time: "8:00 PM", event: "Event Concludes", type: "logistics" },
  ];

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      logistics: "SYS",
      ceremony: "EVT",
      hacking: "RUN",
      food: "BRK",
      sponsor: "SPO",
    };
    return labels[type] || "---";
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      logistics: "text-[#00ff41]/50",
      ceremony: "text-[#00d4ff]",
      hacking: "text-[#00ff41]",
      food: "text-[#ffb000]",
      sponsor: "text-[#00d4ff]/70",
    };
    return colors[type] || "text-[#00ff41]/50";
  };

  return (
    <section
      id="schedule"
      className="py-24 border-t border-[#00ff41]/10"
      aria-labelledby="schedule-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="schedule-heading"
            className="text-3xl md:text-4xl font-bold mb-4 font-mono text-[#00ff41]"
          >
            <span className="text-[#00ff41]/40">## </span>event <span className="text-[#00d4ff]">schedule</span>
          </h2>
          <p className="text-lg text-[#00ff41]/60 max-w-2xl mx-auto font-mono">
            12 hours of hacking, learning, and fun. Here&apos;s what to expect!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="border border-[#00ff41]/20 bg-[#0d0d0d]">
            <div className="border-b border-[#00ff41]/20 px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff3333]/80" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#ffb000]/80" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-[#00ff41]/80" aria-hidden="true" />
              <span className="font-mono text-sm text-[#00ff41]/60 ml-2">april11_saturday.log</span>
            </div>
            <div className="p-4">
              <ul className="space-y-2 font-mono text-sm" role="list">
                {events.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#00ff41]/40 min-w-[45px]">
                      {item.time}
                    </span>
                    <span className={`min-w-[35px] ${getTypeColor(item.type)}`}>
                      [{getTypeLabel(item.type)}]
                    </span>
                    <span className="text-[#00ff41]/80">{item.event}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-xs">
          {[
            { type: "ceremony", label: "EVT: Ceremony" },
            { type: "hacking", label: "RUN: Hacking" },
            { type: "food", label: "BRK: Food" },
            { type: "sponsor", label: "SPO: Sponsor" },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <span className={`${getTypeColor(item.type)}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
