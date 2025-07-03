import GymSection from '@/components/GymSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gym & Fitness | Local Zarurat',
  description: 'Find the best gyms and fitness centers near you. Browse fitness clubs and training facilities.',
};

export default function GymPage() {
  return (
    <OptimizedSection>
      <GymSection />
    </OptimizedSection>
  );
} 