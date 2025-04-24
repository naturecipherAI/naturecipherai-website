import HeroSection from "./Components/HeroSection";
import Highlights from "./Components/Highlights";
import LatestStories from "./Components/LatestStories";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Highlights />
      <LatestStories />
    </div>
  );
}

export default App;
