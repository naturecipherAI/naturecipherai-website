function Footer() {
  return (
    <footer className="bg-theme-green text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        
        {/* Left Side: Branding & Social */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <p className="text-sm font-light">naturecipher ai</p>
          <a
            href="#"
            aria-label="Instagram"
            className="inline-block border border-white rounded-full p-1 w-6 h-6 flex items-center justify-center hover:bg-white hover:text-theme-green transition"
          >
            {/* Instagram Icon  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 7.5h.01" />
            </svg>
          </a>
        </div>

        {/* Right Side: Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Products</h4>
            <ul className="space-y-1 text-sm text-white/90">
              <li><a href="#">Drought prediction</a></li>
              <li><a href="#">Flood response</a></li>
              <li><a href="#">Biodiversity & Habitat monitoring</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Services</h4>
            <ul className="space-y-1 text-sm text-white/90">
              <li><a href="#">FAQ's</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-white/90">
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
