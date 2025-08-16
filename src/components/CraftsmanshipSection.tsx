export default function CraftsmanshipSection() {
  return (
    <section className="py-20 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              מלאכת שענות
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              כל שעון DW הוא תוצאה של שעות עבודה מדויקות, שילוב של מסורת שוויצרית עם טכנולוגיה מתקדמת. 
              השענים שלנו משלבים ידע עתיק עם חדשנות מודרנית ליצירת יצירות אמנות מתמשכות.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-gold">עיצוב מדויק</h3>
                  <p className="text-gray-300">כל שעון מתחיל בעיצוב מדויק המשלב אסתטיקה עם פונקציונליות</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-gold">בנייה ידנית</h3>
                  <p className="text-gray-300">כל רכיב מורכב ביד על ידי שענים מקצועיים עם ניסיון של עשרות שנים</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-gold">בדיקות איכות</h3>
                  <p className="text-gray-300">כל שעון עובר סדרת בדיקות קפדנית להבטחת דיוק ואיכות מקסימלית</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 border-2 border-brand-gold text-brand-gold px-8 py-4 text-lg font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors duration-300 rounded-none">
              למד עוד על המלאכה
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-gray to-brand-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-4 border-brand-gold rounded-full relative">
                  <div className="absolute inset-0 border-4 border-transparent border-t-brand-gold-light rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute inset-0 border-4 border-transparent border-b-brand-gold-light rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-brand-gold rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-gold rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-gold rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
