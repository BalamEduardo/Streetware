export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand text-white shadow">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-2xl tracking-wide">Streetware</span>
        <ul className="flex gap-8 font-body text-base">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#drops">Drops</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#tallas">Tallas</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#carrito">Carrito</a></li>
        </ul>
      </div>
    </nav>
  );
}