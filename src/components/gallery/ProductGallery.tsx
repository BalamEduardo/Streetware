'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  thumb?: string;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  className?: string;
  showThumbs?: boolean;
  thumbsPosition?: 'bottom' | 'right' | 'left';
}

export default function ProductGallery({
  images,
  className = '',
  showThumbs = true,
  thumbsPosition = 'bottom'
}: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={`bg-neutral-100 dark:bg-neutral-800 rounded-lg ${className}`}>
        <div className="flex items-center justify-center h-64 text-center">
          <div>
            <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-8 h-8 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-neutral-500 text-sm">Galería no disponible</p>
          </div>
        </div>
      </div>
    );
  }

  const layoutClasses = {
    bottom: 'flex flex-col',
    right: 'flex flex-row',
    left: 'flex flex-row-reverse'
  };

  const mainSwiperClasses = {
    bottom: 'w-full',
    right: 'flex-1',
    left: 'flex-1'
  };

  const thumbsSwiperClasses = {
    bottom: 'w-full h-20 mt-4',
    right: 'w-24 h-full ml-4',
    left: 'w-24 h-full mr-4'
  };

  return (
    <div className={`${layoutClasses[thumbsPosition]} ${className}`}>
      {/* Main Swiper */}
      <div className={`relative ${mainSwiperClasses[thumbsPosition]} aspect-square`}>
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          spaceBetween={10}
          navigation={true}
          thumbs={showThumbs && thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full swiper-product-gallery"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                  quality={90}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Swiper */}
      {showThumbs && images.length > 1 && (
        <div className={thumbsSwiperClasses[thumbsPosition]}>
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView="auto"
            freeMode={true}
            watchSlidesProgress={true}
            direction={thumbsPosition === 'right' || thumbsPosition === 'left' ? 'vertical' : 'horizontal'}
            className="swiper-thumbs h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`thumb-${image.id}`} className="!w-auto">
                <div 
                  className={`
                    relative cursor-pointer rounded-md overflow-hidden
                    transition-all duration-200 hover:opacity-80
                    ${thumbsPosition === 'bottom' ? 'w-20 h-20' : 'w-full h-16'}
                    ${activeIndex === index 
                      ? 'ring-2 ring-brand-accent opacity-100' 
                      : 'opacity-60 hover:opacity-100'
                    }
                  `}
                >
                  <Image
                    src={image.thumb || image.src}
                    alt={`${image.alt} thumbnail`}
                    fill
                    className="object-cover object-center"
                    sizes="80px"
                    quality={60}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
