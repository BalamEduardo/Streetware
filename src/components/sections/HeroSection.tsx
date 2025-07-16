"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false); // Flag para saber si ya empezó por primera vez
  const isFirstLoopRef = useRef(true); // Flag para distinguir el primer loop de los siguientes
  const [videoLoaded, setVideoLoaded] = useState(false); // Estado para controlar la visibilidad

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (video) {
      // Agregar atributos específicos para iOS/Safari
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      
      const handleLoadedMetadata = () => {
        // Solo establecer 0.7 en la primera carga
        if (!hasStartedRef.current) {
          console.log('Video metadata loaded, setting currentTime to 0.7 (first load)');
          video.currentTime = 0.7;
          hasStartedRef.current = true;
        }
      };

      const handleLoadedData = () => {
        // Cuando el video esté completamente cargado y listo para reproducir
        console.log('Video data loaded, ready to show');
        setVideoLoaded(true);
      };

      const handleSeeked = () => {
        // Confirmar que el video se posicionó correctamente
        console.log('Video seeked to:', video.currentTime);
      };

      const handleCanPlay = () => {
        // Intentar reproducir siempre, especialmente para Safari
        console.log('Starting video playback from second:', video.currentTime);
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Video started successfully');
            })
            .catch(error => {
              console.log('Error al reproducir el video:', error);
              // Fallback: intentar reproducir después de una interacción del usuario
              const startOnTouch = () => {
                video.play().then(() => {
                  console.log('Video started after user interaction');
                  document.removeEventListener('touchstart', startOnTouch);
                  document.removeEventListener('click', startOnTouch);
                });
              };
              document.addEventListener('touchstart', startOnTouch);
              document.addEventListener('click', startOnTouch);
            });
        }
      };

      const handleTimeUpdate = () => {
        if (isFirstLoopRef.current) {
          // En el primer loop: terminar 0.6 segundos antes del final y reiniciar desde 0
          if (video.currentTime >= video.duration - 0.3) {
            console.log('First loop ending, restarting from 0');
            video.currentTime = 0;
            isFirstLoopRef.current = false; // Ya no es el primer loop
          }
        } else {
          // En loops siguientes: terminar 0.6 segundos antes del final y reiniciar desde 0
          if (video.currentTime >= video.duration - 0.3) {
            console.log('Loop ending, restarting from 0');
            video.currentTime = 0;
          }
        }
      };

      // Escuchar eventos en el orden correcto
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('seeked', handleSeeked);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('timeupdate', handleTimeUpdate);
      
      // Si el video ya está cargado cuando se monta el componente
      if (video.readyState >= 1) {
        handleLoadedMetadata();
      }
      if (video.readyState >= 2) {
        handleLoadedData();
      }
      
      // Cleanup
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('seeked', handleSeeked);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section 
      id="inicio" 
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-brand overflow-hidden"
    >
      {/* Video de fondo para Mobile */}
      <video
        ref={mobileVideoRef}
        className={`
          md:hidden
          absolute inset-0 w-full h-full object-cover z-0
          transition-opacity duration-300 ease-in-out
          ${videoLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/Background_HeroMobile.jpg"
        webkit-playsinline="true"
      >
        <source src="/videos/hero/Prueba3.mp4" type="video/mp4" />
        {/* Fallback para navegadores que no soporten video */}
        Tu navegador no soporta el elemento video.
      </video>

      {/* Imagen de fondo como fallback para Mobile (transición suave) */}
      <div className={`
        md:hidden absolute inset-0 z-[-1]
        transition-opacity duration-300 ease-in-out
        ${videoLoaded ? 'opacity-0' : 'opacity-100'}
      `}>
        <Image
          src="/images/hero/Background_HeroMobile.jpg"
          alt="Imagen de fondo del hero para dispositivos móviles"
          fill
          className="object-cover object-center"
          priority={true}
          quality={85}
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
