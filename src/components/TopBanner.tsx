'use client'

import { useEffect, useState } from 'react'

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const messages = [
    'משלוח חינם לכל העולם',
    'אחריות לשנתיים',
    'מרוצים או כסף בחזרה',
    'משלוח חינם לכל העולם',
    'אחריות לשנתיים',
    'מרוצים או כסף בחזרה'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [messages.length])

  return (
    <div className="bg-brand-black text-brand-white py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-4 text-sm font-medium">
          {messages[currentIndex]}
        </span>
      </div>
    </div>
  )
}
