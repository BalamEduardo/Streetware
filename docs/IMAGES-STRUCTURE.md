# Estructura de Imágenes - StreetWare

## 📁 Organización de Directorios

```
public/
├── images/
│   ├── drops/
│   │   └── DropsProducts/
│   │       ├── UrbanRebelion/
│   │       │   ├── UR1.jpg          # Imagen principal - Camiseta con arte urbano
│   │       │   ├── UR2.jpg          # Imagen secundaria - Hoodie con diseño gráfico
│   │       │   └── U3.jpg           # Imagen conjunto - Look completo streetwear
│   │       └── [FutureDrops]/       # Carpetas para próximos drops
│   ├── hero/                        # Imágenes del hero section
│   ├── about/                       # Imágenes de la sección "nosotros"
│   ├── brand/                       # Logos y elementos de marca
│   └── icons/                       # Iconografía del sitio
```

## 🎯 Drop Destacado: Urban Rebellion

### Estructura del Componente
- **Ubicación**: `src/components/sections/DropsSection.tsx`
- **Slider Component**: `src/components/ui/ImageSlider.tsx`
- **Tecnología**: Swiper.js + Next.js Image

### Configuración de Imágenes

#### 1. Array de Imágenes del Drop
```typescript
images: [
  {
    id: "ur1",
    src: "/images/drops/DropsProducts/UrbanRebelion/UR1.jpg",
    alt: "Urban Rebellion - Camiseta estampada con arte urbano"
  },
  {
    id: "ur2", 
    src: "/images/drops/DropsProducts/UrbanRebelion/UR2.jpg",
    alt: "Urban Rebellion - Hoodie con diseño gráfico exclusivo"
  },
  {
    id: "u3",
    src: "/images/drops/DropsProducts/UrbanRebelion/U3.jpg",
    alt: "Urban Rebellion - Conjunto completo streetwear"
  }
]
```

#### 2. Especificaciones Técnicas
- **Formato Recomendado**: JPEG (.jpg) para fotografías de productos
- **Calidad**: 85% (optimización automática de Next.js)
- **Dimensiones Sugeridas**: 
  - Mínimo: 800x1000px (aspect ratio 4:5)
  - Recomendado: 1200x1500px
  - Máximo: 2400x3000px
- **Peso**: < 500KB por imagen después de optimización

#### 3. SEO y Accesibilidad
- **Alt Text**: Descriptivo y específico para cada producto
- **Loading**: Primera imagen con `priority={true}`, resto lazy loading
- **Sizes**: Responsive `"(max-width: 768px) 100vw, 50vw"`

## 🎠 Configuración del Slider

### Características del ImageSlider
- **Autoplay**: 4 segundos, pausa al hover
- **Loop**: Activado cuando hay más de 1 imagen
- **Navegación**: Flechas (desktop) + dots (todas las pantallas)
- **Swipe**: Soporte táctil para mobile
- **Accesibilidad**: ARIA labels y navegación por teclado

### Responsive Behavior
```css
/* Mobile */
aspect-[4/3]              /* 400x300px aprox */

/* Desktop */
lg:aspect-[4/5]           /* 480x600px aprox */
```

## 📋 Card Container Profesional

### Diseño y Estructura
- **Fondo**: `bg-neutral-900/95` con `backdrop-blur-lg`
- **Bordes**: `rounded-2xl` con `border-white/10`
- **Sombra**: `shadow-2xl` escalando a `shadow-3xl` en hover
- **Layout**: 
  - Mobile: Stack vertical (imagen arriba, contenido abajo)
  - Desktop (lg+): Side-by-side (60% imagen, 40% contenido)

### Efectos y Transiciones
- **Hover Scale**: `hover:scale-[1.005]` (sutil)
- **Background Transition**: De `neutral-900/95` a `neutral-900/98`
- **Duración**: `duration-500` para transiciones suaves

## 🏷️ Badges y Overlays

### Badges de Estado
- **Posición**: Absolute top-6 left-6, z-30
- **Disponible**: `bg-green-500/90 text-white`
- **Próximamente**: `bg-brand-yellow/90 text-brand`
- **Agotado**: `bg-red-500/90 text-white`
- **Nuevo**: `bg-brand-yellow/95 text-brand`

### Overlay de Información
- **Contador de imágenes**: Bottom-right con fade in/out en hover
- **Background**: `bg-black/50` con `backdrop-blur-sm`

## 🔧 Buenas Prácticas Implementadas

### 1. Optimización de Imágenes
- ✅ Next.js `<Image />` component para todas las imágenes
- ✅ Lazy loading automático excepto primera imagen
- ✅ Responsive images con `sizes` attribute
- ✅ Optimización automática WebP cuando es soportado

### 2. Performance
- ✅ Swiper modules importados específicamente (tree-shaking)
- ✅ CSS crítico inline, estilos de Swiper en component
- ✅ Autoplay con pausa inteligente en interacciones

### 3. Accesibilidad
- ✅ ARIA labels en slider y navegación
- ✅ Alt text descriptivo para cada imagen
- ✅ Navegación por teclado en slider
- ✅ Contraste adecuado en todos los elementos

### 4. Escalabilidad
- ✅ Estructura flexible para múltiples drops
- ✅ Component ImageSlider reutilizable
- ✅ Props tipadas con TypeScript
- ✅ Fácil adición de nuevas imágenes

## 📝 Checklist para Nuevos Drops

### Antes de Agregar un Nuevo Drop:
1. [ ] Crear carpeta en `/public/images/drops/DropsProducts/[NombreDrop]/`
2. [ ] Preparar 3-5 imágenes optimizadas (formato JPEG, < 500KB cada una)
3. [ ] Definir nombres consistentes (ej: DR1.jpg, DR2.jpg, etc.)
4. [ ] Escribir alt text descriptivo para cada imagen
5. [ ] Actualizar el array de imágenes en el componente
6. [ ] Verificar responsive design en diferentes dispositivos
7. [ ] Probar navegación del slider y accesibilidad

### Nomenclatura de Archivos:
- **Patrón**: `[PrimerLetra][SegundaLetra][Numero].jpg`
- **Ejemplos**: 
  - Urban Rebellion: UR1.jpg, UR2.jpg, U3.jpg
  - Neon Dreams: ND1.jpg, ND2.jpg, ND3.jpg
  - Future Tech: FT1.jpg, FT2.jpg, FT3.jpg

---

*Documentación actualizada: 12 Julio 2025*
*Versión: 1.0.0*
