import React from 'react';
import { CompanyStats } from '@/types';

export default function AboutSection() {
  const stats: CompanyStats = {
    foundedYear: 2019,
    dropsLaunched: '50+',
    satisfiedCustomers: '10K+'
  };

  const values = [
    {
      icon: '🎨',
      title: 'CREATIVIDAD',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      icon: '⭐',
      title: 'CALIDAD',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
      icon: '🚀',
      title: 'EXCLUSIVIDAD',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-4 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
          NUESTRA HISTORIA
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-2xl mb-6 text-brand-yellow">QUIÉNES SOMOS</h3>
            <p className="font-body text-lg text-white/90 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="font-body text-lg text-white/90 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-display text-brand-yellow mb-2">{stats.foundedYear}</div>
                <div className="font-body text-sm text-white/70">Fundación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-brand-yellow mb-2">{stats.dropsLaunched}</div>
                <div className="font-body text-sm text-white/70">Drops lanzados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display text-brand-yellow mb-2">{stats.satisfiedCustomers}</div>
                <div className="font-body text-sm text-white/70">Clientes satisfechos</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="h-64 bg-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 font-body text-lg">Team Photo Placeholder</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-body text-sm">Workshop Image</span>
              </div>
              <div className="h-32 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-body text-sm">Process Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mt-20">
          <h3 className="font-display text-2xl text-center mb-12 text-brand-yellow">NUESTROS VALORES</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h4 className="font-display text-xl mb-3">{value.title}</h4>
                <p className="font-body text-white/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
