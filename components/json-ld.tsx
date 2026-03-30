import { SITE_DESCRIPTION, SITE_HOME_URL, SITE_NAME } from "@/config/site";

export function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_HOME_URL,
    logo: `${SITE_HOME_URL}/logo.png`,
    sameAs: [],
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    operatingSystem: "Web",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: SITE_DESCRIPTION,
    featureList: [
      "100+ High-fidelity shadcn/ui blocks",
      "Next.js 16 & React 19 Ready",
      "Tailwind CSS v4 support",
      "Copy-paste production-ready components",
    ],
    screenshot: `${SITE_HOME_URL}/og.jpeg`,
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Freddy UI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Freddy UI is a premium library of high-fidelity shadcn/ui blocks, meticulously crafted for modern SaaS and web applications. It offers 100+ production-ready components that you can copy and paste into your project.",
        },
      },
      {
        "@type": "Question",
        name: "How do I use Freddy UI blocks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply browse the category you need, select a block, and click the copy button. You can then paste the code directly into your Next.js or React application.",
        },
      },
      {
        "@type": "Question",
        name: "Is Freddy UI free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a wide collection of free, high-quality blocks to help developers build faster, along with premium blocks for advanced SaaS needs.",
        },
      },
    ],
  };

  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Standard practice for JSON-LD injection
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Standard practice for JSON-LD injection
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationData),
        }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Standard practice for JSON-LD injection
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        type="application/ld+json"
      />
    </>
  );
}
