"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is Freddy UI?",
    answer:
      "Freddy UI is a premium library of high-fidelity shadcn/ui blocks, meticulously crafted for modern SaaS and web applications. It offers 100+ production-ready components that you can copy and paste into your project.",
  },
  {
    question: "How do I use Freddy UI blocks?",
    answer:
      "Simply browse the category you need, select a block, and click the copy button. You can then paste the code directly into your Next.js or React application. Ensure you have tailwind-merge and clsx installed for full compatibility.",
  },
  {
    question: "Is Freddy UI free to use?",
    answer:
      "We offer a wide collection of free, high-quality blocks to help developers build faster. We also provide premium blocks and templates for advanced use cases to support the ongoing development of the library.",
  },
  {
    question: "Which frameworks are supported?",
    answer:
      "Freddy UI is built with React, Next.js, and Tailwind CSS in mind. It works seamlessly with any React-based framework that supports standard CSS-in-JS or Tailwind CSS paradigms.",
  },
];

export function FAQ() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 md:px-0">
      <Accordion className="w-full space-y-4" type="single" collapsible>
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-2xl border border-border/50 bg-secondary/20 px-6 transition-all data-[state=open]:bg-secondary/40"
          >
            <AccordionTrigger className="py-5 font-bold text-base hover:no-underline [&[data-state=open]>svg]:rotate-180">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 font-normal text-muted-foreground/80 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
