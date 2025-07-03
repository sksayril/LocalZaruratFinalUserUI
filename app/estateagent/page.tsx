import EstateAgentSection from '@/components/EstateAgentSection';
import OptimizedSection from '@/components/OptimizedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estate Agents | Local Zarurat',
  description: 'Find the best estate agents near you. Browse property dealers and real estate services.',
};

export default function EstateAgentPage() {
  return (
    <OptimizedSection>
      <EstateAgentSection />
    </OptimizedSection>
  );
} 