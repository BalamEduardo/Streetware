import React from 'react';
import Link from 'next/link';

export default function DropsPage() {
  // Mock data para drops anteriores
  const previousDrops = [
    {
      id: 2,
      title: "Neon Dreams",
      subtitle: "Edición Limitada",
      description: "Colores vibrantes que brillan en la oscuridad de la ciudad. Una explosión de neones que captura la energía nocturna urbana.",
      image: "/images/drops/drop2.jpg",
      status: "Agotado",
      price: "Desde $1,299",
      pieces: 15,
      isNew: false,
      releaseDate: "10 Febrero 2025",
      collection: "Invierno 2025"
    },
    {
      id: 3,
      title: "Concrete Jungle",
      subtitle: "Drop Exclusivo",
      description: "Para los que dominan las calles. Resistencia y estilo urbano fusionados en piezas que desafían el tiempo y las tendencias.",
      image: "/images/drops/drop3.jpg",
      status: "Agotado",
      price: "Desde $1,099",
      pieces: 20,
      isNew: false,
      releaseDate: "25 Enero 2025",
      collection: "Invierno 2025"
    },
    {
      id: 4,
      title: "Midnight Rebels",
      subtitle: "Colección Nocturna",
      description: "Diseñado para los que nunca duermen. Streetwear que abraza la oscuridad y encuentra belleza en lo underground.",
      image: "/images/drops/drop4.jpg",
      status: "Agotado",
      price: "Desde $950",
      pieces: 30,
      isNew: false,
      releaseDate: "15 Diciembre 2024",
      collection: "Otoño 2024"
    },
    {
      id: 5,
      title: "Golden Hour",
      subtitle: "Edición Sunset",
      description: "Capturando la magia de los atardeceres urbanos. Tonos cálidos que celebran los momentos perfectos del día.",
      image: "/images/drops/drop5.jpg",
      status: "Agotado",
      price: "Desde $850",
      pieces: 25,
      isNew: false,
      releaseDate: "20 Noviembre 2024",
      collection: "Otoño 2024"
    },
    {
      id: 6,
      title: "Arctic Flow",
      subtitle: "Winter Series",
      description: "Cuando el frío no es enemigo del estilo. Piezas que mantienen el calor sin sacrificar la actitud streetwear.",
      image: "/images/drops/drop6.jpg",
      status: "Agotado",
      price: "Desde $1,150",
      pieces: 18,
      isNew: false,
      releaseDate: "5 Noviembre 2024",
      collection: "Otoño 2024"
    },
    {
      id: 7,
      title: "Digital Natives",
      subtitle: "Tech Collection",
      description: "Para la generación que vive entre pixels y realidad. Diseños que reflejan nuestra era digital sin perder esencia humana.",
      image: "/images/drops/drop7.jpg",
      status: "Agotado",
      price: "Desde $750",
      pieces: 35,
      isNew: false,
      releaseDate: "1 Octubre 2024",
      collection: "Otoño 2024"
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
    <div className="min-h-screen bg-brand pt-16">
      {/* Hero Section de la página */}
      <section className="
        py-12 sm:py-16 md:py-20
        px-4 sm:px-6 lg:px-8
        text-center
      ">
        <div className="max-w-4xl mx-auto">
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-display
            text-brand-accent
            tracking-wider
            mb-4 sm:mb-6
          ">
            DROPS ANTERIORES
          </h1>
          
          <p className="
            text-base sm:text-lg md:text-xl
            font-body
            text-white/90
            leading-relaxed
            mb-6 sm:mb-8
          ">
            Revive la historia de nuestras colecciones pasadas.
            <br className="hidden sm:block" />
            <span className="text-brand-yellow font-semibold">
              Cada drop cuenta una historia única e irrepetible.
            </span>
          </p>

          <Link
            href="/#drops"
            className="
              inline-flex items-center
              px-6 py-3
              border-2 border-brand-accent
              text-brand-accent
              text-sm sm:text-base
              font-bold
              uppercase
              tracking-wide
              rounded-lg
              hover:bg-brand-accent
              hover:text-white
              transition-all duration-300
              group
            "
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Ver Drop Actual
          </Link>
        </div>
      </section>

      {/* Grid de Drops Anteriores */}
      <section className="
        pb-12 sm:pb-16 md:pb-20
        px-4 sm:px-6 lg:px-8
      ">
        <div className="max-w-7xl mx-auto">
          <div className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8
          ">
            {previousDrops.map((drop) => (
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
                "
              >
                {/* Imagen del Drop */}
                <div className="
                  relative
                  aspect-[4/3]
                  bg-gradient-to-br from-brand-accent/20 to-brand-yellow/20
                  overflow-hidden
                ">
                  {/* Placeholder para imagen */}
                  <div className="
                    absolute inset-0
                    flex flex-col items-center justify-center
                    p-6 text-center
                  ">
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="
                      text-xs sm:text-sm
                      text-white/60
                      font-body
                    ">
                      Imagen del drop<br />
                      {drop.title}
                    </span>
                  </div>
                  
                  {/* Badge de estado */}
                  <div className="
                    absolute top-3 left-3
                    z-10
                  ">
                    <span className={`
                      px-3 py-1
                      text-xs sm:text-sm
                      font-bold
                      rounded-full
                      backdrop-blur-sm
                      ${getStatusStyles(drop.status)}
                    `}>
                      {drop.status}
                    </span>
                  </div>

                  {/* Badge de colección */}
                  <div className="
                    absolute top-3 right-3
                    z-10
                  ">
                    <span className="
                      px-2 py-1
                      text-xs
                      font-bold
                      bg-white/20
                      text-white
                      rounded-full
                      backdrop-blur-sm
                    ">
                      {drop.collection}
                    </span>
                  </div>
                </div>

                {/* Contenido del Card */}
                <div className="
                  p-5 sm:p-6
                ">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="
                      text-lg sm:text-xl
                      font-display
                      text-white
                      tracking-wide
                      mb-2
                    ">
                      {drop.title}
                    </h3>
                    <p className="
                      text-xs sm:text-sm
                      font-body
                      text-brand-yellow
                      uppercase
                      tracking-wider
                      mb-2
                    ">
                      {drop.subtitle}
                    </p>
                    <p className="
                      text-xs
                      text-white/60
                      font-body
                    ">
                      Lanzado: {drop.releaseDate}
                    </p>
                  </div>

                  {/* Descripción */}
                  <p className="
                    text-sm
                    font-body
                    text-white/80
                    leading-relaxed
                    mb-5
                  ">
                    {drop.description}
                  </p>

                  {/* Info y botón */}
                  <div className="
                    flex flex-col gap-3
                  ">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="
                          text-sm sm:text-base
                          font-bold
                          text-brand-accent
                          block
                        ">
                          {drop.price}
                        </span>
                        <span className="
                          text-xs
                          text-white/60
                          font-body
                        ">
                          {drop.pieces} piezas únicas
                        </span>
                      </div>
                    </div>

                    <button 
                      disabled
                      className="
                        w-full
                        px-4 py-2
                        bg-white/10
                        text-white/50
                        text-sm
                        font-bold
                        uppercase
                        tracking-wide
                        rounded-lg
                        cursor-not-allowed
                      "
                    >
                      Agotado
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
