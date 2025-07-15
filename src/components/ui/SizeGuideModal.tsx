'use client';

import React, { useEffect, useCallback } from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

// Datos de la guía de tallas
const sizeGuideData = {
  camisetas: {
    title: "Camisetas y Tops",
    headers: ["Talla", "Pecho (cm)", "Largo (cm)", "Hombros (cm)"],
    sizes: [
      { size: "XS", chest: "86-91", length: "66", extra: "44" },
      { size: "S", chest: "91-96", length: "68", extra: "46" },
      { size: "M", chest: "96-101", length: "70", extra: "48" },
      { size: "L", chest: "101-106", length: "72", extra: "50" },
      { size: "XL", chest: "106-111", length: "74", extra: "52" },
      { size: "XXL", chest: "111-116", length: "76", extra: "54" }
    ]
  },
  hoodies: {
    title: "Hoodies y Sudaderas",
    headers: ["Talla", "Pecho (cm)", "Largo (cm)", "Mangas (cm)"],
    sizes: [
      { size: "XS", chest: "90-95", length: "68", extra: "82" },
      { size: "S", chest: "95-100", length: "70", extra: "84" },
      { size: "M", chest: "100-105", length: "72", extra: "86" },
      { size: "L", chest: "105-110", length: "74", extra: "88" },
      { size: "XL", chest: "110-115", length: "76", extra: "90" },
      { size: "XXL", chest: "115-120", length: "78", extra: "92" }
    ]
  },
  pantalones: {
    title: "Pantalones y Shorts",
    headers: ["Talla", "Cintura (cm)", "Cadera (cm)", "Largo (cm)"],
    sizes: [
      { size: "28", chest: "71-76", length: "94-99", extra: "102" },
      { size: "30", chest: "76-81", length: "99-104", extra: "104" },
      { size: "32", chest: "81-86", length: "104-109", extra: "106" },
      { size: "34", chest: "86-91", length: "109-114", extra: "108" },
      { size: "36", chest: "91-96", length: "114-119", extra: "110" },
      { size: "38", chest: "96-101", length: "119-124", extra: "112" }
    ]
  }
};

const measurementTips = [
  {
    title: "Pecho/Busto",
    description: "Mide alrededor de la parte más ancha del pecho, manteniendo la cinta métrica horizontal."
  },
  {
    title: "Cintura",
    description: "Mide en la parte más estrecha de tu cintura, generalmente por encima del ombligo."
  },
  {
    title: "Cadera",
    description: "Mide alrededor de la parte más ancha de tus caderas."
  },
  {
    title: "Largo",
    description: "Para camisetas: desde el hombro hasta el dobladillo. Para pantalones: desde la cintura hasta el tobillo."
  }
];

function SizeGuideModal({ 
  isOpen, 
  onClose, 
  title = "Guía de Tallas" 
}: SizeGuideModalProps) {

  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Controlar scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Container */}
      <div className="
        relative
        w-full max-w-6xl
        h-full max-h-[95vh]
        mx-4
        bg-neutral-900
        rounded-2xl
        border border-white/10
        overflow-hidden
        shadow-2xl
      ">
        {/* Header */}
        <div className="
          sticky top-0 z-10
          bg-neutral-900/95 backdrop-blur-md
          border-b border-white/10
          px-6 py-4
          flex items-center justify-between
        ">
          <h2 className="
            text-2xl font-display font-bold
            text-white
            tracking-wide
          ">
            {title}
          </h2>
          
          <button
            onClick={onClose}
            className="
              p-2
              text-white/60 hover:text-white
              transition-colors duration-200
              rounded-lg
              hover:bg-white/10
            "
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="
          h-full overflow-y-auto
          px-6 py-8
          space-y-8
        ">
          
          {/* Consejos de medición */}
          <div className="
            bg-gradient-to-r from-brand-yellow/10 to-brand-accent/10
            border border-brand-yellow/20
            rounded-xl p-6
          ">
            <h3 className="
              text-lg font-display font-bold
              text-brand-yellow
              mb-4
              flex items-center gap-2
            ">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Consejos para medir correctamente
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {measurementTips.map((tip, index) => (
                <div key={index} className="
                  bg-black/20 backdrop-blur-sm
                  rounded-lg p-4
                  border border-white/5
                ">
                  <h4 className="
                    font-semibold text-white
                    text-sm mb-2
                  ">
                    {tip.title}
                  </h4>
                  <p className="
                    text-white/70 text-xs
                    leading-relaxed
                  ">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tablas de tallas */}
          {Object.entries(sizeGuideData).map(([category, data]) => (
            <div key={category} className="
              bg-neutral-800/50
              rounded-xl p-6
              border border-white/10
            ">
              <h3 className="
                text-xl font-display font-bold
                text-white mb-6
                flex items-center gap-2
              ">
                <div className="
                  w-2 h-2 bg-brand-accent
                  rounded-full
                " />
                {data.title}
              </h3>

              {/* Tabla responsive */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[400px]">
                  <thead>
                    <tr className="border-b border-white/20">
                      {data.headers.map((header, index) => (
                        <th key={index} className="
                          text-left py-3 px-4
                          text-brand-yellow font-semibold
                          text-sm uppercase tracking-wide
                        ">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.sizes.map((size, index) => (
                      <tr key={index} className="
                        border-b border-white/5
                        hover:bg-white/5
                        transition-colors duration-200
                      ">
                        <td className="
                          py-3 px-4
                          text-white font-bold
                          text-sm
                        ">
                          {size.size}
                        </td>
                        <td className="
                          py-3 px-4
                          text-white/80
                          text-sm
                        ">
                          {size.chest}
                        </td>
                        <td className="
                          py-3 px-4
                          text-white/80
                          text-sm
                        ">
                          {size.length}
                        </td>
                        <td className="
                          py-3 px-4
                          text-white/80
                          text-sm
                        ">
                          {size.extra}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Imagen de referencia */}
          <div className="
            bg-neutral-800/50
            rounded-xl p-6
            border border-white/10
            text-center
          ">
            <h3 className="
              text-xl font-display font-bold
              text-white mb-4
            ">
              Guía Visual de Medidas
            </h3>
            
            <div className="
              relative
              max-w-md mx-auto
              bg-neutral-700/30
              rounded-lg
              border-2 border-dashed border-white/20
              aspect-[3/4]
              flex items-center justify-center
            ">
              <div className="text-center">
                <svg className="w-16 h-16 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-white/60 text-sm">
                  Diagrama de medidas
                  <br />
                  <span className="text-xs text-white/40">
                    (Próximamente)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Nota final */}
          <div className="
            bg-neutral-800/30
            border border-white/10
            rounded-lg p-4
            text-center
          ">
            <p className="
              text-white/70 text-sm
              leading-relaxed
            ">
              <strong className="text-brand-yellow">Nota:</strong> Estas medidas son aproximadas. 
              Si tienes dudas entre dos tallas, te recomendamos elegir la talla mayor para mayor comodidad.
              Para asesoría personalizada, contáctanos directamente.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SizeGuideModal;
