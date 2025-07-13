import { useRef, useState, useCallback, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

interface UseSliderOptions {
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  onSlideChange?: (index: number) => void;
}

export function useSlider(options: UseSliderOptions = {}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    autoplay = false,
    autoplayDelay = 3000,
    onSlideChange
  } = options;

  // Handle slide change
  const handleSlideChange = useCallback((swiperInstance: SwiperType) => {
    const newIndex = swiperInstance.activeIndex;
    setActiveIndex(newIndex);
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
    onSlideChange?.(newIndex);
  }, [onSlideChange]);

  // Navigation functions
  const slideNext = useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  const slidePrev = useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const slideTo = useCallback((index: number, speed?: number) => {
    swiper?.slideTo(index, speed);
  }, [swiper]);

  // Autoplay control
  const startAutoplay = useCallback(() => {
    if (!autoplay || !swiper) return;
    
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
    
    autoplayTimeoutRef.current = setTimeout(() => {
      slideNext();
      startAutoplay();
    }, autoplayDelay);
  }, [autoplay, autoplayDelay, slideNext, swiper]);

  const stopAutoplay = useCallback(() => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  }, []);

  const pauseAutoplay = useCallback(() => {
    stopAutoplay();
  }, [stopAutoplay]);

  const resumeAutoplay = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  // Initialize swiper
  const onSwiperInit = useCallback((swiperInstance: SwiperType) => {
    setSwiper(swiperInstance);
    handleSlideChange(swiperInstance);
  }, [handleSlideChange]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopAutoplay();
    };
  }, [stopAutoplay]);

  // Start autoplay when swiper is ready
  useEffect(() => {
    if (swiper && autoplay) {
      startAutoplay();
    }
  }, [swiper, autoplay, startAutoplay]);

  return {
    // State
    swiper,
    activeIndex,
    isBeginning,
    isEnd,
    
    // Navigation
    slideNext,
    slidePrev,
    slideTo,
    
    // Autoplay control
    startAutoplay,
    stopAutoplay,
    pauseAutoplay,
    resumeAutoplay,
    
    // Event handlers
    onSwiperInit,
    handleSlideChange,
  };
}

// Hook para keyboard navigation
export function useSliderKeyboard(
  slideNext: () => void,
  slidePrev: () => void,
  isEnabled = true
) {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          slidePrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          slideNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [slideNext, slidePrev, isEnabled]);
}

// Hook para touch gestures avanzados
export function useSliderTouch() {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
  }, []);

  const onTouchEnd = useCallback((
    onSwipeLeft?: () => void,
    onSwipeRight?: () => void
  ) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }

    setIsDragging(false);
  }, [touchStart, touchEnd]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isDragging,
  };
}
