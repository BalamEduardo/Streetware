import React from 'react';
import Link from 'next/link';

export default function DropsSection() {
  // Mock data para los drops - reemplazar con datos reales
  const drops = [
    {
      id: 1,
      title: "Urban Rebellion",
      subtitle: "Colección Primavera 2025",
      description: "Grafiti meets streetwear. Diseños únicos inspirados en el arte urbano.",
      image: "/images/drops/drop1.jpg",
      status: "Disponible",
      price: "Desde $899",
      pieces: 25,
      isNew: true
    },
    {
      id: 2,
      title: "Neon Dreams",
      subtitle: "Edición Limitada",
      description: "Colores vibrantes que brillan en la oscuridad de la ciudad.",
      image: "/images/drops/drop2.jpg",
      status: "Próximamente",
      price: "Desde $1,299",
      pieces: 15,
      isNew: false
    },
    {
      id: 3,
      title: "Concrete Jungle",
      subtitle: "Drop Exclusivo",
      description: "Para los que dominan las calles. Resistencia y estilo urbano.",
      image: "/images/drops/drop3.jpg",
      status: "Agotado",
      price: "Desde $1,099",
      pieces: 20,
      isNew: false
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Disponible':
        return 'bg-green-500/90 text-white';
      case 'Próximamente':
        return 'bg-brand-yellow/90 text-brand';
      case 'Agotado':
        return 'bg-red-500/90 text-white';
      default:
        return 'bg-gray-500/90 text-white';
    }
  };

  return (
    <section 
      id="drops" 
      className="
        py-12 sm:py-16 md:py-20 lg:py-24
        px-4 sm:px-6 lg:px-8
        bg-brand
        relative
      "
    >
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la sección - Mobile First */}
        <div className="
          text-center 
          mb-8 sm:mb-12 md:mb-16
        ">
          <h2 className="
            text-2xl leading-tight
            sm:text-3xl sm:leading-tight
            md:text-4xl md:leading-tight
            lg:text-5xl lg:leading-tight
            font-display
            text-brand-accent
            tracking-wider
            mb-3 sm:mb-4 md:mb-6
          ">
            LATEST DROPS
          </h2>
          
          <p className="
            text-sm leading-relaxed
            sm:text-base sm:leading-relaxed
            md:text-lg md:leading-relaxed
            lg:text-xl lg:leading-relaxed
            font-body
            text-white/90
            max-w-xs sm:max-w-sm md:max-w-2xl
            mx-auto
          ">
            Colecciones únicas que definen el streetwear.
            <br className="hidden sm:block" />
            <span className="text-brand-yellow font-semibold">
              Edición limitada, actitud ilimitada.
            </span>
          </p>
        </div>

        {/* Grid de Drops - Mobile First */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6 md:gap-8
        ">
          {drops.map((drop) => (
            <div
              key={drop.id}
              className="
                group
                bg-white/5
                backdrop-blur-sm
                border border-white/10
                rounded-xl sm:rounded-2xl
                overflow-hidden
                hover:bg-white/10
                hover:border-white/20
                transition-all duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              {/* Imagen del Drop */}
              <div className="
                relative
                aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3]
                bg-gray-800
                overflow-hidden
              ">
                {/* Placeholder para imagen */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-br from-brand-accent/20 to-brand-yellow/20
                  flex items-center justify-center
                ">
                  <span className="
                    text-xs sm:text-sm
                    text-white/60
                    font-body
                  ">
                    {drop.title}
                  </span>
                </div>
                
                {/* Badge de estado */}
                <div className="
                  absolute top-2 sm:top-3 left-2 sm:left-3
                  z-10
                ">
                  <span className={`
                    px-2 sm:px-3 py-1
                    text-xs sm:text-sm
                    font-bold
                    rounded-full
                    backdrop-blur-sm
                    ${getStatusStyles(drop.status)}
                  `}>
                    {drop.status}
                  </span>
                </div>

                {/* Badge "New" */}
                {drop.isNew && (
                  <div className="
                    absolute top-2 sm:top-3 right-2 sm:right-3
                    z-10
                  ">
                    <span className="
                      px-2 sm:px-3 py-1
                      text-xs sm:text-sm
                      font-bold
                      bg-brand-yellow
                      text-brand
                      rounded-full
                    ">
                      NEW
                    </span>
                  </div>
                )}
              </div>

              {/* Contenido del Card */}
              <div className="
                p-4 sm:p-5 md:p-6
              ">
                {/* Título y subtítulo */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="
                    text-lg sm:text-xl md:text-2xl
                    font-display
                    text-white
                    tracking-wide
                    mb-1 sm:mb-2
                  ">
                    {drop.title}
                  </h3>
                  <p className="
                    text-xs sm:text-sm
                    font-body
                    text-brand-yellow
                    uppercase
                    tracking-wider
                  ">
                    {drop.subtitle}
                  </p>
                </div>

                {/* Descripción */}
                <p className="
                  text-sm sm:text-base
                  font-body
                  text-white/80
                  leading-relaxed
                  mb-4 sm:mb-5
                ">
                  {drop.description}
                </p>

                {/* Info y botón */}
                <div className="
                  flex flex-col gap-3
                  sm:flex-row sm:items-center sm:justify-between
                ">
                  <div className="flex flex-col gap-1">
                    <span className="
                      text-sm sm:text-base
                      font-bold
                      text-brand-accent
                    ">
                      {drop.price}
                    </span>
                    <span className="
                      text-xs sm:text-sm
                      text-white/60
                      font-body
                    ">
                      {drop.pieces} piezas únicas
                    </span>
                  </div>

                  <Link
                    href={`/drops/${drop.id}`}
                    className="
                      w-full sm:w-auto
                      px-4 py-2
                      sm:px-6 sm:py-3
                      bg-brand-accent
                      text-white
                      text-sm sm:text-base
                      font-bold
                      uppercase
                      tracking-wide
                      rounded-lg
                      text-center
                      hover:bg-brand-yellow
                      transition-all duration-300
                      active:scale-95
                    "
                  >
                    Ver Drop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver más drops */}
        <div className="
          text-center
          mt-8 sm:mt-12 md:mt-16
        ">
          <Link
            href="/drops"
            className="
              inline-flex
              px-6 py-3
              sm:px-8 sm:py-4
              md:px-10 md:py-4
              border-2 border-brand-accent
              text-brand-accent
              text-sm sm:text-base md:text-lg
              font-bold
              uppercase
              tracking-wide
              rounded-lg
              hover:bg-brand-accent
              hover:text-white
              transition-all duration-300
              active:scale-95
            "
          >
            Ver Todos Los Drops
          </Link>
        </div>
      </div>
    </section>
  );
}
