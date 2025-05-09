import HighlightItem from '../Sections/Home/Highlights/HighlightItem';
import droughtImage from '../assets/drought.jpg';
import floods from '../assets/floods.webp';
import communityVideo from '../assets/communityvideo.mp4';

const highlightsData = [
  {
    id: 1,
    side: 'left',
    media: droughtImage,
    isVideo: false,
    overlayText: 'Droughts Are Hitting Harder and Lasting Longer',
    title: 'Drought prediction.',
    paragraphs: [
      'Recurrent droughts are devastating pastoralist communities, shrinking water access, and pushing ecosystems past tipping points.',
      'We’re training models on multi-year satellite data to forecast vegetation health, monitor water sources, and map livestock vulnerability.',
      'These tools support anticipatory action—helping governments, NGOs, and communities act early to reduce losses.',
    ],
  },
  {
    id: 2,
    side: 'right',
    media: floods,
    isVideo: false,
    overlayText: 'Droughts Are Hitting Harder and Lasting Longer',
    title: 'Flood prediction and response.',
    paragraphs: [
      'Urban and rural floods are displacing families, damaging infrastructure, and threatening food systems across East Africa—often with little early warning.',
      'We’re building machine learning models using satellite rainfall data and land surface indicators to predict flood hotspots in real time.',
      'These insights will power early warning systems and local response plans to reduce risk before disaster strikes.',
    ],
  },
  {
    id: 3,
    side: 'left',
    media: communityVideo,
    isVideo: true,
    overlayText: 'Biodiversity Is Declining Faster Than Ever',
    title: 'Biodiversity and habitat monitoring.',
    paragraphs: [
      'East Africa’s ecosystems—from savannahs to mountain forests—are rich in life but under threat. Habitat loss, climate change, poaching, and land-use pressures are driving species extinction at an alarming rate. Traditional biodiversity monitoring is slow, costly, and fragmented—making it hard to respond in time.',
      'We use computer vision and bioacoustic models to automatically identify species from camera traps, drone footage, and field audio—enabling faster, real-time biodiversity insights.',
      'Through satellite imagery and deep learning, we track habitat degradation, forest fragmentation, and land-use changes, detecting subtle threats before they escalate.',
    ],
  },
];

export default function Highlights() {
  return (
    <section id='aboutus' className="bg-white">
      {/* Section Intro */}
      <div className="text-center px-4 pt-16 pb-8 max-w-4xl mx-auto">
        <p className="uppercase text-sm tracking-wider green font-semibold">naturecipher ai</p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
          We build AI tools for the frontlines of conservation and climate resilience.
          At NatureCipher, we believe the intersection of people, climate, and biodiversity is where the most urgent—and hopeful—work happens.
          Our goal is to create accessible AI solutions that help East African communities protect ecosystems, prepare for climate shocks, and adapt for the future.
        </p>
      </div>

      {/* Highlight Items */}
      {highlightsData.map(item => (
        <HighlightItem key={item.id} {...item} />
      ))}
    </section>
  );
}
