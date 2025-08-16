'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'מה זה DreamWatch?',
      answer: 'DreamWatch הוא שעון דיגיטלי מתקדם המורכב בטכנולוגיה חדישה עם תכונות חכמות ומסך דיגיטלי מתקדם. האם אי פעם חלמת על שעון שיכול לעשות הכל? מטרת DreamWatch היא להביא את הטכנולוגיה הדיגיטלית המתקדמת ביותר לקהל רחב יותר במחיר נגיש, ותמיד באמצעות החומרים והטכנולוגיה הטובים ביותר.'
    },
    {
      question: 'האם אני יכול להתאים את הממשק בעצמי?',
      answer: 'אנו כוללים (בחינם) אפליקציה משלימה עם כל הזמנה כדי לעזור לך להתאים את הממשק והתכונות כראוי ובקלות.'
    },
    {
      question: 'זמן משלוח ועלויות',
      answer: 'הזמן הנדרש לכל תהליך ההזמנה, מהרכבה ועד למסירה, הוא 7-15 ימי עבודה (שני-שישי). לגבי העלות, המשלוח הוא לגמרי חינם, וגם כללנו את מכסי הייבוא של המדינה שלך במחיר, כך שלא תהיה לך עלות נוספת או עמלות במהלך מסירת השעון שלך. - אנו מטפלים בכל העלויות והתהליכים - שימו לב שזמני המסירה עשויים להשתנות בהתאם למדינת היעד.'
    },
    {
      question: 'האם אפשר להתאים את הלוגו?',
      answer: 'בהחלט. אנו מספקים גמישות להתאים אישית את השעון שלך לפי העדפותיך, כולל האפשרות להתאים את הלוגו והממשק. אנא כלול את הדרישות הספציפיות שלך בהערות בעת ביצוע ההזמנה.'
    },
    {
      question: 'האם אני יכול לעצב שעון דיגיטלי משלך?',
      answer: 'אתה יכול לבחור/להתאים אישית את המארז, המסך, הממשק, התכונות, ואפילו להוסיף את הלוגו או האותיות הראשיות שלך. אם אתה רוצה שעון דיגיטלי מותאם אישית, אנא צור איתנו קשר ב-WhatsApp כדי לדון באפשרויות שלך עם אחד המפתחים שלנו.'
    },
    {
      question: 'האם הם מקוריים?',
      answer: 'אנו משתמשים בטכנולוגיה דיגיטלית מתקדמת כדי ליצור שעונים ייחודיים עם תכונות חדשניות. השעונים שלנו הם פיתוח מקורי שלנו ואנחנו לא קשורים למותגים אחרים בשום צורה.'
    }
  ]

  return (
    <section className="bg-brand-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-black mb-4">שאלות נפוצות</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-brand-black">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">עוד שאלות?</p>
          <button className="text-brand-gold font-semibold hover:underline">
            צור קשר
          </button>
        </div>
      </div>
    </section>
  )
}
