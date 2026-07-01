import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  image="/images/og-img.png",
  url = "/",
}) {
  const siteName = "True Care Insurance";

  // Cuando tengan dominio solo cambia esta línea
  const baseUrl = "https://true-care-insurance.vercel.app";

  const fullUrl = `${baseUrl}${url}`;
  const fullImage = `${baseUrl}${image}`;

  const schema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",

  name: "True Care Insurance",

  url: baseUrl,

  image: fullImage,

  description,

  telephone: "+1-515-361-1764",

  email: "rosario@truecare-insurance.com",

  address: {
    "@type": "PostalAddress",

    streetAddress: "113 Army Post Rd",

    addressLocality: "Des Moines",

    addressRegion: "IA",

    postalCode: "50315",

    addressCountry: "US",
  },

  openingHours: "Mo-Fr 09:00-17:00",

  areaServed: [
    {
      "@type": "State",
      name: "Iowa",
    },
    {
      "@type": "State",
      name: "Texas",
    },
  ],
};
const pageTitle = title ? `${siteName} | ${title}` : siteName;

  return (
    <Helmet>
      {/* Básico */}
      <title>{pageTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={fullUrl}
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content={pageTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={fullUrl}
      />

      <meta
        property="og:image"
        content={fullImage}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={pageTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={fullImage}
      />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default SEO;