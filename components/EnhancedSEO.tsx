import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const baseUrl = "https://adpdesentupidora.com.br"; 
  const currentUrl = `${baseUrl}${canonicalPath || location.pathname}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": "ADP Desentupidora Curitiba",
    "alternateName": "ADP Serviços de Desentupimento",
    "image": `${baseUrl}/logo-social.jpg`,
    "telephone": "4133451194",
    "url": baseUrl,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua João Negrão",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR",
      "postalCode": "80010-200"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "areaServed": [
      { "@type": "City", "name": "Curitiba" },
      { "@type": "City", "name": "São José dos Pinhais" },
      { "@type": "City", "name": "Pinhais" },
      { "@type": "City", "name": "Araucária" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title.split('|')[0].trim(),
        "item": currentUrl
      }
    ]
  };

  const finalSchema = schemaData ? [localBusinessSchema, breadcrumbSchema, schemaData] : [localBusinessSchema, breadcrumbSchema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Resource Hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;