export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-end gap-6 text-sm uppercase tracking-wide font-medium">
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#projects" className="hover:text-gray-300">Projects</a>
        <a href="#stories" className="hover:text-gray-300">Stories</a>
        <a href="#contacts" className="hover:text-gray-300">Contacts</a>
      </div>
    </nav>
  );
}
