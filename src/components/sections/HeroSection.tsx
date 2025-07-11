import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="
        min-h-screen
        relative
        flex flex-col items-center justify-center
        text-center
        px-4 sm:px-6
        bg-[url('/images/hero/Mobile_hero.jpg')] bg-cover bg-center bg-no-repeat
        md:bg-brand
        overflow-hidden
      "
    >
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
      >
        <source src="/videos/hero/Video_Hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay Mobile - Solo para imagen */}
      <div className="
        absolute inset-0 z-10
        bg-black/40
        md:hidden
      " />

      {/* Overlay Desktop - Solo para video */}
      <div className="
        hidden md:block
        absolute inset-0 z-10
        bg-black/30
      " />

      {/* Blur Layer - Aplicado sobre los overlays */}
      <div className="
        absolute inset-0 z-20
        backdrop-blur-[0.5px]
        md:backdrop-blur-[1px]
      " />

      {/* Contenido Principal */}
      <div className="relative z-30 w-full max-w-4xl mx-auto">
      
      {/* Título Principal - Mobile First */}
      <h1 className="
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
      ">
      STREETWARE<br />
      <span className="text-brand-yellow">DROP</span> SEASON
      </h1>

      {/* Subtítulo - Mobile First */}
      <p className="
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
      ">
      Ropa y arte de edición limitada.<br />
      Cada drop cuenta una historia.<br />
      <span className="text-brand-yellow font-semibold">
      ¡Colecciones exclusivas, nunca re-stock!
      </span>
      </p>

      {/* Botones CTA - Mobile First */}
      <div className="
      flex flex-col gap-3
      sm:gap-4
      md:flex-row md:gap-6
      md:justify-center
      w-full max-w-sm sm:max-w-md md:max-w-none
      mx-auto
      ">
      <Link
      href="#productos"
      className="
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
