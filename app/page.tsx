import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import CategoryGrid from '@/components/CategoryGrid';
import ServiceSections from '@/components/ServiceSections';
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

export const metadata: Metadata = {
  title: 'Local Zarurat - Your One-Stop Destination for Local Services',
  description: 'Find and connect with the best local services in your area. From restaurants and beauty spas to wedding planners and home services, discover trusted local businesses near you.',
  keywords: ['local services', 'restaurants near me', 'beauty services', 'home services', 'wedding planners', 'local businesses', 'india'],
  openGraph: {
    title: 'Local Zarurat - Your One-Stop Destination for Local Services',
    description: 'Find and connect with the best local services in your area. From restaurants and beauty spas to wedding planners and home services, discover trusted local businesses near you.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Zarurat Services'
      }
    ],
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServiceCategories />
      <CategoryGrid />
      <ServiceSections />
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