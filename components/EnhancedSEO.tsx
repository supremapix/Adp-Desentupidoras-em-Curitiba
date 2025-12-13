import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  schemaData?: object;
  noindex?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  title, 
  description, 
  canonicalPath = "", 
  keywords, 
  schemaData,
  noindex = false
}) => {
  const baseUrl = "https://adpdesentupidora.com.br"; // Substitua pelo domínio real quando tiver
  const currentUrl = `${baseUrl}${canonicalPath}`;

  // Schema padrão de Negócio Local para todas as páginas
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ADP Desentupidora",
    "image": "https://adpdesentupidora.com.br/logo-social.jpg",
    "telephone": "4133451194",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Exemplo, 123",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/adpdesentupidora",
      "https://www.instagram.com/adpdesentupidora"
    ],
    "priceRange": "$$"
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="Suprema Sites Express" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="ADP Desentupidora Curitiba" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/og-image.jpg`} />

      {/* Resource Hints (Performance) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.tailwindcss.com" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;