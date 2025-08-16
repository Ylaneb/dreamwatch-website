export default function WhySeikoSection() {
  return (
    <section className="bg-brand-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-black mb-8">למה DreamWatch?</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            אנו מאמינים ש-DreamWatch מציע את הערך הטוב ביותר עם הטכנולוגיה הדיגיטלית החדשנית שלו וביצועים אמינים. תוך ניצול רכיבים מתקדמים, אנו יוצרים שעונים דיגיטליים מותאמים אישית המשלבים פונקציונליות מתקדמת עם העדפות הסגנון הייחודיות שלך. באמצעות חומרים איכותיים בלבד והטכנולוגיה החדישה ביותר, אנו יוצרים שעונים מותאמים אישית שמתאימים לאורח החיים שלך. אם אתה רוצה שעון דיגיטלי ברמה גבוהה שמתאים לצרכים שלך ללא המחיר הגבוה, היצירות המותאמות אישית שלנו של DreamWatch מושלמות עבורך.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Before/After Section */}
          <div className="text-center">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-brand-black mb-4">Before</h3>
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto"></div>
              </div>
              <div className="bg-brand-gold p-8 rounded-lg">
                <h3 className="text-xl font-bold text-brand-black mb-4">AFTER</h3>
                <div className="w-32 h-32 bg-brand-black rounded-full mx-auto"></div>
              </div>
            </div>
            <button className="text-brand-gold font-semibold hover:underline">
              צפה עוד
            </button>
          </div>

          {/* Features */}
                      <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-black mb-4">על ידי מומחי טכנולוגיה</h3>
                <p className="text-gray-700">הנדסה מקצועית ממפתחים מיומנים</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-black mb-4">התאם אישית שלך</h3>
                <p className="text-gray-700">צור את השעון הדיגיטלי המושלם שלך</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-black mb-4">שילוב מושלם</h3>
                <p className="text-gray-700">מותאם לצרכים הדיגיטליים המדויקים שלך</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
