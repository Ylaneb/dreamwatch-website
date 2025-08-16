export default function HeroSection() {
  return (
    <section className="relative bg-brand-white py-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-20"
          onError={(e) => console.error('Hero video error:', e)}
          onLoadStart={() => console.log('Hero video loading...')}
          onCanPlay={() => console.log('Hero video can play')}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/8322342-uhd_4096_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-brand-black mb-8">
            חדשנות דיגיטלית
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black mb-12">
            צור את חוויית השעון החלומי שלך
          </h2>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-brand-black text-brand-white px-12 py-4 text-xl font-semibold hover:bg-brand-gray transition-colors duration-300 rounded-none">
              התאמה אישית
            </button>
            <button className="border-2 border-brand-black text-brand-black px-12 py-4 text-xl font-semibold hover:bg-brand-black hover:text-brand-white transition-colors duration-300 rounded-none">
              כל המוצרים
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
