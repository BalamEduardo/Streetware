import React from 'react';

export default function LookbookSection() {
  // Mock data para lookbook entries
  const lookbookItems = [
    {
      id: 1,
      title: "Urban Vibes",
      description: "Estilo urbano para el día a día",
      category: "Street Style",
      placeholder: "Imagen de outfit urbano completo"
    },
    {
      id: 2,
      title: "Night Mode",
      description: "Look nocturno con actitud",
      category: "Night Out",
      placeholder: "Imagen de look nocturno"
    },
    {
      id: 3,
      title: "Casual Drop",
      description: "Comodidad sin perder el estilo",
      category: "Casual",
      placeholder: "Imagen de outfit casual"
    },
    {
      id: 4,
      title: "Art Expression",
      description: "Cuando la ropa es tu lienzo",
      category: "Artistic",
      placeholder: "Imagen de look artístico"
    },
    {
      id: 5,
      title: "Minimalist Edge",
      description: "Menos es más, siempre con actitud",
      category: "Minimalist",
      placeholder: "Imagen de look minimalista"
    },
    {
      id: 6,
      title: "Color Burst",
      description: "Explosión de colores streetwear",
      category: "Colorful",
      placeholder: "Imagen de look colorido"
    }
  ];

  return (
    <section 
      id="lookbook" 
      className="
        py-12 sm:py-16 md:py-20 lg:py-24
        px-4 sm:px-6 lg:px-8
        bg-brand
        relative
      "
    >
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
            LOOKBOOK
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
            Inspiración streetwear para cada momento.
            <br className="hidden sm:block" />
            <span className="text-brand-yellow font-semibold">
              Descubre nuevas formas de expresar tu estilo.
            </span>
          </p>
        </div>

        {/* Grid de Lookbook Items */}
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4 sm:gap-6 md:gap-8
        ">
          {lookbookItems.map((item) => (
            <div
              key={item.id}
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
                cursor-pointer
              "
            >
              {/* Imagen placeholder */}
              <div className="
                relative
                aspect-[3/4]
                bg-gradient-to-br from-brand-accent/20 to-brand-yellow/20
                flex flex-col items-center justify-center
                p-6
                text-center
              ">
                {/* Icono placeholder */}
                <div className="
                  w-16 h-16 sm:w-20 sm:h-20
                  bg-white/10
                  rounded-full
                  flex items-center justify-center
                  mb-4
                ">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                
                <p className="
                  text-xs sm:text-sm
                  text-white/60
                  font-body
                  leading-relaxed
                ">
                  {item.placeholder}
                </p>

                {/* Category badge */}
                <div className="
                  absolute top-3 right-3
                  px-2 py-1
                  bg-brand-accent/90
                  text-white
                  text-xs
                  font-bold
                  rounded-full
                  uppercase
                  tracking-wide
                ">
                  {item.category}
                </div>
              </div>

              {/* Contenido del card */}
              <div className="
                p-4 sm:p-5 md:p-6
              ">
                <h3 className="
                  text-lg sm:text-xl
                  font-display
                  text-white
                  tracking-wide
                  mb-2
                ">
                  {item.title}
                </h3>
                
                <p className="
                  text-sm sm:text-base
                  font-body
                  text-white/80
                  leading-relaxed
                ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver más */}
        <div className="
          text-center
          mt-8 sm:mt-12 md:mt-16
        ">
          <button className="
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
          ">
            Ver Más Inspiración
          </button>
        </div>
      </div>
    </section>
  );
}
