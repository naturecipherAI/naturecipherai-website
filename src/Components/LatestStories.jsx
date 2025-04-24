import droughtImage from '../assets/drought.jpg';
import floods from '../assets/floods.webp';

function LatestStories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-theme-green mb-10">
        LATEST STORIES
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h3 className="text-theme-green text-lg font-semibold mb-2">TODAY’S PICK</h3>
            <div className="relative w-full aspect-video rounded overflow-hidden">
              <img
                src={droughtImage}
                alt="Today’s Pick"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                Nature Cipher redefining conservation.
              </div>
              <div className="absolute bottom-2 left-4 text-sm text-white/80">READ</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Story 1 */}
            <div className="bg-white shadow-sm rounded overflow-hidden flex flex-col">
              <img
                src={floods}
                alt="Story 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-grow">
                <p className="text-xs text-theme-green font-semibold mb-1">AI & Conservation Deep Dives</p>
                <h4 className="text-sm font-medium text-gray-800 leading-snug">
                  Can Machine Learning Predict the Next Drought?
                </h4>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white shadow-sm rounded overflow-hidden flex flex-col">
              <img
                src={droughtImage}
                alt="Story 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-grow">
                <p className="text-xs text-theme-green font-semibold mb-1">AI & Conservation Deep Dives</p>
                <h4 className="text-sm font-medium text-gray-800 leading-snug">
                  What Satellite Data Can Tell Us About Climate Resilience
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <img
                  src={floods}
                  alt={`Story ${i + 1}`}
                  className="w-28 h-28 object-cover rounded"
                />
                <div>
                  <p className="text-xs text-theme-green font-semibold mb-1">
                    {i === 2
                      ? 'Tech in the Wild'
                      : i === 3
                      ? 'Voices & Partnership'
                      : 'AI & Conservation Deep Dives'}
                  </p>
                  <h4 className="text-sm font-medium text-gray-800 leading-snug">
                    {i === 0
                      ? 'Can Machine Learning Predict the Next Drought?'
                      : i === 1
                      ? 'What Satellite Data Can Tell Us About Climate Resilience'
                      : i === 2
                      ? 'AI in the Wild: What Happens When Conservation Meets Code'
                      : 'Meet the People Using NatureCipher Tools on the Ground'}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* See more link */}
          <div>
            <a
              href="#"
              className="text-sm text-theme-green underline font-medium hover:text-theme-green/80"
            >
              SEE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestStories;
