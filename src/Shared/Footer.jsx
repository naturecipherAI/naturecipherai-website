import footerLogo from '../assets/naturecipher-header-logo.png';

function Footer() {
  return (
    <footer className="bg-green bg-theme-green text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        
        {/* Left Side: Branding & Social */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <img
            src={footerLogo}
            alt="NatureCipher Logo"
            className="w-32 h-auto object-contain"
          />

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/naturecipherai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-xl"
          >
            <i className="fa fa-instagram"></i>
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
              <li><a href="#aboutus">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#contactus">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
