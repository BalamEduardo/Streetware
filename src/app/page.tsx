import Image from "next/image";

export default function () {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
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
        <a
          href="/productos"
          className="px-8 py-3 bg-brand-accent text-white rounded-lg font-bold uppercase hover:bg-brand-yellow transition"
        >
          Ver colección
        </a>
        <a
          href="/nosotros"
          className="px-8 py-3 border-2 border-brand-accent text-brand-accent rounded-lg font-bold uppercase hover:bg-brand-accent hover:text-white transition"
        >
          Saber más
        </a>
      </div>
    </section>
  );
  
}
