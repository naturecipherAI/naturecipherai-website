function HighlightItem({ image, title, paragraph1, paragraph2, paragraph3, overlayText }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start w-full max-w-6xl mx-auto px-4 py-10">
      {/* Image with overlay */}
      <div className="relative w-full md:w-1/2 h-72 md:h-96">
        <img
          src={image}
          alt="Highlight"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute inset-0 bg-black/30 rounded"></div>
        <div className="absolute top-12 left-4 text-white text-xl sm:text-2xl font-semibold leading-snug">
          {overlayText.split(' ').map((word, i) =>
            word === 'Hitting' || word === 'Longer' ? (
              <span key={i} className="text-theme-green">{word} </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl md:text-2xl font-bold text-theme-green mb-3">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base py-3">
          {paragraph1}
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base py-3">
          {paragraph2}
        </p>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base py-3">
          {paragraph3}
        </p>
      </div>
    </div>
  );
}

export default  HighlightItem
