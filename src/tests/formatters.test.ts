import { formatPercentage, formatStudentStatus } from '../utils/formatters';

describe('formatters', () => {
  it('formats student status label', () => {
    expect(formatStudentStatus('IN_ROUTE')).toBe('Em rota');
    expect(formatStudentStatus('ARRIVED')).toBe('Chegou');
    expect(formatStudentStatus('ABSENT')).toBe('Ausente');
  });

  it('rounds percentage values', () => {
    expect(formatPercentage(66.6)).toBe('67%');
  });
});
