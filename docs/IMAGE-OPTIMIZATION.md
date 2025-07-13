# 🖼️ GUÍA DE OPTIMIZACIÓN DE IMÁGENES - STREETWARE

## 📋 RESUMEN EJECUTIVO

Este documento establece las mejores prácticas para la optimización automática de imágenes en el proyecto Streetware, enfocándose especialmente en la sección de Drops.

## 🎯 OBJETIVOS PRINCIPALES

- **PageSpeed/Lighthouse Score**: 90+ en todas las métricas de imágenes
- **LCP Optimizado**: Imágenes no penalizan el Largest Contentful Paint  
- **Zero Layout Shift**: CLS = 0 mediante dimensiones predefinidas
- **Peso Optimizado**: Servir el tamaño exacto según viewport
- **Escalabilidad**: Código mantenible para futuras imágenes

---

## 🔧 CONFIGURACIONES IMPLEMENTADAS

### **1. Props `sizes` Optimizados por Componente**

#### **ImageSlider (Drops Section)**
```tsx
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
```
**Lógica:**
- Mobile (≤768px): Imagen ocupa 100% del viewport
- Tablet (769-1024px): Imagen ocupa 60% del viewport  
- Desktop (>1024px): Imagen ocupa 40% del viewport

#### **Background Images (Hero Sections)**
```tsx
sizes="100vw"
```
**Lógica:** Siempre ocupan el ancho completo de la pantalla

### **2. Aspect Ratios Responsivos**

```tsx
aspectRatio="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]"
```
**Breakpoints:**
- Mobile: 4:3 (más ancho, mejor para pantallas pequeñas)
- Small: 5:4 (transición suave)
- Large: 4:5 (más alto, aprovecha el espacio lateral en desktop)

### **3. Configuración de Calidad por Uso**

| Tipo de Imagen | Quality | Justificación |
|---|---|---|
| **Product Slider** | 80 | Balance calidad/peso para conversión |
| **Background** | 60 | Decorativo, se ve borroso anyway |
| **Hero Principal** | 85 | Primera impresión crítica |

### **4. Placeholder y Loading**

```tsx
placeholder="blur"
blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
priority={index === 0} // Solo primera imagen
```

---

## 📐 DIMENSIONES RECOMENDADAS PARA ASSETS

### **Product Images (Drops)**
- **Archivo original**: 1200x1200px mínimo
- **Formato**: JPEG (para fotos), WebP cuando Next.js lo soporte
- **Calidad de exportación**: 85-90%

### **Background Images**  
- **Archivo original**: 1920x1080px mínimo
- **Formato**: JPEG optimizado
- **Calidad de exportación**: 70-75%

### **Estructura de Carpetas**
```
public/images/
├── drops/
│   ├── Background-Drops.jpg (1920x1080, ~150KB)
│   └── DropsProducts/
│       └── [CollectionName]/
│           ├── [PRODUCT1].jpg (1200x1200, ~120KB)
│           ├── [PRODUCT2].jpg (1200x1200, ~120KB)
│           └── [PRODUCT3].jpg (1200x1200, ~120KB)
└── hero/
    ├── Hero-Desktop.jpg (1920x1080, ~200KB)
    └── Hero-Mobile.jpg (768x1024, ~100KB)
```

---

## ⚡ OPTIMIZACIONES AUTOMÁTICAS DE NEXT.JS

### **Formatos Servidos Automáticamente**
1. **WebP** (en navegadores compatibles)
2. **JPEG optimizado** (fallback)

### **Responsive Images Generadas**
Next.js genera automáticamente estas variantes:
- 640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w, 3840w

### **Lazy Loading**
- Automático para todas las imágenes excepto `priority={true}`
- Solo la primera imagen del slider tiene prioridad

---

## 🎨 IMPLEMENTACIÓN EN COMPONENTES

### **ImageSlider Component**
```tsx
<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover object-center"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 40vw"
  priority={index === 0}
  quality={80}
  placeholder="blur"
  blurDataURL="[base64-string]"
/>
```

