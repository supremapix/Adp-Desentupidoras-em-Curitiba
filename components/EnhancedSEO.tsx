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

const Helmet = (reactHelmetAsync as any).Helmet || (reactHelmetAsync as any).default?.Helmet;

interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
  schemaData?: object | object[];
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
  const baseUrl = "https://adpservicos.app.br"; 
  const path = canonicalPath || location.pathname || "/";
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const currentUrl = normalizedPath === '/' ? baseUrl : `${baseUrl}${normalizedPath}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "@id": `${baseUrl}/#organization`,
    "name": COMPANY_NAME,
    "alternateName": COMPANY_LEGAL_NAME,
    "image": `${baseUrl}/logo-social.jpg`,
    "telephone": "+554133451194",
    "url": baseUrl,
    "priceRange": "$$",
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
    "areaServed": [
      { "@type": "City", "name": "Curitiba" },
      { "@type": "City", "name": "São José dos Pinhais" },
      { "@type": "City", "name": "Pinhais" },
      { "@type": "City", "name": "Araucária" },
      { "@type": "City", "name": "Colombo" },
      { "@type": "City", "name": "Campo Largo" },
      { "@type": "City", "name": "Fazenda Rio Grande" }
    ]
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
      ...(normalizedPath !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": title.split('|')[0].trim(),
        "item": currentUrl
      }] : [])
    ]
  };

  const schemaList: object[] = [localBusinessSchema, breadcrumbSchema];
  if (schemaData) {
    if (Array.isArray(schemaData)) {
      schemaList.push(...schemaData);
    } else {
      schemaList.push(schemaData);
    }
  }

  const robotsContent = noindex 
    ? "noindex, nofollow" 
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content={robotsContent} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={COMPANY_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaList)}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
