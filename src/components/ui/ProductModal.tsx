'use client';

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard } from 'swiper/modules';
import { Product } from '../../hooks/useProductModal';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductModal.module.css';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  title?: string;
  initialSlideIndex?: number;
}

// Hook personalizado para gestos táctiles
function useSwipeGesture(onSwipeUp: () => void, onSwipeDown: () => void) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe) onSwipeUp();
    if (isDownSwipe) onSwipeDown();
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
}

// Hook para optimizar performance
function useOptimizedModal(isOpen: boolean) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimating(true);
      // Permitir que la animación de entrada termine
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(true);
      // Mantener renderizado durante la animación de salida
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return { shouldRender, isAnimating };
}

export default function ProductModal({
  isOpen,
  onClose,
  products,
  title = "Colección",
  initialSlideIndex = 0
}: ProductModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(initialSlideIndex);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  const { shouldRender, isAnimating } = useOptimizedModal(isOpen);
  
  const swipeGesture = useSwipeGesture(
    () => {}, // onSwipeUp - podría usarse para entrar en fullscreen
    () => onClose() // onSwipeDown - cerrar modal
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveSlide(initialSlideIndex);
      if (swiperInstance) {
        // Con loop activado, usar slideToLoop para ir al slide correcto
        swiperInstance.slideToLoop(initialSlideIndex, 0);
      }
      // Focus management para accesibilidad
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }
  }, [isOpen, swiperInstance, initialSlideIndex]);

  // Gestión mejorada de teclado y scroll
  useEffect(() => {
    let scrollY: number;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
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
        case 'f':
        case 'F':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            // Funcionalidad de fullscreen removida para simplificar
          }
          break;
        case 'Home':
          e.preventDefault();
          swiperInstance?.slideToLoop(0);
          break;
        case 'End':
          e.preventDefault();
          swiperInstance?.slideToLoop(products.length - 1);
          break;
      }
    };

    if (isOpen) {
      // Guardar la posición actual del scroll
      scrollY = window.scrollY;
      
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Mantener la posición actual sin forzar scroll al top
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.top = 'unset';
      document.body.style.width = 'unset';
      
      // Restaurar la posición del scroll al cerrar
      if (isOpen) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [isOpen, onClose, swiperInstance, products.length]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handleCloseClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, [onClose]);

  if (!mounted || !shouldRender) return null;

  return (
    <div
      ref={modalRef}
      className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen && !isAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      {...swipeGesture}
    >
      <div
        className={`relative w-full max-w-6xl h-[90vh] transition-all duration-300 ease-out bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl ${
          isOpen && !isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header simplificado */}
        <div className="relative z-10 bg-neutral-900/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between shrink-0">
          <div className="flex-1 min-w-0">
            <h2 
              id="modal-title" 
              className="text-xl lg:text-2xl font-display text-white tracking-wide mb-1 truncate"
            >
              {title}
            </h2>
            <p className="text-sm text-white/70 font-body flex items-center gap-2 truncate">
              <span className="text-brand-yellow">
                {activeSlide + 1} de {products.length}
              </span>
            </p>
          </div>
          
          {/* Botón de cerrar simple y discreto */}
          <button
            ref={closeButtonRef}
            onClick={handleCloseClick}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105 group"
            aria-label="Cerrar modal"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido principal con Swiper optimizado */}
        <div className="relative flex-1 h-[calc(90vh-80px)]">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center h-full">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-lg font-display text-white mb-2">No hay productos disponibles</h3>
              <p className="text-white/60 font-body">Esta colección estará disponible próximamente</p>
            </div>
          ) : (
            <>
              <Swiper
                modules={[Navigation, Pagination, A11y, Keyboard]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={400}
                keyboard={{ 
                  enabled: true, 
                  onlyInViewport: true
                }}
                navigation={{
                  nextEl: '.swiper-button-next-product',
                  prevEl: '.swiper-button-prev-product',
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet-product',
                  bulletActiveClass: 'swiper-pagination-bullet-product-active',
                  el: '.swiper-pagination-custom',
                }}
                onSwiper={setSwiperInstance}
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                className="product-modal-swiper h-full"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id} className="h-full">
                    <ProductSlide 
                      product={product}
                    />
                  </SwiperSlide>
                ))}
                
                {/* Controles de navegación - ocultos en mobile, pequeños en desktop */}
                {products.length > 1 && (
                  <>
                    {/* Indicadores pequeños en mobile para mostrar que se puede deslizar */}
                    <div className="lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-1 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    <div className="lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-1 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    
                    {/* Flechas completas solo en desktop */}
                    <button className="swiper-button-prev-product hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-105 backdrop-blur-sm" aria-label="Producto anterior">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="swiper-button-next-product hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 border border-white/20 rounded-full items-center justify-center text-white transition-all duration-200 hover:scale-105 backdrop-blur-sm" aria-label="Producto siguiente">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </Swiper>
              
              {/* Paginación centrada */}
              {products.length > 1 && (
                <div className="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-20"></div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProductSlide({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prev => prev === (product.images?.length || 1) - 1 ? 0 : prev + 1);
  }, [product.images?.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(prev => prev === 0 ? (product.images?.length || 1) - 1 : prev - 1);
  }, [product.images?.length]);
  
  return (
    <div className="flex flex-col lg:flex-row h-full bg-neutral-900">
      {/* Sección de imagen optimizada */}
      <div className="relative lg:flex-1 h-64 lg:h-full bg-gradient-to-br from-brand-accent/5 to-brand-yellow/5 overflow-hidden">
        {product.images && product.images.length > 0 && !imageError ? (
          <div className="relative w-full h-full">
            {/* Loading skeleton */}
            {imageLoading && (
              <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <Image
              src={product.images[currentImageIndex]?.src || product.images[0].src}
              alt={product.images[currentImageIndex]?.alt || product.images[0].alt}
              fill
              className={`object-cover object-center transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={90}
              priority
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            
            {/* Controles de imagen múltiple */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/70 hover:bg-black/90 border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm focus-ring smooth-interaction"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/70 hover:bg-black/90 border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm focus-ring smooth-interaction"
                  aria-label="Imagen siguiente"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicadores de imagen */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 focus-ring ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125 shadow-lg' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Contador de imágenes */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-white/90 text-xs font-body">
                  {currentImageIndex + 1}/{product.images.length}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm text-white/50 font-body">
              {imageError ? 'Error al cargar imagen' : 'Imagen no disponible'}
            </span>
          </div>
        )}

        {/* Badges de estado */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-1 text-xs font-bold bg-brand-yellow/95 text-brand rounded-full backdrop-blur-sm shadow-lg animate-pulse">
              NUEVO
            </span>
          )}
          {!product.isAvailable && (
            <span className="px-2 py-1 text-xs font-bold bg-red-500/95 text-white rounded-full backdrop-blur-sm shadow-lg">
              AGOTADO
            </span>
          )}
        </div>
      </div>

      {/* Sección de información del producto */}
      <div className="lg:flex-1 lg:max-w-md flex flex-col bg-neutral-900 relative">
        <div className="flex-1 p-6 space-y-4">
          {/* Categoría con mejor styling */}
          {product.category && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-yellow rounded-full"></span>
              <p className="text-xs lg:text-sm text-brand-yellow font-body uppercase tracking-wider">
                {product.category}
              </p>
            </div>
          )}
          
          {/* Título del producto */}
          <h3 className="text-xl lg:text-2xl font-display text-white tracking-wide leading-tight">
            {product.name}
          </h3>
          
          {/* Precio con formato mejorado */}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl lg:text-3xl font-bold text-brand-accent tracking-wide">
              {product.price}
            </span>
            {product.isAvailable && (
              <span className="text-xs text-green-400 font-body">
                • Disponible
              </span>
            )}
          </div>
          
          {/* Descripción */}
          <div className="space-y-2">
            <p className="text-sm lg:text-base text-white/80 font-body leading-relaxed">
              {product.description}
            </p>
          </div>
          
          {/* Tallas */}
          {product.size && product.size.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs lg:text-sm text-white/70 font-body uppercase tracking-wide flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                Tallas disponibles
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size, index) => (
                  <button
                    key={index}
                    className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-brand-yellow/40 text-white/90 hover:text-white text-sm font-body rounded-lg transition-all duration-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Botones de acción */}
          <div className="pt-4 space-y-3 border-t border-white/10">
            <button
              className={`w-full px-4 py-3 font-bold text-sm uppercase tracking-wide rounded-lg transition-all duration-200 ${
                product.isAvailable
                  ? 'bg-brand-accent hover:bg-brand-accent/90 text-white hover:shadow-lg hover:shadow-brand-accent/20'
                  : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
              }`}
              disabled={!product.isAvailable}
            >
              {product.isAvailable ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver Detalles
                </span>
              ) : (
                'Producto Agotado'
              )}
            </button>
            
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-brand-yellow/40 text-white font-bold text-sm uppercase tracking-wide rounded-lg transition-all duration-200">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favoritos
                </span>
              </button>
              
              <button className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-brand-yellow/40 text-white font-bold text-sm uppercase tracking-wide rounded-lg transition-all duration-200">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Compartir
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

