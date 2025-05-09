import ContactForm from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";
import Highlights from "./Components/Highlights";
import LatestStories from "./Components/LatestStories";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import './index.css'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Highlights />
      <LatestStories />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
