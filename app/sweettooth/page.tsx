import { Metadata } from 'next';
import FoodHeader from '@/components/FoodHeader';
import FoodCategories from '@/components/FoodCategories';
import SweetToothSection from '@/components/SweetToothSection';

export const metadata: Metadata = {
  title: 'Sweet Tooth | JustDial',
  description: 'Find desserts and sweet treats near you. Browse cake shops, ice cream parlors, and confectioneries.',
};

export default function SweetToothPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FoodHeader />
      <SweetToothSection />
      <FoodCategories />
    </main>
  );
} 