export default function VideoSection() {
  return (
    <section className="py-16 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-white mb-6">
            חווה את DreamWatch
          </h2>
          <p className="text-xl text-brand-gold mb-8">
            גלה את הטכנולוגיה החדישה מאחורי השעון החכם שלך
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-brand-gray rounded-lg overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/images/features/tech-demo.jpg"
            >
              <source src="/videos/dreamwatch-demo.mp4" type="video/mp4" />
              <p className="text-brand-white p-8 text-center">
                הדפדפן שלך לא תומך בנגינת וידאו.
              </p>
            </video>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-gold bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
              <svg className="w-12 h-12 text-brand-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-white mb-2">ביצועים מהירים</h3>
            <p className="text-gray-300">מעבד חזק וזיכרון מתקדם לביצועים חלקים</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-white mb-2">אבטחה מתקדמת</h3>
            <p className="text-gray-300">הצפנה חזקה והגנה על הנתונים שלך</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-brand-white mb-2">עיצוב יוקרתי</h3>
            <p className="text-gray-300">חומרים איכותיים ועיצוב מודרני</p>
          </div>
        </div>
      </div>
    </section>
  )
}
