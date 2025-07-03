import PackersMoversSection from '@/components/PackersMoversSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packers & Movers | Local Zarurat',
  description: 'Find the best packers and movers near you. Browse moving companies and relocation services.',
};

export default function PackersMoversPage() {
  return (
    <OptimizedSection>
      <PackersMoversSection />
    </OptimizedSection>
  );
} 