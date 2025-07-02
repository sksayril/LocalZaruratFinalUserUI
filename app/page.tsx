import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import CategoryGrid from '@/components/CategoryGrid';
import ServiceSections from '@/components/ServiceSections';
import BillsSection from '@/components/BillsSection';
import TravelSection from '@/components/TravelSection';
import TrendingSection from '@/components/TrendingSection';
import MoviesSection from '@/components/MoviesSection';
import TouristPlacesSection from '@/components/TouristPlacesSection';
import PopularSearchesSection from '@/components/PopularSearchesSection';
import RainyDaySection from '@/components/RainyDaySection';
import RecentActivitySection from '@/components/RecentActivitySection';
import RelatedArticlesSection from '@/components/RelatedArticlesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServiceCategories />
      <CategoryGrid />
      <ServiceSections />
      <BillsSection />
      <TravelSection />
      <TrendingSection />
      <MoviesSection />
      <TouristPlacesSection />
      <PopularSearchesSection />
      <RainyDaySection />
      <RecentActivitySection />
      <RelatedArticlesSection />
      <AboutSection />
      <Footer />
    </main>
  );
}