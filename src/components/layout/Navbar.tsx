"use client";

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#drops', label: 'Drops' },
    { href: '#productos', label: 'Productos' },
    { href: '#tallas', label: 'Tallas' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
    { href: '#carrito', label: 'Carrito' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand text-white shadow backdrop-blur-xs ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Container principal del navbar */}
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Igual en mobile y desktop */}
          <div className="flex-shrink-0">
            <span className="font-display text-xl sm:text-2xl tracking-wide">
              Streetware
            </span>
          </div>

          {/* Navegación Desktop - Oculta en mobile */}
          <div className="hidden md:block">
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
          </div>

          {/* Botón hamburger - Solo visible en mobile */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent"
              aria-expanded="false"
              aria-label="Abrir menú principal"
            >
              {/* Icono hamburger */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  // Icono X para cerrar
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Icono hamburger
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

        {/* Menú Mobile - Solo visible cuando está abierto */}
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
  );
}