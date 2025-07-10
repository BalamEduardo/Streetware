import React from 'react';
import { SizeGuide } from '@/types';

export default function SizingSection() {
  // Datos de la tabla de tallas
  const sizeGuide: SizeGuide[] = [
    { size: 'XS', chest: '45-48', length: '65-68' },
    { size: 'S', chest: '48-52', length: '68-72' },
    { size: 'M', chest: '52-56', length: '72-76' },
    { size: 'L', chest: '56-60', length: '76-80' },
    { size: 'XL', chest: '60-64', length: '80-84' }
  ];

  return (
    <section id="tallas" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
          GUÍA DE TALLAS
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tabla de tallas */}
          <div>
            <h3 className="font-display text-2xl mb-6 text-brand-yellow">TABLA DE MEDIDAS</h3>
            <div className="bg-white/10 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-accent">
                  <tr>
                    <th className="px-4 py-3 font-body text-left">Talla</th>
                    <th className="px-4 py-3 font-body text-left">Pecho (cm)</th>
                    <th className="px-4 py-3 font-body text-left">Largo (cm)</th>
                  </tr>
                </thead>
                <tbody className="font-body">
                  {sizeGuide.map((size, index) => (
                    <tr key={size.size} className={index < sizeGuide.length - 1 ? "border-b border-white/20" : ""}>
                      <td className="px-4 py-3">{size.size}</td>
                      <td className="px-4 py-3">{size.chest}</td>
                      <td className="px-4 py-3">{size.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Instrucciones de medición */}
          <div>
            <h3 className="font-display text-2xl mb-6 text-brand-yellow">CÓMO MEDIR</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-body font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-body font-bold mb-2">Pecho</h4>
                  <p className="font-body text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mide alrededor del punto más ancho del pecho.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-body font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-body font-bold mb-2">Largo</h4>
                  <p className="font-body text-white/80">
                    Sed do eiusmod tempor incididunt ut labore. Mide desde el punto más alto del hombro hasta el borde inferior.
                  </p>
                </div>
              </div>

              <div className="h-40 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-body">Measurement Guide Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
