import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-brand overflow-hidden"
    >
      {/* Video de fondo para Mobile */}
      <video
        className="
          md:hidden
          absolute inset-0 w-full h-full object-cover z-0
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero/Background_HeroMobile.jpg"
      >
        <source src="/videos/hero/Prueba2.mp4" type="video/mp4" />
        {/* Fallback para navegadores que no soporten video */}
        Tu navegador no soporta el elemento video.
      </video>

      {/* Imagen de fondo como fallback para Mobile (si el video falla) */}
      <div className="md:hidden absolute inset-0 z-[-1]">
        <Image
          src="/images/hero/Background_HeroMobile.jpg"
          alt="Imagen de fondo del hero para dispositivos móviles"
          fill
          className="object-cover object-center"
          priority={true}
          quality={70}
        />
      </div>

      {/* Video de fondo para Desktop */}
      <video
        className="
          hidden md:block
          absolute inset-0 w-full h-full object-cover z-0
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/hero/Video_Hero.mp4" type="video/mp4" />
        {/* Fallback para navegadores que no soporten video */}
        Tu navegador no soporta el elemento video.
      </video>

      {/* Overlay Mobile - Para video e imagen de fallback */}
      <div className="
        absolute inset-0 z-10
        bg-black/40
        md:hidden
      " />

      {/* Overlay Desktop - Solo para video */}
      <div className="
        hidden md:block
        absolute inset-0 z-10
        bg-black/40
      " />

      {/* Blur Layer - Aplicado sobre los overlays */}
      <div className="
        absolute inset-0 z-20
        backdrop-saturate-[150%]
        backdrop-blur-[3px]
      " />

      {/* Contenido Principal */}
      <div className="relative z-30 w-full max-w-4xl mx-auto">
      
      {/* Título Principal - Mobile First + Landscape Responsive */}
      <h1 
        className="
          hero-landscape-title
          text-3xl leading-tight
          sm:text-4xl sm:leading-tight
          md:text-5xl md:leading-tight
          lg:text-6xl lg:leading-tight
          xl:text-7xl xl:leading-tight
          font-display
          mb-4 sm:mb-6 md:mb-8
          text-white
          md:text-brand-accent
          tracking-wider
          drop-shadow-lg md:drop-shadow-none
        "
      >
        STREETWARE<br />
        <span className="text-brand-yellow">DROP</span> SEASON
      </h1>

      {/* Subtítulo - Mobile First + Landscape Responsive */}
      <p 
        className="
          hero-landscape-subtitle
          text-sm leading-relaxed
          sm:text-base sm:leading-relaxed
          md:text-lg md:leading-relaxed
          lg:text-xl lg:leading-relaxed
          xl:text-2xl xl:leading-relaxed
          font-body
          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl
          mx-auto
          text-white/95
          md:text-white/90
          mb-6 sm:mb-8 md:mb-10
          drop-shadow-md md:drop-shadow-none
        "
      >
        Ropa y arte de edición limitada.<br />
        Cada drop cuenta una historia.<br />
        <span className="text-brand-yellow font-semibold">
          ¡Colecciones exclusivas, nunca re-stock!
        </span>
      </p>

      {/* Botones CTA - Mobile First + Landscape Responsive */}
      <div 
        className="
          hero-landscape-buttons
          flex flex-col gap-3
          sm:gap-4
          md:flex-row md:gap-6
          md:justify-center
          w-full max-w-sm sm:max-w-md md:max-w-none
          mx-auto
        "
      >
      <Link
      href="#productos"
      className="
        hero-landscape-button
        w-full md:w-auto
        px-6 py-3
        sm:px-8 sm:py-4
        md:px-10 md:py-4
        bg-brand-accent
        text-white
        text-sm sm:text-base md:text-lg
        font-bold
        uppercase
        tracking-wide
        rounded-lg
        shadow-lg
        hover:bg-brand-yellow
        hover:shadow-xl
        transition-all duration-300
        active:scale-95
      "
      >
      Ver colección
      </Link>
      
      <Link
      href="#nosotros"
      className="
        hero-landscape-button
        w-full md:w-auto
        px-6 py-3
        sm:px-8 sm:py-4
        md:px-10 md:py-4
        border-2 border-white
        md:border-brand-accent
        text-white
        md:text-brand-accent
        text-sm sm:text-base md:text-lg
        font-bold
        uppercase
        tracking-wide
        rounded-lg
        shadow-lg
        hover:bg-white hover:text-brand
        md:hover:bg-brand-accent md:hover:text-white
        transition-all duration-300
        active:scale-95
      "
      >
      Saber más
      </Link>
      </div>
      </div>
    </section>
  );
}
