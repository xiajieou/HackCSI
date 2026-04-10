import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Who can participate in Dolphin Hacks?",
      answer:
        "Dolphin Hacks is open to all students, including high school seniors, undergraduates, and graduate students. You don't need to be a CSI or CUNY student to participate—we welcome students from all schools!",
    },
    {
      question: "Do I need coding experience to participate?",
      answer:
        "No! Hackathons are for everyone, regardless of experience level. We have mentors to help beginners get started. Many successful teams have members with diverse skills including design, business, and marketing.",
    },
    {
      question: "How much does it cost to participate?",
      answer:
        "Dolphin Hacks is completely free! We provide meals, snacks, swag, and all the resources you need throughout the event. All you need to bring is your laptop and enthusiasm!",
    },
    {
      question: "Do I need a team to participate?",
      answer:
        "You can register individually or with a team of up to 4 members. If you don't have a team, don't worry—we'll have team formation activities at the start of the event where you can meet other hackers and form a team.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop and charger, student ID, and any other personal items. We recommend bringing an extension cord or power strip for your team.",
    },
    {
      question: "What can I build?",
      answer:
        "You can build anything! Web apps, mobile apps, hardware projects, games, AI/ML applications—the sky's the limit. We have challenge tracks in Healthcare, Sustainability, Education, and Business, but you're free to work on any project.",
    },
    {
      question: "Will there be food?",
      answer:
        "Yes! We provide lunch, snacks, and drinks throughout the 12-hour event. We accommodate dietary restrictions—just let us know during registration.",
    },
    {
      question: "What are the prizes?",
      answer:
        "Prize details are coming soon — stay tuned! Prize categories include Overall Best Hack, Best Design, Most Innovative, and track-specific awards.",
    },
    {
      question: "Where is the event held?",
      answer:
        "Dolphin Hacks takes place at the College of Staten Island campus in the Computer Science Building. The address is 2800 Victory Blvd, Staten Island, NY 10314.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 border-t border-[#00ff41]/10"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4 font-mono text-[#00ff41]">
            <span className="text-[#00ff41]/40">## </span>frequently_asked <span className="text-[#00d4ff]">questions</span>
          </h2>
          <p className="text-lg text-[#00ff41]/60 max-w-2xl mx-auto font-mono">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re
            looking for, reach out to us!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#00ff41]/20 bg-[#0d0d0d] px-4">
                <AccordionTrigger className="text-left font-mono text-sm text-[#00ff41] hover:text-[#00d4ff] hover:no-underline">
                  <span className="text-[#00ff41]/40 mr-2">$</span> {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#00ff41]/60 font-mono text-sm border-t border-[#00ff41]/10 pt-3">
                  <span className="text-[#00ff41]/30">&gt; </span>{faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
