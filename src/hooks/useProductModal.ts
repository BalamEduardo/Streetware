'use client';

import { useState, useCallback } from 'react';

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  category?: string;
  size?: string[];
  isNew?: boolean;
  isAvailable?: boolean;
}

export interface UseProductModalReturn {
  isOpen: boolean;
  products: Product[];
  title: string;
  subtitle: string;
  openModal: (products: Product[], title?: string, subtitle?: string) => void;
  closeModal: () => void;
  toggleModal: () => void;
}

export function useProductModal(): UseProductModalReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState('Colección');
  const [subtitle, setSubtitle] = useState('Productos disponibles');

  const openModal = useCallback((
    modalProducts: Product[], 
    modalTitle = 'Colección', 
    modalSubtitle = 'Productos disponibles'
  ) => {
    setProducts(modalProducts);
    setTitle(modalTitle);
    setSubtitle(modalSubtitle);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Limpiar productos después de la animación
    setTimeout(() => {
      setProducts([]);
      setTitle('Colección');
      setSubtitle('Productos disponibles');
    }, 300);
  }, []);

  const toggleModal = useCallback(() => {
    if (isOpen) {
      closeModal();
    } else {
      // No se puede abrir sin productos
      console.warn('No se puede abrir el modal sin productos');
    }
  }, [isOpen, closeModal]);

  return {
    isOpen,
    products,
    title,
    subtitle,
    openModal,
    closeModal,
    toggleModal,
  };
}
