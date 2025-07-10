import React from 'react';
import { Drop } from '@/types';

// Componente para una tarjeta individual de drop
interface DropCardProps {
  drop: Drop;
}

function DropCard({ drop }: DropCardProps) {
  return (
    <div className="bg-white/10 rounded-lg overflow-hidden">
      <div className="h-64 bg-gray-400 flex items-center justify-center">
        <span className="text-gray-600 font-body text-lg">Drop Image Placeholder</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl mb-2 text-brand-yellow">{drop.name}</h3>
        <p className="font-body text-white/80 mb-4">
          {drop.description}
        </p>
        <span className="font-body text-sm text-brand-accent">Lanzamiento: {drop.launchDate}</span>
      </div>
    </div>
  );
}

export default function DropsSection() {
  // Datos mock - en el futuro vendrán de una API o base de datos
  const drops: Drop[] = [
    {
      id: '1',
      name: 'URBAN REBELLION',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      launchDate: '15 Julio 2025'
    },
    {
      id: '2',
      name: 'NIGHT VIBES',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      launchDate: '22 Julio 2025'
    },
    {
      id: '3',
      name: 'RETRO FUTURE',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      launchDate: '29 Julio 2025'
    }
  ];

  return (
    <section id="drops" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
          PRÓXIMOS DROPS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drops.map((drop) => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </div>
    </section>
  );
}
