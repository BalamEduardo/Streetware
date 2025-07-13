# ProductModal - Componente Modal Premium

## Descripción

`ProductModal` es un componente React profesional y reutilizable que presenta productos en un modal/overlay moderno con slider integrado. Está optimizado para experiencias premium en landing pages de streetwear/e-commerce.

## Características Principales

### 🎯 **Experiencia de Usuario**
- Modal con fondo blur optimizado (`bg-black/50` + `backdrop-blur-md`)
- Slider Swiper.js con navegación por swipe (mobile) y flechas (desktop)
- Paginación visual centrada
- Solo botón X discreto para cerrar (sin texto de instrucciones)
- Sin scrollbars laterales visibles

### 🎨 **Diseño Visual**
- Layout responsive: vertical en mobile, horizontal en desktop
- Imágenes optimizadas con Next.js `<Image />` component
- Diseño premium con glassmorphism y borders sutiles
- Animaciones fluidas y transiciones suaves
- Sistema de colores consistente con brand

### ♿ **Accesibilidad**
- Navegación completa por teclado (flechas, ESC, Home, End)
- Focus management adecuado
- ARIA labels y roles correctos
- Soporte para lectores de pantalla

### ⚡ **Performance**
- Lazy rendering con hooks optimizados
- Gestión inteligente de estado de animaciones
- Prevención de re-renders innecesarios
- Imágenes con `sizes` y `priority` optimizados

## Props Interface

```typescript
interface ProductModalProps {
  isOpen: boolean;              // Estado del modal
  onClose: () => void;          // Función para cerrar
  products: Product[];          // Array de productos
  title?: string;              // Título del modal (default: "Colección")
  subtitle?: string;           // Subtitle (removido en versión simplificada)
  initialSlideIndex?: number;   // Slide inicial (default: 0)
}
```

## Estructura del Producto

```typescript
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  category?: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
  size?: string[];
  isAvailable: boolean;
  isNew?: boolean;
}
```

## Uso Básico

### 1. Importación
```typescript
import ProductModal from '../ui/ProductModal';
import { Product } from '../../hooks/useProductModal';
```

### 2. Estado del Componente
```typescript
const [isModalOpen, setIsModalOpen] = useState(false);
const [products, setProducts] = useState<Product[]>([]);
```

### 3. Implementación
```tsx
<ProductModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  products={products}
  title="Urban Rebellion Collection"
  initialSlideIndex={0}
/>
```

## Casos de Uso

### 📦 **Para Sección de Drops**
```typescript
// Mostrar todos los productos de un drop
const openDropModal = (dropProducts: Product[]) => {
  setProducts(dropProducts);
  setIsModalOpen(true);
};
```

### 🏷️ **Para Producto Individual**
```typescript
// Mostrar producto específico dentro de contexto
const openProductModal = (productId: string, allProducts: Product[]) => {
  const productIndex = allProducts.findIndex(p => p.id === productId);
  setProducts(allProducts);
  setInitialSlide(productIndex);
  setIsModalOpen(true);
};
```

### 🏪 **Para Galería de Productos**
```typescript
// Navegación entre productos relacionados
const openGalleryModal = (category: string, startIndex: number) => {
  const categoryProducts = products.filter(p => p.category === category);
  setProducts(categoryProducts);
  setInitialSlide(startIndex);
  setIsModalOpen(true);
};
```

## Controles de Navegación

### ⌨️ **Teclado**
- `←/→` : Navegar entre productos
- `ESC` : Cerrar modal
- `Home` : Ir al primer producto
- `End` : Ir al último producto

### 📱 **Gestos Táctiles**
- **Swipe horizontal**: Navegar entre productos
- **Swipe down**: Cerrar modal
- **Tap en paginación**: Ir a producto específico

### 🖱️ **Mouse/Trackpad**
- Click en flechas laterales
- Click en bullets de paginación
- Click en X para cerrar
- Click fuera del modal para cerrar

## Responsive Behavior

### 📱 **Mobile (< 1024px)**
- Layout vertical (imagen arriba, info abajo)
- Altura de imagen fija (h-64)
- Paginación como dots en la parte inferior
- Swipe gestures optimizados

### 💻 **Desktop (≥ 1024px)**
- Layout horizontal (imagen izquierda, info derecha)
- Imagen flexible (flex-1)
- Información en sidebar fijo (max-w-md)
- Navegación con flechas laterales

## Optimizaciones Implementadas

### 🚀 **Performance**
- Hook `useOptimizedModal` para gestión eficiente de renderizado
- Conditional rendering basado en estado `shouldRender`
- Memoización de callbacks con `useCallback`
- Lazy loading de imágenes con `loading="lazy"`

### 🎨 **UX/UI**
- Prevención de scroll del body cuando modal está abierto
- Gestión de z-index para overlay correcto
- Transiciones suaves de entrada/salida
- Focus trap para navegación por teclado

### 📐 **Estructura**
- Componente `ProductSlide` separado para mejor mantenibilidad
- Hooks personalizados para lógica reutilizable
- CSS Modules para estilos encapsulados
- TypeScript para type safety

## Dependencias

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "swiper": "^11.0.0",
  "tailwindcss": "^3.0.0"
}
```

## Archivos del Componente

```
src/components/ui/
├── ProductModal.tsx           # Componente principal
├── ProductModal.module.css    # Estilos específicos
└── README.md                  # Esta documentación

src/hooks/
└── useProductModal.ts         # Hook y tipos

src/components/demo/
└── ProductModalExample.tsx    # Ejemplo completo de uso
```

## Buenas Prácticas

### ✅ **Recomendadas**
- Siempre proporcionar `alt` text para imágenes
- Usar `initialSlideIndex` para navegación contextual
- Implementar loading states para mejor UX
- Cerrar modal después de acciones (ej: añadir al carrito)

### ❌ **Evitar**
- No pasar arrays vacíos de productos sin manejo de loading
- No olvidar limpiar estado al cerrar modal
- No usar el modal para flows complejos (mejor páginas dedicadas)
- No sobrecargar con demasiados productos (afecta performance)

## Roadmap/Futuras Mejoras

- [ ] Zoom de imágenes con pinch gestures
- [ ] Integración con carrito de compras
- [ ] Soporte para variantes de producto (colores, etc.)
- [ ] Modo fullscreen para imágenes
- [ ] Compartir productos via API Web Share
- [ ] Lazy loading avanzado para múltiples imágenes
- [ ] Integración con analytics de producto
