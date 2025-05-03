import backgroundVideo from '../assets/landing_lion.mp4';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <p className="text-sm sm:text-base tracking-widest font-medium mb-2 uppercase">NatureCipher AI</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">People, Planet, and AI</h1>
        <p className="max-w-2xl text-sm sm:text-base">
          We’re leveraging artificial intelligence to protect biodiversity, strengthen climate resilience,
          and empower communities in harmony with nature.
        </p>
      </div>
    </section>
  );
}
