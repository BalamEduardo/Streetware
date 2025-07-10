import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import { ContactInfo } from '@/types';

export default function ContactSection() {
  const contactInfo: ContactInfo = {
    address: "Lorem ipsum street 123\nCiudad, País 12345",
    emails: ["info@streetware.com", "support@streetware.com"],
    phone: "+1 (555) 123-4567",
    schedule: "Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 16:00\nDomingos: Cerrado"
  };

  const socialNetworks = [
    { code: 'IG', name: 'Instagram' },
    { code: 'TW', name: 'Twitter' },
    { code: 'FB', name: 'Facebook' },
    { code: 'TK', name: 'TikTok' }
  ];

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
          CONTACTO
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <ContactForm />

          {/* Información de contacto */}
          <div>
            <h3 className="font-display text-2xl mb-6 text-brand-yellow">INFORMACIÓN</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-body font-bold mb-2">📍 Dirección</h4>
                <p className="font-body text-white/80 whitespace-pre-line">
                  {contactInfo.address}
                </p>
              </div>
              
              <div>
                <h4 className="font-body font-bold mb-2">📧 Email</h4>
                <div className="font-body text-white/80">
                  {contactInfo.emails.map((email, index) => (
                    <div key={index}>{email}</div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-body font-bold mb-2">📱 Teléfono</h4>
                <p className="font-body text-white/80">
                  {contactInfo.phone}
                </p>
              </div>

              <div>
                <h4 className="font-body font-bold mb-2">🕒 Horarios de atención</h4>
                <p className="font-body text-white/80 whitespace-pre-line">
                  {contactInfo.schedule}
                </p>
              </div>

              {/* Redes sociales */}
              <div>
                <h4 className="font-body font-bold mb-4">🌐 Síguenos</h4>
                <div className="flex gap-4">
                  {socialNetworks.map((social) => (
                    <div 
                      key={social.code}
                      className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-yellow transition"
                      title={social.name}
                    >
                      <span className="text-sm">{social.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
