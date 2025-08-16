'use client'

import { useState, useEffect } from 'react'

export default function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-brand-white py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4 max-w-4xl mx-auto">
          {/* Member Club Offer */}
          <div className="flex-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
            <div className="bg-gradient-to-r from-brand-gold to-yellow-600 text-white h-[59px] md:h-auto md:p-6 p-4 rounded-lg">
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-sm md:text-xl font-bold mb-0 md:mb-2">👑 הצעה מיוחדת לחברי המועדון:</h3>
                  <p className="text-xs md:text-lg mb-0 md:mb-2 hidden md:block">100 ₪ הנחה עם הקוד <span className="font-bold">MEMBER100</span></p>
                  <p className="text-xs md:text-sm">פג תוקף: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</p>
                </div>
                <div className="text-2xl md:text-4xl ml-2">👑</div>
              </div>
            </div>
          </div>

          {/* Instagram Offer */}
          <div className="flex-1 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white h-[59px] md:h-auto md:p-6 p-4 rounded-lg">
              <div className="flex items-center justify-between h-full">
                <div className="flex-1">
                  <h3 className="text-sm md:text-xl font-bold mb-0 md:mb-2">📸 הצעה בלעדית באינסטגרם:</h3>
                  <p className="text-xs md:text-lg mb-0 md:mb-2 hidden md:block">75 ₪ הנחה עם הקוד <span className="font-bold">INSTA75</span></p>
                  <p className="text-xs md:text-sm">פג תוקף: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</p>
                </div>
                <div className="text-2xl md:text-4xl ml-2">📸</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