### **Background Component**
```tsx
<Image
  src="/images/drops/Background-Drops.jpg"
  alt=""
  fill
  className="object-cover object-center opacity-30"
  sizes="100vw"
  priority={false}
  quality={60}
  placeholder="blur"
/>
```

---

## 📊 MÉTRICAS DE RENDIMIENTO ESPERADAS

### **Core Web Vitals**
- **LCP**: < 2.5s (imágenes optimizadas no penalizan)
- **CLS**: 0 (aspect-ratios previenen layout shift)
- **FID**: < 100ms (lazy loading no bloquea interactividad)

### **Lighthouse Scores Esperados**
- **Performance**: 90+
- **Best Practices**: 95+
- **Accessibility**: 95+ (alt texts semánticos)

---

## 🚀 MEJORES PRÁCTICAS PARA NUEVAS IMÁGENES

### **1. Naming Convention**
```
[Collection][Number].jpg
Urban-Rebellion-01.jpg
Urban-Rebellion-02.jpg
Neon-Dreams-01.jpg
```

### **2. Alt Text Semántico**
```tsx
alt="Urban Rebellion - Camiseta estampada con arte urbano"
alt="Urban Rebellion - Hoodie con diseño gráfico exclusivo"
```

### **3. Aspect Ratio Consistency**
- **Products**: Mantener 1:1 (cuadrados) para consistencia
- **Heroes**: 16:9 para desktop, 4:5 para mobile
- **Cards**: Flexibles según el contenido

### **4. Optimización Pre-Upload**
- Comprimir con tools como TinyPNG
- Exportar en calidad 85% para products
- Verificar que el peso no exceda 150KB por imagen

---

## 🔄 PROCESO DE TESTING

### **1. Development**
```bash
npm run dev
# Abrir DevTools > Network > Img
# Verificar que se sirvan los tamaños correctos
```

### **2. Lighthouse**
```bash
npm run build && npm run start
# Lighthouse en modo incógnito
# Verificar score de Performance > 90
```

### **3. Real Device Testing**
- iPhone (375px): Verificar tamaño 375w
- iPad (768px): Verificar tamaño 768w  
- Desktop (1200px): Verificar tamaño 1200w

---

## 🛠️ TROUBLESHOOTING

### **Layout Shift Issues**
- Verificar que `aspect-ratio` esté definido
- Asegurar que contenedor padre tiene dimensiones

### **Imágenes Borrosas**
- Aumentar `quality` a 80-85
- Verificar resolución del archivo original

### **Carga Lenta**
- Verificar `priority={true}` solo en imágenes above-the-fold
- Comprobar que `sizes` coincida con CSS real

### **Tamaños Incorrectos**
- Debuggear con DevTools > Network > filtro Img
- Ajustar valores de `sizes` según viewport real

---

## 📈 ROADMAP DE OPTIMIZACIÓN

### **Fase 1** ✅ **Completado**
- Configuración básica de Next.js Image
- Aspect ratios responsivos
- Sizes optimizados para Drops

### **Fase 2** 🔄 **En Progreso**
- Placeholder blur para todas las secciones
- Documentación completa
- Testing automatizado

### **Fase 3** 📋 **Pendiente**
- Migración a WebP nativo
- CDN optimizado (Cloudinary/Vercel)
- Monitoring automático de Core Web Vitals

---

## 👥 PARA DESARROLLADORES

### **Al agregar nuevas imágenes:**

1. **Seguir naming convention**
2. **Optimizar antes de subir** (TinyPNG)
3. **Usar el componente Image con props correctos**
4. **Verificar sizes según el layout**
5. **Test en Lighthouse**

### **Al crear nuevos componentes:**

1. **Definir aspect-ratio desde el diseño**
2. **Calcular sizes reales según CSS**
3. **Priorizar solo imágenes above-the-fold**
4. **Incluir alt text semántico**

---

**Fecha de última actualización**: Julio 2025  
**Versión**: 1.0  
**Responsable**: Equipo Frontend Streetware
