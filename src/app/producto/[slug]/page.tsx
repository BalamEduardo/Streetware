'use client';

import React, { use } from 'react';
import { notFound, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SizeGuideModal from '../../../components/ui/SizeGuideModal';
import { useSizeGuideModal } from '../../../hooks/useSizeGuideModal';

// Datos de productos - en una app real vendría de una API/base de datos
const productsData = {
    'urban-rebellion-hoodie': {
        id: 'ur-hoodie-01',
        name: 'Urban Rebellion Hoodie',
        slug: 'urban-rebellion-hoodie',
        price: 1299,
        originalPrice: 1499,
        description: 'Hoodie premium con diseño gráfico exclusivo inspirado en el arte urbano. Confeccionado en algodón orgánico de alta calidad con acabados de lujo.',
        longDescription: 'Este hoodie representa la esencia de la rebeldía urbana con un diseño que combina arte callejero y moda premium. Cada pieza es única, con detalles bordados a mano y estampados que cuentan una historia. El algodón orgánico de 300gsm garantiza durabilidad y comodidad suprema.',
        category: 'Hoodies',
        collection: 'Urban Rebellion',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Negro', 'Gris Carbón', 'Verde Militar'],
        isNew: true,
        isAvailable: true,
        stock: 25,
        features: [
            'Algodón orgánico 100%',
            'Peso: 300gsm',
            'Bordados exclusivos',
            'Capucha ajustable',
            'Bolsillo canguro',
            'Edición limitada'
        ],
        careInstructions: [
            'Lavar a máquina agua fría',
            'No usar blanqueador',
            'Secar a baja temperatura',
            'Planchar del revés'
        ],
        images: [
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/UR1.jpg',
                alt: 'Urban Rebellion Hoodie - Vista frontal'
            },
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/UR2.jpg',
                alt: 'Urban Rebellion Hoodie - Vista lateral'
            },
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/U3.jpg',
                alt: 'Urban Rebellion Hoodie - Vista posterior'
            }
        ]
    },
    'urban-rebellion-tee': {
        id: 'ur-tshirt-01',
        name: 'Urban Rebellion Tee',
        slug: 'urban-rebellion-tee',
        price: 899,
        originalPrice: 1099,
        description: 'Camiseta de edición limitada con estampado artístico. Perfecta para expresar tu lado rebelde.',
        longDescription: 'Una camiseta que trasciende la moda convencional. El diseño gráfico exclusivo fue creado por artistas urbanos reconocidos, convirtiendo cada prenda en una obra de arte portable. El corte regular y el algodón premium ofrecen comodidad sin comprometer el estilo.',
        category: 'Camisetas',
        collection: 'Urban Rebellion',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Negro', 'Blanco', 'Gris'],
        isNew: true,
        isAvailable: true,
        stock: 45,
        features: [
            'Algodón ring-spun 100%',
            'Peso: 180gsm',
            'Estampado de alta calidad',
            'Corte regular',
            'Cuello reforzado',
            'Diseño exclusivo'
        ],
        careInstructions: [
            'Lavar a máquina agua fría',
            'No usar blanqueador',
            'Secar al aire libre',
            'Planchar a temperatura media'
        ],
        images: [
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/UR2.jpg',
                alt: 'Urban Rebellion Tee - Vista frontal'
            },
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/UR1.jpg',
                alt: 'Urban Rebellion Tee - Vista del diseño'
            },
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/U3.jpg',
                alt: 'Urban Rebellion Tee - Vista completa'
            }
        ]
    },
    'urban-rebellion-jacket': {
        id: 'ur-jacket-01',
        name: 'Urban Rebellion Jacket',
        slug: 'urban-rebellion-jacket',
        price: 1899,
        originalPrice: 2199,
        description: 'Chaqueta de mezclilla customizada con parches exclusivos. Diseño único que no pasará desapercibido.',
        longDescription: 'Una pieza statement que define tu estilo personal. Esta chaqueta combina la rebeldía del denim con elementos de alta costura. Los parches bordados son únicos en cada pieza, garantizando que tu chaqueta sea verdaderamente exclusiva.',
        category: 'Chaquetas',
        collection: 'Urban Rebellion',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Azul Denim', 'Negro Desgastado'],
        isNew: true,
        isAvailable: true,
        stock: 15,
        features: [
            'Denim premium 14oz',
            'Parches bordados únicos',
            'Forro interior suave',
            'Bolsillos múltiples',
            'Botones metálicos',
            'Corte oversized'
        ],
        careInstructions: [
            'Lavar en seco preferible',
            'Lavar a mano si es necesario',
            'No retorcer',
            'Secar colgado'
        ],
        images: [
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/U3.jpg',
                alt: 'Urban Rebellion Jacket - Vista completa'
            },
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/UR1.jpg',
                alt: 'Urban Rebellion Jacket - Detalle parches'
            },
            {
                src: '/images/drops/DropsProducts/UrbanRebelion/UR2.jpg',
                alt: 'Urban Rebellion Jacket - Vista posterior'
            }
        ]
    }
};

