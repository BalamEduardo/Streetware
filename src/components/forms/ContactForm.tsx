"use client";

import React from 'react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <div>
      <h3 className="font-display text-2xl mb-6 text-brand-yellow">ENVÍANOS UN MENSAJE</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="font-body text-sm text-white/80 block mb-2">Nombre completo</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body focus:border-brand-accent focus:outline-none"
            placeholder="Tu nombre..."
            required
          />
        </div>
        <div>
          <label className="font-body text-sm text-white/80 block mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body focus:border-brand-accent focus:outline-none"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div>
          <label className="font-body text-sm text-white/80 block mb-2">Asunto</label>
          <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body focus:border-brand-accent focus:outline-none">
            <option>Consulta general</option>
            <option>Problema con pedido</option>
            <option>Colaboración</option>
            <option>Prensa/Media</option>
          </select>
        </div>
        <div>
          <label className="font-body text-sm text-white/80 block mb-2">Mensaje</label>
          <textarea 
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body focus:border-brand-accent focus:outline-none resize-none"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full px-8 py-3 bg-brand-accent text-white rounded-lg font-bold uppercase hover:bg-brand-yellow transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}
