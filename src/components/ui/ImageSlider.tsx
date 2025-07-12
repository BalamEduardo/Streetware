'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageSliderProps {
  images: Array<{
    src: string;
    alt: string;
    id: string;
  }>;
  className?: string;
  aspectRatio?: string;
}

export default function ImageSlider({ 
  images, 
  className = "",
  aspectRatio = "aspect-[4/3] md:aspect-[3/4]"
}: ImageSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={`relative group ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={images.length > 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className={`w-full h-full ${aspectRatio}`}
        aria-label="Galería de imágenes del producto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className="relative overflow-hidden">
            <div className={`relative w-full h-full ${aspectRatio}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0} // Solo la primera imagen tiene prioridad
                quality={85}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Solo se muestran si hay más de 1 imagen */}
      {images.length > 1 && (
        <>
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            aria-label="Imagen anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            aria-label="Imagen siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination Dots - Solo se muestran si hay más de 1 imagen */}
      {images.length > 1 && (
        <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {/* Los dots se generan automáticamente por Swiper */}
        </div>
      )}

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: #FFD600;
          transform: scale(1.2);
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 214, 0, 0.8);
        }
      `}</style>
    </div>
  );
}