interface ProductDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { slug } = use(params);
    const searchParams = useSearchParams();
    const product = productsData[slug as keyof typeof productsData];

    // Hook para el modal de guía de tallas
    const { isOpen, title, openModal, closeModal } = useSizeGuideModal();

    // Detectar el origen de la navegación
    const getBackUrl = () => {
        const from = searchParams.get('from');
        
        switch (from) {
            case 'catalogo':
                return '/catalogo';
            case 'lookbook':
                return '/lookbook';
            default:
                return '/#productos';
        }
    };

    const getBackText = () => {
        const from = searchParams.get('from');
        
        switch (from) {
            case 'catalogo':
                return 'Volver al Catálogo';
            case 'lookbook':
                return 'Volver al Lookbook';
            default:
                return 'Volver';
        }
    };

    if (!product) {
        notFound();
    }

    const handleOpenSizeGuide = () => {
        openModal(`Guía de Tallas - ${product.category}`);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-brand">
            {/* Contenido principal con espacio para navbar */}
            <div className="pt-20">
                {/* Botón Volver */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                    <Link
                        href={getBackUrl()}
                        className="
                            inline-flex items-center gap-2
                            text-white/70 hover:text-white
                            transition-colors duration-200
                            text-sm font-medium
                        "
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {getBackText()}
                    </Link>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Galería de imágenes */}
                        <div className="space-y-4">
                            {/* Imagen principal */}
                            <div className="aspect-square relative bg-neutral-800/50 rounded-2xl overflow-hidden">
                                <Image
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    quality={90}
                                />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    {product.isNew && (
                                        <span className="
                    px-3 py-1
                    bg-red-500/90
                    text-white text-xs font-bold
                    rounded-full
                    backdrop-blur-sm
                    border border-white/20
                  ">
                                            NUEVO
                                        </span>
                                    )}

                                    {product.stock <= 5 && (
                                        <span className="
                    px-3 py-1
                    bg-orange-500/90
                    text-white text-xs font-bold
                    rounded-full
                    backdrop-blur-sm
                    border border-white/20
                  ">
                                            ÚLTIMAS {product.stock}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Imágenes secundarias */}
                            <div className="grid grid-cols-3 gap-2">
                                {product.images.slice(1).map((image, index) => (
                                    <div key={index} className="aspect-square relative bg-neutral-800/50 rounded-lg overflow-hidden">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover object-center hover:scale-105 transition-transform duration-300"
                                            quality={80}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Información del producto */}
                        <div className="space-y-6">
                            {/* Header del producto */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="
                  px-2 py-1
                  bg-brand-accent/20
                  text-brand-accent
                  text-xs font-semibold
                  rounded
                  border border-brand-accent/30
                ">
                                        {product.collection}
                                    </span>
                                    <span className="text-white/60 text-sm">{product.category}</span>
                                </div>

                                <h1 className="
                text-3xl lg:text-4xl
                font-display font-bold
                text-white
                mb-4
                leading-tight
              ">
                                    {product.name}
                                </h1>

                                {/* Precios */}
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="
                  text-3xl lg:text-4xl
                  font-bold
                  text-brand-yellow
                ">
                                        {formatPrice(product.price)}
                                    </span>
                                    {product.originalPrice && product.originalPrice > product.price && (
                                        <span className="
                    text-xl
                    text-white/50
                    line-through
                  ">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>

                                <p className="
                text-white/80
                text-lg
                leading-relaxed
              ">
                                    {product.description}
                                </p>
                            </div>

                            {/* Selector de talla */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-white font-semibold text-lg">
                                        Selecciona tu talla
                                    </h3>
                                    <button
                                        onClick={handleOpenSizeGuide}
                                        className="
                    text-brand-yellow hover:text-brand-accent
                    text-sm font-medium
                    underline underline-offset-2
                    transition-colors duration-200
                  "
                                    >
                                        Guía de Tallas
                                    </button>
                                </div>

                                <div className="grid grid-cols-5 gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            className="
                      py-3
                      border border-white/30
                      text-white
                      text-sm font-medium
                      rounded-lg
                      hover:bg-white/10
                      hover:border-white/50
                      transition-all duration-200
                      active:scale-95
                      focus:ring-2 focus:ring-brand-yellow/50
                    "
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color selector */}
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-3">
                                    Color
                                </h3>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            className="
                      px-4 py-2
                      border border-white/30
                      text-white
                      text-sm
                      rounded-lg
                      hover:bg-white/10
                      hover:border-white/50
                      transition-all duration-200
                      active:scale-95
                    "
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Botones de acción */}
                            <div className="space-y-3">
                                <button className="
                w-full
                py-4
                bg-brand-yellow
                text-brand
                font-bold
                text-lg
                uppercase
                tracking-wide
                rounded-lg
                hover:bg-brand-yellow/90
                transition-all duration-200
                active:scale-95
                shadow-lg hover:shadow-xl
              ">
                                    Añadir al Carrito
                                </button>

                                <button className="
                w-full
                py-4
                border-2 border-white/30
                text-white
                font-bold
                text-lg
                uppercase
                tracking-wide
                rounded-lg
                hover:bg-white/10
                hover:border-white/50
                transition-all duration-200
                active:scale-95
              ">
                                    Agregar a Favoritos
                                </button>
                            </div>

                            {/* Información adicional */}
                            <div className="
              bg-neutral-800/30
              border border-white/10
              rounded-xl p-6
              space-y-4
            ">
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Características</h4>
                                    <ul className="space-y-1">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="
                      text-white/70 text-sm
                      flex items-center gap-2
                    ">
                                                <div className="w-1 h-1 bg-brand-accent rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-white font-semibold mb-2">Cuidado de la prenda</h4>
                                    <ul className="space-y-1">
                                        {product.careInstructions.map((instruction, index) => (
                                            <li key={index} className="
                      text-white/70 text-sm
                      flex items-center gap-2
                    ">
                                                <div className="w-1 h-1 bg-brand-yellow rounded-full" />
                                                {instruction}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Stock disponible */}
                            <div className="
              text-center
              p-4
              bg-green-500/10
              border border-green-500/30
              rounded-lg
            ">
                                <p className="text-green-400 text-sm font-medium">
                                    ✓ {product.stock} unidades disponibles
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Descripción extendida */}
                    <div className="mt-16">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="
              text-2xl lg:text-3xl
              font-display font-bold
              text-white
              mb-6
              text-center
            ">
                                Detalles del Producto
                            </h2>

                            <div className="
              bg-neutral-800/30
              border border-white/10
              rounded-2xl p-8
            ">
                                <p className="
                text-white/80
                text-lg
                leading-relaxed
                text-center
              ">
                                    {product.longDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal de Guía de Tallas */}
                <SizeGuideModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    title={title}
                />
            </div>
        </div>)
}
