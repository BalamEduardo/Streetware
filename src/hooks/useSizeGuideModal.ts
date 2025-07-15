'use client';

import { useState, useCallback } from 'react';

export interface UseSizeGuideModalReturn {
  isOpen: boolean;
  title: string;
  openModal: (title?: string) => void;
  closeModal: () => void;
  toggleModal: () => void;
}

export function useSizeGuideModal(): UseSizeGuideModalReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Guía de Tallas');

  const openModal = useCallback((
    modalTitle = 'Guía de Tallas'
  ) => {
    setTitle(modalTitle);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Limpiar título después de la animación
    setTimeout(() => {
      setTitle('Guía de Tallas');
    }, 300);
  }, []);

  const toggleModal = useCallback(() => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }, [isOpen, closeModal, openModal]);

  return {
    isOpen,
    title,
    openModal,
    closeModal,
    toggleModal,
  };
}
