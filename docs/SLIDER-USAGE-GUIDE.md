# Guía de Uso - Componentes de Slider Optimizados

## 🎯 Componentes Disponibles

### 1. ProductModal (Mejorado)
Uso idéntico al anterior, pero con Swiper.js interno:

```tsx
import ProductModal from '@/components/ui/ProductModal';

<ProductModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  products={products}
  title="Colección Urban Rebellion"
  subtitle="Productos disponibles"
/>
```

### 2. ProductGallery (Nuevo)
Galería avanzada con thumbnails:

```tsx
import ProductGallery from '@/components/gallery/ProductGallery';

const galleryImages = [
  { id: '1', src: '/images/product1.jpg', alt: 'Product view 1' },
  { id: '2', src: '/images/product2.jpg', alt: 'Product view 2' },
  // ...
];

<ProductGallery
  images={galleryImages}
  showThumbs={true}
  thumbsPosition="bottom" // 'bottom' | 'right' | 'left'
  className="w-full h-96"
/>
```

### 3. ImageSlider (Existente mejorado)
Para galerías simples:

```tsx
import ImageSlider from '@/components/ui/ImageSlider';

<ImageSlider
  images={images}
  className="w-full h-64"
  aspectRatio="aspect-square"
/>
```

## 🔧 Hooks Personalizados

### useSlider
Control completo de sliders:

```tsx
import { useSlider } from '@/hooks/useSlider';

function CustomSlider({ images }) {
  const {
    activeIndex,
    slideNext,
    slidePrev,
    onSwiperInit,
    handleSlideChange
  } = useSlider({
    autoplay: true,
    autoplayDelay: 3000,
    loop: true,
    onSlideChange: (index) => {
      console.log('Slide changed to:', index);
    }
  });

  return (
    <Swiper
      onSwiper={onSwiperInit}
      onSlideChange={handleSlideChange}
      // ... otras props
    >
      {/* slides */}
    </Swiper>
  );
}
```

### useSliderKeyboard
Navegación por teclado:

```tsx
import { useSliderKeyboard } from '@/hooks/useSlider';

function KeyboardNavigationSlider() {
  const slideNext = () => { /* logic */ };
  const slidePrev = () => { /* logic */ };
  
  useSliderKeyboard(slideNext, slidePrev, true);
  
  return (/* JSX */);
}
```

## 🎨 Estilos Personalizables

### Variables CSS Disponibles:

```css
:root {
  /* Brand Colors */
  --brand-primary: #171717;
  --brand-accent: #fbbf24;
  --brand-yellow: #fbbf24;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  
  /* Animation */
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --ease-spring: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Clases CSS Personalizadas:

```css
/* Para ProductModal */
.swiper-product-modal {
  --swiper-theme-color: var(--brand-accent);
}

/* Para ProductGallery */
.swiper-product-gallery {
  --swiper-navigation-size: 24px;
}

/* Para ImageSlider */
.swiper-component {
  /* Estilos específicos */
}
```

## 🔄 Migración desde Versión Anterior

### ProductModal
✅ **Sin cambios necesarios** - API idéntica

### Sliders Custom
**Antes:**
```tsx
// Implementación manual con useState y touch events
const [currentIndex, setCurrentIndex] = useState(0);
const handleSwipe = (direction) => { /* manual logic */ };
```

**Después:**
```tsx
// Con hooks optimizados
const { activeIndex, slideNext, slidePrev } = useSlider({
  autoplay: true,
  loop: true
});
```

## 📱 Responsive Breakpoints

Los componentes se adaptan automáticamente:

```scss
// Mobile
@media (max-width: 1023px) {
  .swiper-button-next, .swiper-button-prev {
    display: none; // Solo touch navigation
  }
}

// Desktop  
@media (min-width: 1024px) {
  .swiper-button-next, .swiper-button-prev {
    display: flex; // Button navigation
  }
}
```

## 🎯 Casos de Uso Recomendados

### ProductModal
- Visualización de productos en colecciones
- Quick view de productos
- Galería de drops/lookbooks

### ProductGallery
- Páginas de producto individual
- Detailed product view
- Portfolio/gallery pages

### ImageSlider
- Hero sections
- Testimonials sliders
- Simple image carousels

## ⚡ Optimizaciones Automáticas

### Performance:
- GPU acceleration en transiciones
- Lazy loading de imágenes
- Event listener cleanup automático
- Modular imports (tree-shaking)

### Accesibilidad:
- ARIA labels automáticos
- Keyboard navigation
- Focus management
- Screen reader support

### UX:
- Touch gestures nativos
- Momentum scrolling
- Velocity tracking
- Visual feedback

## 🔍 Debugging y Troubleshooting

### Console Logs:
```tsx
const { activeIndex } = useSlider({
  onSlideChange: (index) => {
    console.log('Slide:', index); // Debug slide changes
  }
});
```

### CSS Issues:
```css
/* Force Swiper reinitialization if needed */
.swiper {
  overflow: hidden !important;
}

/* Fix z-index issues */
.swiper-pagination {
  z-index: 20 !important;
}
```

### TypeScript:
```tsx
// Import types for better development experience
import type { Swiper as SwiperType } from 'swiper';
import type { SwiperModule } from 'swiper/types';
```
