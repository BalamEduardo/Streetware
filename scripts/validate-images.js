#!/usr/bin/env node

/**
 * 🖼️ IMAGE OPTIMIZATION VALIDATOR
 * Script para validar que todas las imágenes del proyecto 
 * cumplan con las mejores prácticas establecidas
 */

const fs = require('fs');
const path = require('path');

const config = {
  maxFileSize: {
    product: 150 * 1024, // 150KB para productos
    background: 200 * 1024, // 200KB para backgrounds
    hero: 250 * 1024 // 250KB para heroes
  },
  requiredFormats: ['.jpg', '.jpeg', '.webp', '.png'],
  minDimensions: {
    product: { width: 800, height: 800 },
    background: { width: 1920, height: 1080 },
    hero: { width: 1200, height: 800 }
  }
};

/**
 * Analiza una imagen y retorna estadísticas
 */
function analyzeImage(imagePath) {
  const stats = fs.statSync(imagePath);
  const ext = path.extname(imagePath).toLowerCase();
  const fileName = path.basename(imagePath);
  
  return {
    path: imagePath,
    name: fileName,
    size: stats.size,
    extension: ext,
    sizeKB: Math.round(stats.size / 1024),
    isValid: config.requiredFormats.includes(ext)
  };
}

/**
 * Categoriza el tipo de imagen según su ruta
 */
function categorizeImage(imagePath) {
  if (imagePath.includes('Background')) return 'background';
  if (imagePath.includes('Hero')) return 'hero';
  if (imagePath.includes('DropsProducts')) return 'product';
  return 'other';
}

/**
 * Valida si una imagen cumple los requisitos
 */
function validateImage(imageData) {
  const category = categorizeImage(imageData.path);
  const maxSize = config.maxFileSize[category] || config.maxFileSize.product;
  
  const issues = [];
  
  if (!imageData.isValid) {
    issues.push(`❌ Formato no válido: ${imageData.extension}`);
  }
  
  if (imageData.size > maxSize) {
    issues.push(`⚠️ Archivo muy pesado: ${imageData.sizeKB}KB (máx: ${Math.round(maxSize/1024)}KB)`);
  }
  
  return {
    ...imageData,
    category,
    issues,
    isOptimal: issues.length === 0
  };
}

/**
 * Escanea todas las imágenes del proyecto
 */
function scanImages() {
  const imageDir = path.join(__dirname, '..', 'public', 'images');
  const images = [];
  
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir);
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (config.requiredFormats.some(ext => entry.toLowerCase().endsWith(ext))) {
        const imageData = analyzeImage(fullPath);
        const validation = validateImage(imageData);
        images.push(validation);
      }
    }
  }
  
  if (fs.existsSync(imageDir)) {
    scanDirectory(imageDir);
  }
  
  return images;
}

/**
 * Genera reporte de optimización
 */
function generateReport(images) {
  console.log('\n🖼️  REPORTE DE OPTIMIZACIÓN DE IMÁGENES\n');
  console.log('='.repeat(50));
  
  // Estadísticas generales
  const totalImages = images.length;
  const optimalImages = images.filter(img => img.isOptimal).length;
  const totalSizeKB = images.reduce((sum, img) => sum + img.sizeKB, 0);
  
  console.log(`📊 ESTADÍSTICAS GENERALES:`);
  console.log(`   Total de imágenes: ${totalImages}`);
  console.log(`   Imágenes optimizadas: ${optimalImages}/${totalImages} (${Math.round(optimalImages/totalImages*100)}%)`);
  console.log(`   Peso total: ${Math.round(totalSizeKB/1024*100)/100}MB`);
  console.log('');
  
  // Reporte por categoría
  const categories = ['product', 'background', 'hero', 'other'];
  
  categories.forEach(category => {
    const categoryImages = images.filter(img => img.category === category);
    if (categoryImages.length === 0) return;
    
    console.log(`📁 ${category.toUpperCase()}:`);
    categoryImages.forEach(img => {
      const status = img.isOptimal ? '✅' : '❌';
      console.log(`   ${status} ${img.name} (${img.sizeKB}KB)`);
      
      if (img.issues.length > 0) {
        img.issues.forEach(issue => {
          console.log(`      ${issue}`);
        });
      }
    });
    console.log('');
  });
  
  // Recomendaciones
  const problematicImages = images.filter(img => !img.isOptimal);
  
  if (problematicImages.length > 0) {
    console.log('🔧 RECOMENDACIONES:');
    console.log('   1. Comprimir imágenes con TinyPNG o similar');
    console.log('   2. Convertir PNG a JPEG donde sea posible');
    console.log('   3. Verificar que las dimensiones no sean excesivas');
    console.log('   4. Considerar WebP para mejor compresión');
    console.log('');
  }
  
  // Configuración de Next.js recomendada
  console.log('⚙️  CONFIGURACIÓN DE NEXT.JS:');
  console.log('');
  console.log('// next.config.ts');
  console.log('export default {');
  console.log('  images: {');
  console.log('    formats: [\'image/webp\', \'image/jpeg\'],');
  console.log('    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],');
  console.log('    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],');
  console.log('    minimumCacheTTL: 31536000, // 1 año');
  console.log('  }');
  console.log('};');
  console.log('');
  
  return {
    totalImages,
    optimalImages,
    optimizationScore: Math.round(optimalImages/totalImages*100),
    totalSizeMB: Math.round(totalSizeKB/1024*100)/100,
    issues: problematicImages.length
  };
}

// Ejecutar análisis
const images = scanImages();
const report = generateReport(images);

// Exit code basado en optimización
process.exit(report.optimizationScore >= 80 ? 0 : 1);
