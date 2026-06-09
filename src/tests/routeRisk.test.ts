import { initialOccurrences } from '../data/occurrences';
import { routes } from '../data/routes';
import { calculateRouteRiskLevel, formatRouteRiskLevel } from '../utils/routeRisk';

describe('route risk', () => {
  it('marks delayed route with high priority occurrence as high risk', () => {
    expect(calculateRouteRiskLevel(routes[1], initialOccurrences)).toBe('HIGH');
  });

  it('formats route risk label', () => {
    expect(formatRouteRiskLevel('MEDIUM')).toBe('Médio');
  });
});
