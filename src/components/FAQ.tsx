import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Who can participate in HackCSI?",
      answer:
        "HackCSI is open to all students, including high school seniors, undergraduates, and graduate students. You don't need to be a CSI or CUNY student to participate—we welcome students from all schools!",
    },
    {
      question: "Do I need coding experience to participate?",
      answer:
        "No! Hackathons are for everyone, regardless of experience level. We have workshops and mentors to help beginners get started. Many successful teams have members with diverse skills including design, business, and marketing.",
    },
    {
      question: "How much does it cost to participate?",
      answer:
        "HackCSI is completely free! We provide meals, snacks, swag, and all the resources you need throughout the event. All you need to bring is your laptop and enthusiasm!",
    },
    {
      question: "Do I need a team to participate?",
      answer:
        "You can register individually or with a team of up to 4 members. If you don't have a team, don't worry—we'll have team formation activities at the start of the event where you can meet other hackers and form a team.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop and charger, student ID, a change of clothes, toiletries, a sleeping bag or blanket if you plan to rest, and any other personal items. We recommend bringing an extension cord or power strip for your team.",
    },
    {
      question: "What can I build?",
      answer:
        "You can build anything! Web apps, mobile apps, hardware projects, games, AI/ML applications—the sky's the limit. We have challenge tracks in Healthcare, Sustainability, Education, and Community, but you're free to work on any project.",
    },
    {
      question: "Will there be food?",
      answer:
        "Yes! We provide meals (breakfast, lunch, dinner), snacks, and drinks throughout the 24-hour event. We accommodate dietary restrictions—just let us know during registration.",
    },
    {
      question: "What are the prizes?",
      answer:
        "We have over $5,000 in prizes including cash awards, tech gadgets, and sponsored prizes. Prize categories include Overall Best Hack, Best Design, Most Innovative, and track-specific awards.",
    },
    {
      question: "Where is the event held?",
      answer:
        "HackCSI takes place at the College of Staten Island campus in the Center for the Arts building. The address is 2800 Victory Blvd, Staten Island, NY 10314. Free parking is available on campus.",
    },
    {
      question: "Will there be sleeping accommodations?",
      answer:
        "We have designated quiet areas with bean bags and floor space for resting. However, most hackers stay up through the night working on their projects. Bring a sleeping bag if you plan to rest!",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-muted/50"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re
            looking for, reach out to us!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
