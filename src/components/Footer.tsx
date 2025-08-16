'use client'

import { useEffect, useRef } from 'react'

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const currentVideo = videoRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && currentVideo) {
            currentVideo.play()
          } else if (currentVideo) {
            currentVideo.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (currentVideo) {
      observer.observe(currentVideo)
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo)
      }
    }
  }, [])

  return (
    <footer className="bg-brand-white text-brand-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {/* Video Section - Left Side */}
          <div className="md:col-span-1">
            <div className="relative h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
                onError={(e) => console.error('Footer video error:', e)}
                onLoadStart={() => console.log('Footer video loading...')}
                onCanPlay={() => console.log('Footer video can play')}
              >
                <source src="/videos/Movement-inner.mp4" type="video/mp4" />
                <source src="/videos/8322342-uhd_4096_2160_25fps.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Content Sections */}
          <div className="md:col-span-2 lg:col-span-3 px-8 py-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brand Section */}
              <div>
                <img 
                  src="/images/logos/Dream_Watch_logo_or.png" 
                  alt="DreamWatch" 
                  className="h-32 w-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-6">DreamWatch Digital</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At DreamWatch, we make digital watches that are all about innovation and your personal style. Our skilled developers use the latest technology to create each watch uniquely for you. Experience the future with DreamWatch and enjoy a digital timepiece that&apos;s as special as you are.
                </p>
              </div>

              {/* Important Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-brand-black">קישורים חשובים</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">אודות DreamWatch</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">חדשות</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">טכנולוגיה</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">מעקב הזמנות</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">מדיניות אחריות</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">טיפול בשעון</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-brand-black transition-colors duration-200">מדיניות</a></li>
                </ul>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-brand-black">אמצעי תשלום</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span>American Express</span>
                  <span>Apple Pay</span>
                  <span>Google Pay</span>
                  <span>Klarna</span>
                  <span>Maestro</span>
                  <span>Mastercard</span>
                  <span>PayPal</span>
                  <span>Shop Pay</span>
                  <span>Union Pay</span>
                  <span>Visa</span>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 text-sm">
                  © 2025 - DreamWatch דיגיטלי
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
