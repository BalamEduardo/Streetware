import React from 'react';
import Link from 'next/link';
import { ProcessStep, CartItem } from '@/types';

export default function CartSection() {
  const processSteps: ProcessStep[] = [
    {
      step: 1,
      title: 'EXPLORA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descubre nuestras colecciones únicas.'
    },
    {
      step: 2,
      title: 'SELECCIONA',
      description: 'Sed do eiusmod tempor incididunt. Elige tu talla perfecta y añade al carrito.'
    },
    {
      step: 3,
      title: 'DISFRUTA',
      description: 'Ut labore et dolore magna aliqua. Recibe tu pedido y únete a la comunidad.'
    }
  ];

  const cartItems: CartItem[] = [
    {
      productName: 'Camiseta Urban Rebellion',
      size: 'M',
      price: 299
    },
    {
      productName: 'Hoodie Night Vibes',
      size: 'L',
      price: 599
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section id="carrito" className="py-20 px-4 bg-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display mb-12 text-brand-accent tracking-wide">
          TU EXPERIENCIA STREETWARE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl">{step.step}</span>
              </div>
              <h3 className="font-display text-xl mb-3 text-brand-yellow">{step.title}</h3>
              <p className="font-body text-white/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carrito simulado */}
        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h3 className="font-display text-2xl mb-6 text-brand-yellow">PREVIEW DEL CARRITO</h3>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="font-body">{item.productName} ({item.size})</span>
                <span className="font-body text-brand-yellow">${item.price}.00</span>
              </div>
            ))}
            <div className="flex justify-between items-center py-3 text-lg font-bold">
              <span className="font-body">Total:</span>
              <span className="font-body text-brand-yellow">${total}.00</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="#productos"
            className="px-8 py-3 border-2 border-brand-accent text-brand-accent rounded-lg font-bold uppercase hover:bg-brand-accent hover:text-white transition"
          >
            Seguir comprando
          </Link>
          <button className="px-8 py-3 bg-brand-accent text-white rounded-lg font-bold uppercase hover:bg-brand-yellow transition">
            Proceder al checkout
          </button>
        </div>
      </div>
    </section>
  );
}
