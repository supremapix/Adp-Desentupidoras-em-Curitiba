import React from 'react';
import * as reactHelmetAsync from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { 
  COMPANY_NAME, 
  COMPANY_LEGAL_NAME, 
  COMPANY_ADDRESS, 
  COMPANY_CITY, 
  COMPANY_STATE, 
  COMPANY_POSTAL_CODE, 
  COMPANY_COUNTRY,
  COMPANY_GEO
} from '../constants';

const Helmet = (reactHelmetAsync as any).Helmet || (reactHelmetAsync as any).default?.Helmet || (reactHelmetAsync as any);

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  schemaData?: object | object[];
  noindex?: boolean;
  includeLocalBusiness?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  title, 
  description, 
  canonicalPath = "", 
  keywords = "",
  schemaData,
  noindex = false,
  includeLocalBusiness = false
}) => {
  const location = useLocation();
  const baseUrl = "https://adpservicos.app.br";
  const currentUrl = `${baseUrl}${canonicalPath || location.pathname}`;
  const siteName = COMPANY_NAME;
  const logoUrl = 'https://img.supremasite.com.br/adp/logomarca-adp-encanadores-cic-em-curitiba.webp';

  const defaultSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": siteName,
      "description": description,
      "inLanguage": "pt-BR"
    },
    {
      "@context": "https://schema.org",
      "@type": "Plumber",
      "@id": `${baseUrl}/#organization`,
      "name": COMPANY_LEGAL_NAME,
      "alternateName": siteName,
      "url": baseUrl,
      "telephone": "+554133451194",
      "email": "contato@adpservicos.app.br",
      "priceRange": "$$",
      "image": logoUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_ADDRESS,
        "addressLocality": COMPANY_CITY,
        "addressRegion": COMPANY_STATE,
        "postalCode": COMPANY_POSTAL_CODE,
        "addressCountry": COMPANY_COUNTRY
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": COMPANY_GEO.latitude,
        "longitude": COMPANY_GEO.longitude
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        { "@type": "City", "name": "Curitiba" },
        { "@type": "AdministrativeArea", "name": "Região Metropolitana de Curitiba" }
      ]
    }
  ];

  const combinedSchema = schemaData 
    ? (Array.isArray(schemaData) ? [...defaultSchema, ...schemaData] : [...defaultSchema, schemaData])
    : defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={logoUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logoUrl} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
