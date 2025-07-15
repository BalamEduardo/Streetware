import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schema para la página principal
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "Streetware",
  "description": "Premium streetwear y ropa urbana de edición limitada",
  "url": "https://streetware.com",
  "logo": "https://streetware.com/images/logo.png",
  "image": "https://streetware.com/images/og-image.jpg",
  "telephone": "+52-xxx-xxx-xxxx",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "MX",
    "addressLocality": "Ciudad de México"
  },
  "sameAs": [
    "https://instagram.com/streetware",
    "https://twitter.com/streetware",
    "https://facebook.com/streetware"
  ],
  "paymentAccepted": "Cash, Credit Card, PayPal",
  "priceRange": "$$$",
  "openingHours": "Mo-Su 09:00-22:00"
};

// Schema para productos
export function generateProductSchema(product: {
  name: string;
  description: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  availability: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "MXN",
      "availability": `https://schema.org/${product.availability}`,
      "seller": {
        "@type": "Organization",
        "name": "Streetware"
      }
    }
  };
}

// Schema para colecciones/drops
export function generateCollectionSchema(collection: {
  name: string;
  description: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Collection",
    "name": collection.name,
    "description": collection.description,
    "image": collection.image,
    "creator": {
      "@type": "Organization",
      "name": "Streetware"
    }
  };
}
