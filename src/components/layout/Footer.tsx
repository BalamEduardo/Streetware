export default function Footer() {
  return (
    <footer className="bg-brand text-white py-8 mt-20 border-t border-brand-accent">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body">&copy; 2025 Streetware. Todos los derechos reservados.</span>
        <div className="flex gap-4 text-brand-accent">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">WhatsApp</a>
          <a href="#" className="hover:underline">Correo</a>
        </div>
      </div>
    </footer>
  );
}