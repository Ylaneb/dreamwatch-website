import TopBanner from '@/components/TopBanner'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SpecialOffers from '@/components/SpecialOffers'
import CollectionsSection from '@/components/CollectionsSection'
import WhySeikoSection from '@/components/WhySeikoSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import VideoSection from '@/components/VideoSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />
      <HeroSection />
      <SpecialOffers />
      <CollectionsSection />
      <WhySeikoSection />
      <FeaturedProducts />
      <VideoSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
