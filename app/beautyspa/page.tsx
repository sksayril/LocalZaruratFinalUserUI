import BeautySpaSection from '@/components/BeautySpaSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beauty Spa | Local Zarurat',
  description: 'Find the best beauty spas near you. Browse top-rated spas and wellness centers.',
};

export default function BeautySpaPage() {
  return (
    <OptimizedSection>
      <BeautySpaSection />
    </OptimizedSection>
  );
} 