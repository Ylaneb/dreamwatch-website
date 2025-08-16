export default function CollectionsSection() {
  const collections = [
    'GMTEIKO',
    'NAUTIKO',
    'SEIKOMASTER',
    'SEIKOJUST',
    'SPEEDIKO',
    'SEITONA',
    'ROYAL SEIKO',
    'SEIKO MARINER',
    'SANTEIKO',
    'OYSTEIKO',
    'PANEIKO',
  ]

  return (
    <section className="bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold text-brand-black mb-4">DreamWatch</h2>
          <h3 className="text-3xl font-bold text-brand-black">קולקציות</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {collections.map((collection, index) => (
            <div key={index} className="bg-gray-100 p-4 text-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer rounded-lg">
              <h4 className="text-sm md:text-base font-semibold text-brand-black">{collection}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
