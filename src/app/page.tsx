
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* SECCIÓN HERO/INICIO */}
      <section id="inicio" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-display mb-6 text-brand-accent tracking-widest drop-shadow">
          STREETWARE<br />
          <span className="text-brand-yellow">DROP</span> SEASON
        </h1>
        <p className="font-body text-lg md:text-2xl max-w-2xl text-white/90 mb-8">
          Ropa y arte de edición limitada.<br />
          Cada drop cuenta una historia.<br />
          <span className="text-brand-yellow">¡Colecciones exclusivas, nunca re-stock!</span>
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="#productos"
            className="px-8 py-3 bg-brand-accent text-white rounded-lg font-bold uppercase hover:bg-brand-yellow transition"
          >
            Ver colección
          </Link>
          <Link
            href="#nosotros"
            className="px-8 py-3 border-2 border-brand-accent text-brand-accent rounded-lg font-bold uppercase hover:bg-brand-accent hover:text-white transition"
          >
            Saber más
          </Link>
        </div>
      </section>

      {/* SECCIÓN DROPS */}
      <section id="drops" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
            PRÓXIMOS DROPS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Drop Card 1 */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 font-body text-lg">Drop Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 text-brand-yellow">URBAN REBELLION</h3>
                <p className="font-body text-white/80 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
                <span className="font-body text-sm text-brand-accent">Lanzamiento: 15 Julio 2025</span>
              </div>
            </div>

            {/* Drop Card 2 */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 font-body text-lg">Drop Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 text-brand-yellow">NIGHT VIBES</h3>
                <p className="font-body text-white/80 mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </p>
                <span className="font-body text-sm text-brand-accent">Lanzamiento: 22 Julio 2025</span>
              </div>
            </div>

            {/* Drop Card 3 */}
            <div className="bg-white/10 rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-400 flex items-center justify-center">
                <span className="text-gray-600 font-body text-lg">Drop Image Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-2 text-brand-yellow">RETRO FUTURE</h3>
                <p className="font-body text-white/80 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
                <span className="font-body text-sm text-brand-accent">Lanzamiento: 29 Julio 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PRODUCTOS */}
      <section id="productos" className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
            CATÁLOGO
          </h2>
          
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-brand-accent text-white rounded-full font-body hover:bg-brand-yellow transition">
              Todos
            </button>
            <button className="px-6 py-2 border border-brand-accent text-brand-accent rounded-full font-body hover:bg-brand-accent hover:text-white transition">
              Camisetas
            </button>
            <button className="px-6 py-2 border border-brand-accent text-brand-accent rounded-full font-body hover:bg-brand-accent hover:text-white transition">
              Hoodies
            </button>
            <button className="px-6 py-2 border border-brand-accent text-brand-accent rounded-full font-body hover:bg-brand-accent hover:text-white transition">
              Accesorios
            </button>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white/10 rounded-lg overflow-hidden group cursor-pointer">
                <div className="h-80 bg-gray-400 flex items-center justify-center group-hover:bg-gray-300 transition">
                  <span className="text-gray-600 font-body">Product Image</span>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg mb-1 text-white">PRODUCTO {index + 1}</h3>
                  <p className="font-body text-sm text-white/70 mb-2">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-brand-yellow font-bold">$299.00</span>
                    <span className="font-body text-xs text-white/60">Stock limitado</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN TALLAS */}
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
                    <tr className="border-b border-white/20">
                      <td className="px-4 py-3">XS</td>
                      <td className="px-4 py-3">45-48</td>
                      <td className="px-4 py-3">65-68</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="px-4 py-3">S</td>
                      <td className="px-4 py-3">48-52</td>
                      <td className="px-4 py-3">68-72</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="px-4 py-3">M</td>
                      <td className="px-4 py-3">52-56</td>
                      <td className="px-4 py-3">72-76</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="px-4 py-3">L</td>
                      <td className="px-4 py-3">56-60</td>
                      <td className="px-4 py-3">76-80</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">XL</td>
                      <td className="px-4 py-3">60-64</td>
                      <td className="px-4 py-3">80-84</td>
                    </tr>
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

      {/* SECCIÓN NOSOTROS */}
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
                  <div className="text-3xl font-display text-brand-yellow mb-2">2019</div>
                  <div className="font-body text-sm text-white/70">Fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-brand-yellow mb-2">50+</div>
                  <div className="font-body text-sm text-white/70">Drops lanzados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-brand-yellow mb-2">10K+</div>
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
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-display text-xl mb-3">CREATIVIDAD</h4>
                <p className="font-body text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-display text-xl mb-3">CALIDAD</h4>
                <p className="font-body text-white/80">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-display text-xl mb-3">EXCLUSIVIDAD</h4>
                <p className="font-body text-white/80">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display text-center mb-12 text-brand-accent tracking-wide">
            CONTACTO
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h3 className="font-display text-2xl mb-6 text-brand-yellow">ENVÍANOS UN MENSAJE</h3>
              <form className="space-y-6">
                <div>
                  <label className="font-body text-sm text-white/80 block mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body focus:border-brand-accent focus:outline-none"
                    placeholder="Tu nombre..."
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-white/80 block mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg font-body focus:border-brand-accent focus:outline-none"
                    placeholder="tu@email.com"
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

            {/* Información de contacto */}
            <div>
              <h3 className="font-display text-2xl mb-6 text-brand-yellow">INFORMACIÓN</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-body font-bold mb-2">📍 Dirección</h4>
                  <p className="font-body text-white/80">
                    Lorem ipsum street 123<br />
                    Ciudad, País 12345
                  </p>
                </div>
                
                <div>
                  <h4 className="font-body font-bold mb-2">📧 Email</h4>
                  <p className="font-body text-white/80">
                    info@streetware.com<br />
                    support@streetware.com
                  </p>
                </div>
                
                <div>
                  <h4 className="font-body font-bold mb-2">📱 Teléfono</h4>
                  <p className="font-body text-white/80">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-bold mb-2">🕒 Horarios de atención</h4>
                  <p className="font-body text-white/80">
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Sábados: 10:00 - 16:00<br />
                    Domingos: Cerrado
                  </p>
                </div>

                {/* Redes sociales */}
                <div>
                  <h4 className="font-body font-bold mb-4">🌐 Síguenos</h4>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-yellow transition">
                      <span className="text-sm">IG</span>
                    </div>
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-yellow transition">
                      <span className="text-sm">TW</span>
                    </div>
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-yellow transition">
                      <span className="text-sm">FB</span>
                    </div>
                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-yellow transition">
                      <span className="text-sm">TK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CARRITO/RESUMEN */}
      <section id="carrito" className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-12 text-brand-accent tracking-wide">
            TU EXPERIENCIA STREETWARE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl">1</span>
              </div>
              <h3 className="font-display text-xl mb-3 text-brand-yellow">EXPLORA</h3>
              <p className="font-body text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descubre nuestras colecciones únicas.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl">2</span>
              </div>
              <h3 className="font-display text-xl mb-3 text-brand-yellow">SELECCIONA</h3>
              <p className="font-body text-white/80">
                Sed do eiusmod tempor incididunt. Elige tu talla perfecta y añade al carrito.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-2xl">3</span>
              </div>
              <h3 className="font-display text-xl mb-3 text-brand-yellow">DISFRUTA</h3>
              <p className="font-body text-white/80">
                Ut labore et dolore magna aliqua. Recibe tu pedido y únete a la comunidad.
              </p>
            </div>
          </div>

          {/* Carrito simulado */}
          <div className="bg-white/10 rounded-lg p-8 mb-8">
            <h3 className="font-display text-2xl mb-6 text-brand-yellow">PREVIEW DEL CARRITO</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="font-body">Camiseta Urban Rebellion (M)</span>
                <span className="font-body text-brand-yellow">$299.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/20">
                <span className="font-body">Hoodie Night Vibes (L)</span>
                <span className="font-body text-brand-yellow">$599.00</span>
              </div>
              <div className="flex justify-between items-center py-3 text-lg font-bold">
                <span className="font-body">Total:</span>
                <span className="font-body text-brand-yellow">$898.00</span>
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
    </>
  );
}
