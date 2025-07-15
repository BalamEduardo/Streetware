import React from 'react';
import Link from 'next/link';
import LookbookSection from '@/components/sections/LookbookSection';

export default function LookbookPage() {
  return (
    <div className="min-h-screen bg-brand">
      {/* Header con navegación */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/#lookbook"
              className="
                inline-flex items-center gap-2
                text-white/70 hover:text-white
                transition-colors duration-200
                text-sm font-medium
              "
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Inicio
            </Link>
          </div>

          {/* Header del lookbook */}
          <div className="text-center">
            <h1 className="
              text-4xl lg:text-5xl
              font-display font-bold
              text-white
              mb-4
              leading-tight
            ">
              Lookbook Completo
            </h1>
            <p className="
              text-lg lg:text-xl
              text-white/70
              max-w-2xl mx-auto
              leading-relaxed
            ">
              Descubre las últimas tendencias y combinaciones de streetware. 
              Inspírate con nuestros looks exclusivos y encuentra tu estilo único.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido del lookbook */}
      <LookbookSection showAllImages={true} showTitle={false} />
    </div>
  );
}
