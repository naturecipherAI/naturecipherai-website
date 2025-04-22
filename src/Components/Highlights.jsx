import HighlightItem from '../Sections/Home/Highlights/HighlightItem';
import droughtImage from '../assets/drought.jpg'; 

export default function Highlights() {
  return (
    <section className="bg-white">
      {/* Section Intro */}
      <div className="text-center px-4 pt-16 pb-8 max-w-4xl mx-auto">
        <p className="uppercase text-sm tracking-wider text-theme-green font-semibold">naturecipher ai</p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
          We build AI tools for the frontlines of conservation and climate resilience.
          At NatureCipher, we believe the intersection of people, climate, and biodiversity is where the most urgent—and hopeful—work happens.
          Our goal is to create accessible AI solutions that help East African communities protect ecosystems, prepare for climate shocks, and adapt for the future.
        </p>
      </div>

      {/* Highlight Block */}
      <HighlightItem
        image={droughtImage}
        overlayText="Droughts Are Hitting Harder and Lasting Longer"
        title="Drought prediction."
        paragraph1={`Recurrent droughts are devastating pastoralist communities, shrinking water access, and pushing ecosystems past tipping points.`}
        paragraph2={`We’re training models on multi-year satellite data to forecast vegetation health, monitor water sources, and map livestock vulnerability.`}
        paragraph3={`These tools support anticipatory action—helping governments, NGOs, and communities act early to reduce losses.`}
      />
    </section>
  );
}
