// Ejemplo de uso del ProductModal
// Este archivo muestra cómo usar el componente ProductModal desde un componente padre

'use client';

import React, { useState } from 'react';
import ProductModal from '../ui/ProductModal';
import { Product } from '../../hooks/useProductModal';

// Datos de ejemplo para los productos
const exampleProducts: Product[] = [
  {
    id: 'UR001',
    name: 'Urban Rebellion Hoodie',
    price: '$89.99',
    description: 'Sudadera premium con capucha, diseño exclusivo streetwear con detalles bordados y acabados de alta calidad.',
    category: 'Urban Rebellion',
    images: [
      {
        src: '/images/drops/DropsProducts/UrbanRebelion/UR1.jpg',
        alt: 'Urban Rebellion Hoodie - Vista frontal'
      },
      {
        src: '/images/drops/DropsProducts/UrbanRebelion/UR2.jpg', 
        alt: 'Urban Rebellion Hoodie - Vista trasera'
      }
    ],
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isAvailable: true,
    isNew: true
  },
  {
    id: 'UR002',
    name: 'Urban Rebellion Pants',
    price: '$79.99',
    description: 'Pantalones cargo estilo streetwear con múltiples bolsillos y ajuste cómodo. Perfecto para el look urbano.',
    category: 'Urban Rebellion',
    images: [
      {
        src: '/images/drops/DropsProducts/UrbanRebelion/U3.jpg',
        alt: 'Urban Rebellion Pants'
      }
    ],
    size: ['28', '30', '32', '34', '36', '38'],
    isAvailable: true,
    isNew: false
  },
  {
    id: 'ND001',
    name: 'Neon Dreams T-Shirt',
    price: '$45.99',
    description: 'Camiseta con diseño fluorescente que brilla en la oscuridad. Material premium y corte moderno.',
    category: 'Neon Dreams',
    images: [
      {
        src: '/images/drops/DropsProducts/NeonDreams/ND1.jpg',
        alt: 'Neon Dreams T-Shirt'
      }
    ],
    size: ['XS', 'S', 'M', 'L', 'XL'],
    isAvailable: false,
    isNew: true
  }
];

export default function ProductModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [modalTitle, setModalTitle] = useState('');
  const [initialSlide, setInitialSlide] = useState(0);

  // Función para abrir el modal con todos los productos de una colección
  const openCollectionModal = (collectionName: string) => {
    const collectionProducts = exampleProducts.filter(
      product => product.category === collectionName
    );
    setSelectedProducts(collectionProducts);
    setModalTitle(`Colección ${collectionName}`);
    setInitialSlide(0);
    setIsModalOpen(true);
  };

  // Función para abrir el modal con un producto específico
  const openProductModal = (productId: string) => {
    const productIndex = exampleProducts.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
      setSelectedProducts(exampleProducts);
      setModalTitle('Productos Destacados');
      setInitialSlide(productIndex);
      setIsModalOpen(true);
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Opcional: limpiar estado después de la animación
    setTimeout(() => {
      setSelectedProducts([]);
      setModalTitle('');
      setInitialSlide(0);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-neutral-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-display text-white mb-8 text-center">
          Ejemplo de uso del ProductModal
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Botones para abrir modal por colección */}
          <div className="bg-neutral-800 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-display text-white mb-4">Por Colección</h3>
            <div className="space-y-3">
              <button
                onClick={() => openCollectionModal('Urban Rebellion')}
                className="w-full px-4 py-3 bg-brand-accent hover:bg-brand-accent/90 text-white font-bold rounded-lg transition-all duration-200"
              >
                Ver Urban Rebellion
              </button>
              <button
                onClick={() => openCollectionModal('Neon Dreams')}
                className="w-full px-4 py-3 bg-brand-yellow hover:bg-brand-yellow/90 text-neutral-900 font-bold rounded-lg transition-all duration-200"
              >
                Ver Neon Dreams
              </button>
            </div>
          </div>

          {/* Botones para abrir modal por producto individual */}
          <div className="bg-neutral-800 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-display text-white mb-4">Por Producto</h3>
            <div className="space-y-3">
              {exampleProducts.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => openProductModal(product.id)}
                  className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm rounded-lg transition-all duration-200 text-left"
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* Información de uso */}
          <div className="bg-neutral-800 rounded-lg p-6 border border-white/10">
            <h3 className="text-lg font-display text-white mb-4">Características</h3>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Swiper.js para navegación</li>
              <li>• Responsive design</li>
              <li>• Teclado y swipe gestures</li>
              <li>• Fondo blur optimizado</li>
              <li>• Solo botón X para cerrar</li>
              <li>• Imágenes con Next.js Image</li>
              <li>• Accesibilidad incluida</li>
            </ul>
          </div>
        </div>

        {/* Código de ejemplo */}
        <div className="bg-neutral-800 rounded-lg p-6 border border-white/10">
          <h3 className="text-lg font-display text-white mb-4">Código de Uso</h3>
          <pre className="text-sm text-white/80 overflow-x-auto">
{`// Importar el componente
import ProductModal from '../ui/ProductModal';

// Estado para controlar el modal
const [isModalOpen, setIsModalOpen] = useState(false);
const [products, setProducts] = useState<Product[]>([]);

// Usar el componente
<ProductModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  products={products}
  title="Mi Colección"
  initialSlideIndex={0}
/>`}
          </pre>
        </div>
      </div>

      {/* El componente ProductModal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        products={selectedProducts}
        title={modalTitle}
        initialSlideIndex={initialSlide}
      />
    </div>
  );
}
