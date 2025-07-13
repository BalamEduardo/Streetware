'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
import { Product } from '../../hooks/useProductModal';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductModal({
  isOpen,
  onClose,
  products,
  title = "Colección",
  subtitle = "Productos disponibles"
}: ProductModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Manejar montaje del componente para evitar hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset slide cuando se abra el modal
  useEffect(() => {
    if (isOpen) {
      setActiveSlide(0);
      if (swiperInstance) {
        swiperInstance.slideTo(0, 0);
      }
    }
  }, [isOpen, swiperInstance]);

  // Manejar tecla ESC y navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          swiperInstance?.slidePrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          swiperInstance?.slideNext();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, swiperInstance]);

  // Click fuera del modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/40
        backdrop-blur-sm
        flex items-end sm:items-center justify-center
        p-0 sm:p-4
        animate-fadeIn
      "
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Container */}
      <div
        className="
          relative
          w-full h-full sm:h-auto
          sm:max-w-5xl sm:max-h-[90vh]
          bg-neutral-900
          sm:bg-neutral-900/98
          sm:backdrop-blur-xl
          sm:border sm:border-white/20
          sm:rounded-2xl
          overflow-hidden
          shadow-2xl
          animate-slideIn
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="
          relative z-10
          bg-neutral-900
          border-b border-white/10
          p-4 sm:p-6
          flex items-center justify-between
          shrink-0
        ">
          <div className="flex-1 min-w-0">
            <h2
              id="modal-title"
              className="
                text-lg sm:text-xl lg:text-2xl
                font-display
                text-white
                tracking-wide
                mb-1
                truncate
              "
            >
              {title}
            </h2>
            <p className="
              text-sm
              text-white/70
              font-body
              flex items-center gap-2
              truncate
            ">
              <span className="truncate">{subtitle}</span>
              <span className="w-1 h-1 bg-white/40 rounded-full shrink-0"></span>
              <span className="text-brand-yellow shrink-0">
                {activeSlide + 1} de {products.length}
              </span>
            </p>
          </div>

          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="
              w-10 h-10
              bg-white/10
              hover:bg-white/20
              border border-white/20
              rounded-full
              flex items-center justify-center
              text-white
              transition-all duration-200
              hover:scale-105
              group
              ml-4
              shrink-0
            "
            aria-label="Cerrar modal"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Contenido Principal - Slider de Productos */}
        <div className="
          relative 
          flex-1 
          overflow-hidden
          h-[calc(100vh-80px)] sm:h-auto
        ">
          {products.length === 0 ? (
            /* Estado vacío */
            <div className="
              flex flex-col items-center justify-center
              py-12 px-6 text-center
              min-h-[300px]
            ">
              <div className="
                w-16 h-16
                bg-white/10
                rounded-full
                flex items-center justify-center
                mb-4
              ">
                <svg
                  className="w-8 h-8 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-display text-white mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-white/60 font-body">
                Esta colección estará disponible próximamente
              </p>
            </div>
          ) : (
            /* Swiper Container */
            <Swiper
              modules={[Navigation, Pagination, A11y, Keyboard]}
              spaceBetween={0}
              slidesPerView={1}
              loop={false}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-product',
                prevEl: '.swiper-button-prev-product',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet-product',
                bulletActiveClass: 'swiper-pagination-bullet-product-active',
                enabled: true,
              }}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              className="product-modal-swiper h-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="h-full">
                  <ProductSlide product={product} />
                </SwiperSlide>
              ))}
              
              {/* Navigation Buttons - Solo en desktop */}
              {products.length > 1 && (
                <>
                  <button
                    className="
                      swiper-button-prev-product
                      hidden sm:flex
                      absolute left-2 lg:left-4 top-1/2 -translate-y-1/2
                      z-20
                      w-10 h-10 lg:w-12 lg:h-12
                      bg-black/60
                      hover:bg-black/80
                      border border-white/20
                      rounded-full
                      items-center justify-center
                      text-white
                      transition-all duration-200
                      hover:scale-105
                      backdrop-blur-sm
                    "
                    aria-label="Producto anterior"
                  >
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    className="
                      swiper-button-next-product
                      hidden sm:flex
                      absolute right-2 lg:right-4 top-1/2 -translate-y-1/2
                      z-20
                      w-10 h-10 lg:w-12 lg:h-12
                      bg-black/60
                      hover:bg-black/80
                      border border-white/20
                      rounded-full
                      items-center justify-center
                      text-white
                      transition-all duration-200
                      hover:scale-105
                      backdrop-blur-sm
                    "
                    aria-label="Producto siguiente"
                  >
                    <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

/* Componente de Slide Individual del Producto */
function ProductSlide({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  return (
    <div className="
      flex flex-col lg:flex-row
      h-full
      bg-neutral-900
    ">
      {/* Área de Imagen Principal - Mobile: 50% height, Desktop: 60% width */}
      <div className="
        relative
        h-1/2 lg:h-full
        lg:flex-[0_0_60%]
        bg-gradient-to-br from-brand-accent/5 to-brand-yellow/5
        overflow-hidden
      ">
        {product.images && product.images.length > 0 ? (
          <div className="relative w-full h-full">
            {/* Imagen Principal */}
            <Image
              src={product.images[currentImageIndex]?.src || product.images[0].src}
              alt={product.images[currentImageIndex]?.alt || product.images[0].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={90}
              priority
            />
            
            {/* Navegación de imágenes múltiples */}
            {product.images.length > 1 && (
              <>
                {/* Botones de navegación de imagen */}
                <button
                  onClick={() => setCurrentImageIndex(prev => 
                    prev === 0 ? product.images!.length - 1 : prev - 1
                  )}
                  className="
                    absolute left-2 top-1/2 -translate-y-1/2
                    z-10
                    w-8 h-8
                    bg-black/70
                    hover:bg-black/90
                    border border-white/30
                    rounded-full
                    flex items-center justify-center
                    text-white
                    transition-all duration-200
                    backdrop-blur-sm
                  "
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setCurrentImageIndex(prev => 
                    prev === product.images!.length - 1 ? 0 : prev + 1
                  )}
                  className="
                    absolute right-2 top-1/2 -translate-y-1/2
                    z-10
                    w-8 h-8
                    bg-black/70
                    hover:bg-black/90
                    border border-white/30
                    rounded-full
                    flex items-center justify-center
                    text-white
                    transition-all duration-200
                    backdrop-blur-sm
                  "
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicadores de imagen */}
                <div className="
                  absolute bottom-3 left-1/2 -translate-x-1/2
                  flex gap-1.5
                  z-10
                ">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`
                        w-2 h-2 rounded-full transition-all duration-200
                        ${index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                        }
                      `}
                    />
                  ))}
                </div>
                
                {/* Contador de imágenes */}
                <div className="
                  absolute top-3 right-3
                  bg-black/70
                  backdrop-blur-sm
                  px-2 py-1
                  rounded-md
                  text-white/90
                  text-xs
                  font-body
                ">
                  {currentImageIndex + 1}/{product.images.length}
                </div>
              </>
            )}
          </div>
        ) : (
          /* Placeholder cuando no hay imagen */
          <div className="
            absolute inset-0
            flex flex-col items-center justify-center
            p-4 text-center
          ">
            <div className="
              w-12 h-12
              bg-white/10
              rounded-full
              flex items-center justify-center
              mb-3
            ">
              <svg
                className="w-6 h-6 text-white/40"
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
            <span className="
              text-sm text-white/50
              font-body
            ">
              Imagen no disponible
            </span>
          </div>
        )}

        {/* Badges del producto */}
        <div className="
          absolute top-3 left-3
          z-10
          flex flex-col gap-1.5
        ">
          {product.isNew && (
            <span className="
              px-2 py-1
              text-xs font-bold
              bg-brand-yellow/95
              text-brand
              rounded-full
              backdrop-blur-sm
              shadow-lg
            ">
              NUEVO
            </span>
          )}
          {!product.isAvailable && (
            <span className="
              px-2 py-1
              text-xs font-bold
              bg-red-500/95
              text-white
              rounded-full
              backdrop-blur-sm
              shadow-lg
            ">
              AGOTADO
            </span>
          )}
        </div>
      </div>

      {/* Área de Información del Producto - Mobile: 50% height, Desktop: 40% width */}
      <div className="
        flex-1
        h-1/2 lg:h-full
        lg:flex-[0_0_40%]
        p-4 lg:p-6
        flex flex-col
        bg-neutral-900
        overflow-y-auto
      ">
        {/* Información Principal */}
        <div className="flex-1 space-y-3 lg:space-y-4">
          {/* Categoría */}
          {product.category && (
            <p className="
              text-xs lg:text-sm
              text-brand-yellow
              font-body
              uppercase
              tracking-wider
            ">
              {product.category}
            </p>
          )}

          {/* Nombre del Producto */}
          <h3 className="
            text-lg sm:text-xl lg:text-2xl xl:text-3xl
            font-display
            text-white
            tracking-wide
            leading-tight
          ">
            {product.name}
          </h3>

          {/* Precio */}
          <div className="
            text-xl sm:text-2xl lg:text-3xl
            font-bold
            text-brand-accent
            tracking-wide
          ">
            {product.price}
          </div>

          {/* Descripción */}
          <p className="
            text-sm lg:text-base
            text-white/80
            font-body
            leading-relaxed
            line-clamp-3 lg:line-clamp-4
          ">
            {product.description}
          </p>

          {/* Tallas (si están disponibles) */}
          {product.size && product.size.length > 0 && (
            <div>
              <h4 className="
                text-xs lg:text-sm
                text-white/70
                font-body
                uppercase
                tracking-wide
                mb-2
              ">
                Tallas disponibles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {product.size.map((size, index) => (
                  <span
                    key={index}
                    className="
                      px-2 py-1
                      bg-white/10
                      border border-white/20
                      text-white/90
                      text-xs lg:text-sm
                      font-body
                      rounded-md
                    "
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Botones de Acción */}
        <div className="
          mt-4 lg:mt-6
          pt-4
          border-t border-white/10
          space-y-2 lg:space-y-3
        ">
          <button
            className="
              w-full
              px-4 py-2.5 lg:py-3
              bg-brand-accent
              hover:bg-brand-accent/90
              text-white
              font-bold
              text-sm lg:text-base
              uppercase
              tracking-wide
              rounded-lg
              transition-all duration-200
              hover:scale-[1.02]
              hover:shadow-lg
              disabled:opacity-50
              disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
            disabled={!product.isAvailable}
          >
            {product.isAvailable ? 'Ver Detalles' : 'Agotado'}
          </button>
          
          <button
            className="
              w-full
              px-4 py-2.5 lg:py-3
              bg-white/10
              hover:bg-white/20
              border border-white/20
              text-white
              font-bold
              text-sm lg:text-base
              uppercase
              tracking-wide
              rounded-lg
              transition-all duration-200
              hover:scale-[1.02]
            "
          >
            Agregar a Favoritos
          </button>
        </div>
      </div>
    </div>
  );
}
