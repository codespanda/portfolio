import { Helmet } from 'react-helmet-async';
import { portfolio } from '@/data/portfolio';

/**
 * Resolve a possibly-relative asset path to an absolute URL using the
 * configured site URL. Falls back to the raw value if URL construction fails.
 */
function absoluteUrl(pathOrUrl: string): string {
  try {
    return new URL(pathOrUrl, portfolio.seo.siteUrl).toString();
  } catch {
    return pathOrUrl;
  }
}

interface SeoProps {
  /** Optional per-page title override. */
  title?: string;
  /** Optional per-page description override. */
  description?: string;
}

/**
 * Centralized document head: title, meta, Open Graph, Twitter cards,
 * canonical URL, and JSON-LD Person structured data.
 */
export function Seo({ title, description }: SeoProps) {
  const { personal, seo, socials } = portfolio;

  const pageTitle = title ?? seo.title;
  const pageDescription = description ?? seo.description;
  const ogImage = absoluteUrl(seo.ogImage);
  const canonical = seo.siteUrl;

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.title,
    description: pageDescription,
    email: `mailto:${personal.email}`,
    url: canonical,
    image: absoluteUrl(personal.avatarUrl),
    address: {
      '@type': 'PostalAddress',
      addressLocality: personal.location,
    },
    sameAs: socials
      .filter((s) => !s.href.startsWith('mailto:'))
      .map((s) => s.href),
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {seo.keywords && <meta name="keywords" content={seo.keywords.join(', ')} />}
      <meta name="author" content={personal.name} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={personal.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      {seo.twitterHandle && <meta name="twitter:creator" content={seo.twitterHandle} />}

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}
