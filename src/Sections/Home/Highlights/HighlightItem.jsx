function HighlightItem({ side, media, isVideo, overlayText, title, paragraphs, listItems }) {
  const isLeft = side === 'left';

  const mediaContent = isVideo ? (
    <video
      className="w-full h-full object-cover rounded"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={media} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={media} alt="Highlight" className="w-full h-full object-cover rounded" />
  );

  const renderOverlayText = () =>
    overlayText.split(' ').map((word, i) => {
      const highlightWords = ['Hitting', 'Longer', 'Declining', 'Than', 'Leading'];
      const isHighlight = highlightWords.includes(word);
      return (
        <span key={i} className={isHighlight ? 'text-theme-green' : ''}>
          {word}{' '}
        </span>
      );
    });

  return (
    <div
      className={`flex flex-col ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-6 items-center md:items-start w-full max-w-6xl mx-auto px-4 py-10`}
    >
      {/* Media Section */}
      <div className="relative w-full md:w-1/2 h-72 md:h-96">
        {mediaContent}
        <div className="absolute inset-0 bg-black/30 rounded" />
        <div className="absolute top-12 left-4 text-white text-xl sm:text-2xl font-semibold leading-snug">
          {renderOverlayText()}
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl md:text-2xl font-bold text-theme-green mb-3">{title}</h3>
        {paragraphs?.map((para, idx) => (
          <p key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base py-2">
            {para}
          </p>
        ))}

        {listItems && (
          <ul className="list-disc pl-5 mt-3 space-y-2 text-sm sm:text-base text-gray-700">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HighlightItem;
