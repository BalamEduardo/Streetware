
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import DropsSection from '@/components/sections/DropsSection';
import ProductCatalogSection from '@/components/sections/ProductCatalogSection';
import LookbookSection from '@/components/sections/LookbookSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import StorytellingBlock from '@/components/sections/StorytellingBlock';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      {/* Transición: Filosofía de la marca */}
      <StorytellingBlock
        subtitle="Nuestra Filosofía"
        title="Más que ropa, somos una declaración de independencia"
        description="Cada pieza que creamos nace de la necesidad de expresar autenticidad en un mundo que busca uniformidad. No seguimos tendencias, las creamos. No imitamos estilos, los redefinimos."
        theme="gradient"
        position="center"
      />
      
      <DropsSection />
      
      {/* Transición: Proceso creativo */}
      <StorytellingBlock
        subtitle="Proceso Creativo"
        title="De la inspiración urbana a tu armario"
        description="Nuestros diseñadores recorren las calles, absorben energías, capturan momentos. Cada drop es el resultado de meses de investigación, experimentación y perfeccionamiento hasta lograr piezas que trascienden lo temporal."
        theme="dark"
        position="left"
      />
      
      <ProductCatalogSection  />
      
      {/* Transición: Estilo personal */}
      <StorytellingBlock
        subtitle="Tu Estilo"
        title="Encuentra tu voz en cada combinación"
        description="El streetwear es un idioma universal que habla sin palabras. Cada look cuenta tu historia, refleja tu actitud, comunica tu esencia. Te ayudamos a construir un guardarropa que sea tan único como tú."
        theme="accent"
        position="right"
      />
      
      <LookbookSection/>
      <AboutSection />
      <ContactSection />
    </>
  );
}
