"use client";

import React, { useState } from 'react';
import { Product, ProductCategory } from '@/types';

// Componente para filtros de productos
interface ProductFiltersProps {
  activeFilter: ProductCategory | 'todos';
  onFilterChange: (filter: ProductCategory | 'todos') => void;
}

function ProductFilters({ activeFilter, onFilterChange }: ProductFiltersProps) {
  const filters: Array<{ key: ProductCategory | 'todos'; label: string }> = [
    { key: 'todos', label: 'Todos' },
    { key: 'camisetas', label: 'Camisetas' },
    { key: 'hoodies', label: 'Hoodies' },
    { key: 'accesorios', label: 'Accesorios' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-6 py-2 rounded-full font-body transition ${
            activeFilter === filter.key
              ? 'bg-brand-accent text-white'
              : 'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

// Componente para una tarjeta individual de producto
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white/10 rounded-lg overflow-hidden group cursor-pointer">
      <div className="h-80 bg-gray-400 flex items-center justify-center group-hover:bg-gray-300 transition">
        <span className="text-gray-600 font-body">Product Image</span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg mb-1 text-white">{product.name}</h3>
        <p className="font-body text-sm text-white/70 mb-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-body text-brand-yellow font-bold">${product.price}.00</span>
          <span className="font-body text-xs text-white/60">
            {product.isLimited ? 'Stock limitado' : `${product.stock} disponibles`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<ProductCategory | 'todos'>('todos');

  // Datos mock estáticos - en el futuro vendrán de una API o base de datos
  const products: Product[] = [
    {
      id: 'product-1',
      name: 'PRODUCTO 1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'camisetas',
      stock: 25,
      isLimited: true
    },
    {
      id: 'product-2',
      name: 'PRODUCTO 2',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'hoodies',
      stock: 15,
      isLimited: false
    },
    {
      id: 'product-3',
      name: 'PRODUCTO 3',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'accesorios',
      stock: 8,
      isLimited: true
    },
    {
      id: 'product-4',
      name: 'PRODUCTO 4',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'camisetas',
      stock: 32,
      isLimited: false
    },
    {
      id: 'product-5',
      name: 'PRODUCTO 5',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'hoodies',
      stock: 12,
      isLimited: true
    },
    {
      id: 'product-6',
      name: 'PRODUCTO 6',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'accesorios',
      stock: 45,
      isLimited: false
    },
    {
      id: 'product-7',
      name: 'PRODUCTO 7',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'camisetas',
      stock: 18,
      isLimited: true
    },
    {
      id: 'product-8',
      name: 'PRODUCTO 8',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      price: 299,
      category: 'hoodies',
      stock: 28,
      isLimited: false
    }
  ];

  const filteredProducts = activeFilter === 'todos' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="productos" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
          CATÁLOGO
        </h2>
        
        <ProductFilters 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
