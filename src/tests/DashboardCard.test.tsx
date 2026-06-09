import { render, screen } from '@testing-library/react';
import { DashboardCard } from '../components/DashboardCard';

describe('DashboardCard', () => {
  it('renders title, value and description', () => {
    render(<DashboardCard title="Rotas ativas" value={12} description="Rotas em operação" />);

    expect(screen.getByText('Rotas ativas')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText('Rotas em operação')).toBeInTheDocument();
  });
});
