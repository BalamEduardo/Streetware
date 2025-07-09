export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand text-white shadow">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-2xl tracking-wide">Streetware</span>
        <ul className="flex gap-8 font-body text-base">
          <li><a href="/" className="hover:text-brand-accent">Home</a></li>
          <li><a href="/productos" className="hover:text-brand-accent">Productos</a></li>
          <li><a href="/tallas" className="hover:text-brand-accent">Tallas</a></li>
          <li><a href="/nosotros" className="hover:text-brand-accent">Nosotros</a></li>
          <li><a href="/contacto" className="hover:text-brand-accent">Contacto</a></li>
          <li><a href="/carrito" className="hover:text-brand-yellow">Carrito</a></li>
        </ul>
      </div>
    </nav>
  );
}