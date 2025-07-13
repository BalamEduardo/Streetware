import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Formatos soportados en orden de preferencia
    formats: ['image/webp', 'image/avif'],
    
    // Tamaños de dispositivos para responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Tamaños específicos de imágenes para icons y elementos pequeños
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Cache TTL mínimo (1 año para máximo rendimiento)
    minimumCacheTTL: 31536000,
    
    // Optimizaciones adicionales
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Configuración adicional para rendimiento
  experimental: {
    optimizeCss: true,
  },
  
  // Headers para optimización de caché
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
