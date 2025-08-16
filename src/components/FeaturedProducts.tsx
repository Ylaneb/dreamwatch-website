export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'DreamWatch Pro | שחור',
      description: 'שעון חכם פרימיום - DreamWatch דיגיטלי',
      salePrice: '₪1,099',
      regularPrice: '₪1,399',
      image: '/images/products/dreamwatch-pro-black.jpg'
    },
    {
      id: 2,
      name: 'DreamWatch Sport | כחול',
      description: 'מעקב כושר / ספורט - DreamWatch דיגיטלי',
      salePrice: '₪1,299',
      regularPrice: '₪1,399',
      image: '/images/products/dreamwatch-sport-blue.jpg'
    },
    {
      id: 3,
      name: 'DreamWatch Classic | לבן',
      description: 'דיגיטלי קלאסי - DreamWatch דיגיטלי',
      salePrice: '₪1,199',
      regularPrice: '₪1,399',
      image: '/images/products/dreamwatch-classic-white.jpg'
    },
    {
      id: 4,
      name: 'DreamWatch Gaming | RGB',
      description: 'מהדורת משחק עם תאורת RGB',
      salePrice: '₪1,099',
      regularPrice: '₪1,399',
      image: '/images/products/dreamwatch-gaming-rgb.jpg'
    }
  ]

  return (
    <section className="py-16 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-black mb-6">
            שילובי סגנון
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gray to-brand-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 text-brand-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-brand-black mb-2 group-hover:text-brand-gold transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {product.description}
                </p>
                <div className="mb-4">
                  <span className="text-lg font-bold text-brand-gold">{product.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through mr-2">{product.regularPrice}</span>
                </div>
                <button className="w-full bg-brand-black text-brand-white px-4 py-2 text-sm font-semibold hover:bg-brand-gray transition-colors duration-300 rounded-none">
                  בחר אפשרויות
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-brand-black text-brand-white px-8 py-4 text-lg font-semibold hover:bg-brand-gray transition-colors duration-300 rounded-none">
            צפה במוצרים
          </button>
        </div>
      </div>
    </section>
  )
}
