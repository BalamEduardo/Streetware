"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigationLinks = [
    { href: '#drops', label: 'Drops' },
    { href: '#productos', label: 'Productos' },
    { href: '#lookbook', label: 'Lookbook' },
    { href: '#tallas', label: 'Tallas' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50  text-white shadow backdrop-blur-xs ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Container principal del navbar */}
          <div className="flex items-center justify-between h-16">
            
            {/* Logo como link al inicio */}
            <div className="flex-shrink-0">
              <Link 
                href="#inicio"
                className="font-streetwear font-streetwear-logo text-xl sm:text-2xl tracking-wide hover:text-brand-yellow transition-colors duration-200"
              >
                StreetWare
              </Link>
            </div>

            {/* Navegación Desktop - Oculta en mobile */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <ul className="flex items-center space-x-6 lg:space-x-8">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm lg:text-base text-white/90 hover:text-white transition-colors duration-200 py-2 px-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Icono de carrito - Desktop */}
              <button
                onClick={toggleCart}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                aria-label="Abrir carrito"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19h6m-6 0a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile menu button y carrito */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Icono de carrito - Mobile */}
              <button
                onClick={toggleCart}
                className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                aria-label="Abrir carrito"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H17M9 19h6m-6 0a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
                  />
                </svg>
              </button>
              
              {/* Botón hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"
                aria-expanded="false"
                aria-label="Abrir menú principal"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menú Mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-brand border-t border-white/10">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-2 text-base font-body text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Sidebar/Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleCart}
          ></div>
          
          {/* Cart Drawer */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-brand border-l border-white/10 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h2 className="text-xl font-display text-white">Carrito</h2>
                <button
                  onClick={toggleCart}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-4">
                <div className="text-center text-white/60 py-8">
                  <p className="text-lg mb-2">Tu carrito está vacío</p>
                  <p className="text-sm">¡Agrega algunos productos increíbles!</p>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-white/10">
                <button className="w-full bg-brand-accent text-white py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-brand-yellow transition-colors duration-300">
                  Proceder al Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}