import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled ? "bg-white green shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-11 py-6 flex items-center justify-between">
        <div className="text-lg font-bold tracking-wide">NatureCipher</div>

        <div className="hidden md:flex gap-6 text-sm uppercase tracking-wide font-medium">
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#stories" className="hover:opacity-70">Stories</a>
          <a href="#contacts" className="hover:opacity-70">Contacts</a>
        </div>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-green text-white px-4 py-6 space-y-4 text-sm uppercase tracking-wide font-medium shadow-lg transition-all duration-300 ease-in-out">
          <a href="#about" className="block hover:text-gray-300" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-gray-300" onClick={toggleMenu}>Projects</a>
          <a href="#stories" className="block hover:text-gray-300" onClick={toggleMenu}>Stories</a>
          <a href="#contacts" className="block hover:text-gray-300" onClick={toggleMenu}>Contacts</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
