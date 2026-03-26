import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16">
      <div className="space-y-2">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Here are some common questions and answers that you might encounter
          when using Freddy. If you don't find the answer you're looking for,
          feel free to reach out.
        </p>
      </div>
      <Accordion
        className="-space-y-px w-full rounded-lg bg-card shadow dark:bg-card/50"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        {questions.map((item) => (
          <AccordionItem
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-muted-foreground">
        Can't find what you're looking for? Contact our{" "}
        <a className="text-primary hover:underline" href="#">
          customer support team
        </a>
      </p>
    </div>
  );
}

const questions = [
  {
    id: "item-1",
    title: "What is Freddy?",
    content:
      "Freddy is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.",
  },
  {
    id: "item-2",
    title: "Who can benefit from Freddy?",
    content:
      "Freddy is built for founders, product teams, and agencies that want to accelerate idea validation and delivery.",
  },
  {
    id: "item-3",
    title: "What features does Freddy include?",
    content:
      "Freddy offers a collaborative workspace where you can design and build beautiful web applications, with reusable UI blocks, deployment automation, and comprehensive analytics all in one place. With Freddy, you can streamline your team’s workflow and deliver high-quality websites quickly and efficiently.",
  },
  {
    id: "item-4",
    title: "Can I customize components in Freddy?",
    content:
      "Yes. Freddy offers editable design systems and code scaffolding so you can tailor blocks to your brand and workflow.",
  },
  {
    id: "item-5",
    title: "Does Freddy integrate with my existing tools?",
    content:
      "Freddy connects with popular source control, design tools, and cloud providers to fit into your current stack.",
  },
  {
    id: "item-6",
    title: "How do I get support while using Freddy?",
    content:
      "You can access detailed docs, community forums, and dedicated customer success channels for help at any time.",
  },
  {
    id: "item-7",
    title: "How do I get started with Freddy?",
    content:
      "You can access detailed docs, community forums, and dedicated customer success channels for help at any time.",
  },
];
