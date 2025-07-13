# 🎯 ProductModal - Componente Modal Profesional

## 📋 Descripción General

`ProductModal` es un componente modal reutilizable y profesional diseñado para mostrar colecciones de productos con una interface optimizada tanto para desktop como mobile.

## 🚀 Características Principales

### ✅ **Funcionalidades Core**
- **Modal responsivo** con backdrop blur y overlay oscuro
- **Grid adaptativo**: Desktop (3 columnas) → Tablet (2 columnas) → Mobile (1 columna)  
- **Múltiples métodos de cierre**: Click fuera, tecla ESC, botón X
- **Animaciones suaves** de entrada y salida (fade + slide)
- **Scroll interno** cuando hay muchos productos
- **Estado loading** y manejo de colecciones vacías

### ✅ **Optimización de Imágenes**
- **Next.js Image component** para todas las imágenes
- **Swiper.js integration** para productos con múltiples fotos
- **Lazy loading** automático y responsive sizes
- **Placeholder visual** cuando no hay imagen disponible

### ✅ **UX/UI Profesional**
- **Badges dinámicos**: NUEVO, AGOTADO, etc.
- **Estados visuales** para productos no disponibles
- **Sticky header y footer** para mejor navegación
- **Indicadores visuales** (número de fotos, estados)

---

## 🔧 Uso del Componente

### **Importación Básica**
```tsx
import ProductModal from '@/components/ui/ProductModal';
import { useProductModal } from '@/hooks/useProductModal';
```

### **Implementación en Componente**
```tsx
function MyComponent() {
  const { isOpen, openModal, closeModal } = useProductModal();
  
  const products = [
    {
      id: 'product-1',
      name: 'Urban Hoodie',
      price: '$1,299',
      description: 'Premium hoodie con diseño exclusivo',
      category: 'Hoodies',
      isNew: true,
      isAvailable: true,
      images: [
        {
          src: '/images/products/hoodie-1.jpg',
          alt: 'Urban Hoodie - Vista frontal'
        }
      ]
    }
  ];

  return (
    <>
      <button onClick={() => openModal(products, 'Mi Colección')}>
        Ver Productos
      </button>
      
      <ProductModal
        isOpen={isOpen}
        onClose={closeModal}
        products={products}
        title="Mi Colección"
        subtitle="Productos exclusivos"
      />
    </>
  );
}
```

---

## 📐 Interface del Producto

```typescript
interface Product {
  id: string;                    // ID único del producto
  name: string;                  // Nombre del producto
  price: string;                 // Precio formateado (ej: "$1,299")
  description: string;           // Descripción del producto
  images: Array<{               // Array de imágenes
    src: string;                 // URL de la imagen
    alt: string;                 // Texto alternativo
  }>;
  category?: string;             // Categoría opcional
  size?: string[];              // Tallas disponibles
  isNew?: boolean;              // Si es producto nuevo
  isAvailable?: boolean;        // Si está disponible
}
```

---

## 🎨 Props del Componente

| Prop | Tipo | Requerido | Default | Descripción |
|------|------|-----------|---------|-------------|
| `isOpen` | boolean | ✅ | - | Estado del modal |
| `onClose` | function | ✅ | - | Función para cerrar |
| `products` | Product[] | ✅ | - | Array de productos |
| `title` | string | ❌ | "Colección" | Título del modal |
| `subtitle` | string | ❌ | "Productos disponibles" | Subtítulo |

---

## 🔨 Hook useProductModal

### **Métodos Disponibles**
```typescript
const {
  isOpen,           // boolean: Estado actual del modal
  products,         // Product[]: Productos actuales
  title,            // string: Título actual
  subtitle,         // string: Subtítulo actual
  openModal,        // (products, title?, subtitle?) => void
  closeModal,       // () => void
  toggleModal       // () => void
} = useProductModal();
```

### **Ejemplo de Uso Avanzado**
```tsx
const { openModal } = useProductModal();

// Abrir con productos específicos
const handleViewDrop = () => {
  openModal(
    dropProducts,
    "Urban Rebellion",
    "Colección Primavera 2025 • 6 productos exclusivos"
  );
};

// Abrir producto individual
const handleViewProduct = (product: Product) => {
  openModal(
    [product],
    product.name,
    `${product.category} • Detalles del producto`
  );
};
```

