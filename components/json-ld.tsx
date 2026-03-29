import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_HOME_URL,
} from "@/config/site";

export function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "description": SITE_DESCRIPTION,
    "url": SITE_HOME_URL,
    "logo": `${SITE_HOME_URL}/logo.png`,
    "sameAs": [
    ]
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": SITE_NAME,
    "operatingSystem": "Web",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": SITE_DESCRIPTION
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
    </>
  );
}
