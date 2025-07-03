import DentistsSection from '@/components/DentistsSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dentists | Local Zarurat',
  description: 'Find the best dentists near you. Browse dental clinics and oral healthcare services.',
};

export default function DentistsPage() {
  return (
    <OptimizedSection>
      <DentistsSection />
    </OptimizedSection>
  );
} 