---

## 📱 Comportamiento Responsivo

### **Breakpoints**
- **Mobile** (< 640px): 1 columna, modal fullscreen-like
- **Tablet** (640px - 1024px): 2 columnas
- **Desktop** (> 1024px): 3 columnas

### **Adaptaciones Mobile**
- **Padding reducido** para aprovechar espacio
- **Cards más compactas** con información esencial
- **Swiper touch-friendly** para múltiples imágenes
- **Sticky header/footer** para mejor navegación

---

## 🎬 Animaciones CSS

### **Clases Personalizadas**
```css
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out;
}
```

### **Timing de Animaciones**
- **Apertura**: 300ms (slide + fade)
- **Cierre**: 200ms (fade out)
- **Cleanup**: 300ms (limpieza de estado)

---

## 🔄 Integración con Swiper.js

### **Configuración Automática**
- **Single image**: Muestra Next.js Image normal
- **Multiple images**: Activa Swiper automáticamente
- **Navigation**: Dots pagination para mobile/tablet
- **Loop**: Activado cuando hay más de 1 imagen

### **Estilos Personalizados**
```css
.swiper-pagination-bullet-product {
  background: rgba(255, 255, 255, 0.4);
  width: 8px;
  height: 8px;
}

.swiper-pagination-bullet-product-active {
  background: #FFD600; /* brand-yellow */
  transform: scale(1.2);
}
```

---

## 🎯 Casos de Uso

### **1. Modal de Colección Completa**
```tsx
// En DropsSection.tsx
const handleViewCollection = () => {
  openModal(
    collectionProducts,
    currentDrop.title,
    `${currentDrop.subtitle} • ${collectionProducts.length} productos`
  );
};
```

### **2. Modal de Producto Individual**
```tsx
// En ProductCard.tsx
const handleViewDetails = () => {
  openModal(
    [product],
    product.name,
    'Detalles del producto'
  );
};
```

### **3. Modal de Categoría**
```tsx
// En CategorySection.tsx
const handleViewCategory = (category: string) => {
  const categoryProducts = products.filter(p => p.category === category);
  openModal(
    categoryProducts,
    `Categoría: ${category}`,
    `${categoryProducts.length} productos disponibles`
  );
};
```

---

## ⚡ Optimizaciones de Performance

### **Lazy Loading**
- **Componente**: Se monta solo cuando `isOpen = true`
- **Imágenes**: Next.js Image con lazy loading automático
- **Estado**: Cleanup automático después de cerrar

### **Memory Management**
- **Estado limpio**: Se limpia después de 300ms del cierre
- **Event listeners**: Se remueven automáticamente
- **Body scroll**: Se restaura al cerrar

### **Bundle Optimization**
- **Tree shaking**: Solo importa módulos Swiper necesarios
- **CSS splitting**: Estilos modularizados
- **Dynamic imports**: Listo para code splitting futuro

---

## 🛠️ Personalización

### **Modificar Estilos**
El componente usa clases Tailwind estándar. Para personalizaciones:

```tsx
// Extender el componente
<ProductModal
  isOpen={isOpen}
  onClose={closeModal}
  products={products}
  className="custom-modal-styles" // Prop adicional
/>
```

### **Modificar Animaciones**
Editar las clases CSS en `globals.css`:

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95); /* Más dramático */
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

---

## 🔮 Roadmap Futuro

### **Fase 2**
- [ ] Filtros por categoría dentro del modal
- [ ] Ordenamiento (precio, nombre, disponibilidad)
- [ ] Vista de comparación de productos
- [ ] Zoom de imágenes

### **Fase 3**
- [ ] Integración con carrito de compras
- [ ] Wishlist/Favoritos
- [ ] Share social de productos
- [ ] Reviews y ratings

---

**🎉 El componente ProductModal está listo para uso en producción y es completamente extensible para futuras funcionalidades.**
