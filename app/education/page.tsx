import EducationSection from '@/components/EducationSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Education | Local Zarurat',
  description: 'Find the best education centers near you. Browse coaching, tuition, and training institutes.',
};

export default function EducationPage() {
  return (
    <OptimizedSection>
      <EducationSection />
    </OptimizedSection>
  );
} 