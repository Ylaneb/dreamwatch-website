'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-brand-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/logos/Dream_Watch_logo_or.png" 
              alt="DreamWatch" 
              className="h-32 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium py-2">
                חנות
              </button>
              <div className="absolute top-full right-0 bg-white shadow-lg border border-gray-200 py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">כל המוצרים</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">שעונים חכמים</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">שעונים דיגיטליים</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">מעקב כושר</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">יוקרה דיגיטלית</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">שעוני משחק</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">שעוני ספורט</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">קלאסי דיגיטלי</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">קולקציה פרימיום</a>
              </div>
            </div>
            <a href="#" className="text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
              התאמה אישית
            </a>
            <a href="#" className="text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
              תכונות
            </a>
            <a href="#" className="text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
              תמיכה
            </a>
          </nav>

          {/* Left side - Search, Cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 text-brand-black hover:text-brand-gold transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <button className="p-2 text-brand-black hover:text-brand-gold transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-brand-black hover:text-brand-gold transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-brand-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
                חנות
              </a>
              <a href="#" className="block px-3 py-2 text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
                התאמה אישית
              </a>
              <a href="#" className="block px-3 py-2 text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
                תכונות
              </a>
              <a href="#" className="block px-3 py-2 text-brand-black hover:text-brand-gold transition-colors duration-200 font-medium">
                תמיכה
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
