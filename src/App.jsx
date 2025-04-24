import HeroSection from "./Components/HeroSection";
import Highlights from "./Components/Highlights";
import LatestStories from "./Components/LatestStories";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Highlights />
      <LatestStories />
      <Footer />
    </div>
  );
}

export default App;
