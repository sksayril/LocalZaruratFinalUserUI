import ContractorsSection from '@/components/ContractorsSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractors | Local Zarurat',
  description: 'Find the best contractors near you. Browse construction workers and home improvement services.',
};

export default function ContractorsPage() {
  return (
    <OptimizedSection>
      <ContractorsSection />
    </OptimizedSection>
  );
} 