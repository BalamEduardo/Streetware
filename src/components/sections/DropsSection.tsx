import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageSlider from '../ui/ImageSlider';

export default function DropsSection() {
  // Drop actual - solo el más reciente
  const currentDrop = {
    id: 1,
    title: "Urban Rebellion",
    subtitle: "Colección Primavera 2025",
    description: "Grafiti meets streetwear. Diseños únicos inspirados en el arte urbano de la ciudad. Esta colección captura la esencia de la rebeldía creativa y la transforma en piezas que cuentan historias.",
    status: "Disponible",
    price: "Desde $899",
    pieces: 25,
    isNew: true,
    releaseDate: "15 Marzo 2025",
    featured: true,
    images: [
      {
        id: "ur1",
        src: "/images/drops/DropsProducts/UrbanRebelion/UR1.jpg",
        alt: "Urban Rebellion - Camiseta estampada con arte urbano"
      },
      {
        id: "ur2", 
        src: "/images/drops/DropsProducts/UrbanRebelion/UR2.jpg",
        alt: "Urban Rebellion - Hoodie con diseño gráfico exclusivo"
      },
      {
        id: "u3",
        src: "/images/drops/DropsProducts/UrbanRebelion/U3.jpg",
        alt: "Urban Rebellion - Conjunto completo streetwear"
      }
    ]
  };

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
      <div
        className="
          absolute inset-0
          -z-10
          w-full h-full
          pointer-events-none
          select-none
          overflow-hidden
        "
        aria-hidden="true"
      >
        <Image
          src="/images/drops/Background-Drops.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          draggable={false}
          priority={false}
          quality={60}
        />
      </div>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la sección */}
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
            NUEVO DROP
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
            La colección más reciente está aquí.
            <br className="hidden sm:block" />
            <span className="text-brand-yellow font-semibold">
              Edición limitada, actitud ilimitada.
            </span>
          </p>
        </div>

        {/* Featured Drop Card - Diseño profesional */}
        <div className="
          max-w-5xl mx-auto
          mb-8 sm:mb-12 md:mb-16
        ">
          <div className="
            group
            bg-neutral-900/95
            backdrop-blur-lg
            border border-white/10
            rounded-2xl
            overflow-hidden
            shadow-2xl
            hover:bg-neutral-900/98
            hover:border-white/20
            hover:shadow-3xl
            transition-all duration-500
            hover:scale-[1.005]
          ">
            {/* Layout responsive: mobile stack, desktop side-by-side */}
            <div className="
              flex flex-col
              lg:flex-row
            ">
              {/* Slider de Imágenes */}
              <div className="
                relative
                w-full lg:w-3/5
                min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]
                bg-gradient-to-br from-brand-accent/10 to-brand-yellow/10
                overflow-hidden
              ">
                <ImageSlider 
                  images={currentDrop.images}
                  aspectRatio="aspect-[4/3] lg:aspect-[4/5]"
                  className="w-full h-full"
                />
                
                {/* Badges superpuestos */}
                <div className="
                  absolute top-6 left-6
                  z-30
                  flex flex-col gap-3
                ">
                  <span className={`
                    inline-block
                    px-4 py-2
                    text-sm font-bold
                    rounded-full
                    backdrop-blur-md
                    border border-white/20
                    shadow-lg
                    ${getStatusStyles(currentDrop.status)}
                  `}>
                    {currentDrop.status}
                  </span>
                  
                  {currentDrop.isNew && (
                    <span className="
                      inline-block
                      px-4 py-2
                      text-sm font-bold
                      bg-brand-yellow/95
                      text-brand
                      rounded-full
                      backdrop-blur-md
                      border border-brand-yellow/30
                      shadow-lg
                    ">
                      NUEVO
                    </span>
                  )}
                </div>

                {/* Overlay de información de imagen */}
                <div className="
                  absolute bottom-6 right-6
                  z-30
                  bg-black/50
                  backdrop-blur-sm
                  px-3 py-2
                  rounded-lg
                  text-white/90
                  text-xs
                  font-body
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-300
                ">
                  {currentDrop.images.length} imágenes
                </div>
              </div>

              {/* Contenido del Drop */}
              <div className="
                w-full lg:w-2/5
                p-6 sm:p-8 lg:p-10
                flex flex-col justify-center
                bg-neutral-900/50
                backdrop-blur-sm
              ">
                {/* Header del Drop */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="
                    text-2xl sm:text-3xl lg:text-4xl
                    font-display
                    text-white
                    tracking-wide
                    mb-2 sm:mb-3
                    leading-tight
                  ">
                    {currentDrop.title}
                  </h3>
                  
                  <p className="
                    text-sm sm:text-base
                    font-body
                    text-brand-yellow
                    uppercase
                    tracking-wider
                    mb-3
                    font-semibold
                  ">
                    {currentDrop.subtitle}
                  </p>
                  
                  <p className="
                    text-xs sm:text-sm
                    text-white/70
                    font-body
                    flex items-center gap-2
                  ">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Lanzamiento: {currentDrop.releaseDate}
                  </p>
                </div>

                {/* Descripción */}
                <p className="
                  text-sm sm:text-base lg:text-lg
                  font-body
                  text-white/90
                  leading-relaxed
                  mb-4 sm:mb-6
                  line-clamp-3
                ">
                  {currentDrop.description}
                </p>

                {/* Info del drop */}
                <div className="
                  flex flex-col sm:flex-row
                  gap-4 sm:gap-6
                  mb-6 sm:mb-8
                  p-4
                  bg-white/5
                  rounded-xl
                  border border-white/10
                ">
                  <div className="flex-1">
                    <span className="
                      text-2xl sm:text-3xl
                      font-bold
                      text-brand-accent
                      block
                      mb-1
                    ">
                      {currentDrop.price}
                    </span>
                    <span className="
                      text-xs sm:text-sm
                      text-white/70
                      font-body
                      uppercase
                      tracking-wide
                    ">
                      Precio inicial
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <span className="
                      text-2xl sm:text-3xl
                      font-bold
                      text-brand-yellow
                      block
                      mb-1
                    ">
                      {currentDrop.pieces}
                    </span>
                    <span className="
                      text-xs sm:text-sm
                      text-white/70
                      font-body
                      uppercase
                      tracking-wide
                    ">
                      Piezas únicas
                    </span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="
                  flex flex-col sm:flex-row
                  gap-4
                  mt-auto
                ">
                  <Link
                    href={`/drops/${currentDrop.id}`}
                    className="
                      flex-1
                      px-8 py-4
                      bg-brand-accent
                      text-white
                      text-sm sm:text-base
                      font-bold
                      uppercase
                      tracking-wide
                      rounded-xl
                      text-center
                      hover:bg-brand-yellow
                      hover:text-brand
                      transition-all duration-300
                      active:scale-95
                      shadow-lg
                      hover:shadow-xl
                    "
                  >
                    Ver Colección
                  </Link>
                  
                  <button className="
                    flex-1
                    px-8 py-4
                    border-2 border-white/30
                    text-white
                    text-sm sm:text-base
                    font-bold
                    uppercase
                    tracking-wide
                    rounded-xl
                    hover:bg-white/10
                    hover:border-white/50
                    transition-all duration-300
                    active:scale-95
                    backdrop-blur-sm
                  ">
                    Agregar a Favoritos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA para drops anteriores */}
        <div className="
          text-center
        ">
          <Link
            href="/drops"
            className="
              inline-flex items-center
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
              group
            "
          >
            <span className="mr-2">Drops Anteriores</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
