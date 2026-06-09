import type { Occurrence, TransportRoute } from '../types';

export type RouteRiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export function calculateRouteRiskLevel(route: TransportRoute, occurrences: Occurrence[]): RouteRiskLevel {
  const highPriorityOccurrences = occurrences.filter(
    (occurrence) => occurrence.priority === 'HIGH' && occurrence.status !== 'RESOLVED',
  ).length;

  if (route.status === 'DELAYED' && highPriorityOccurrences >= 1) {
    return 'HIGH';
  }

  if (route.status === 'DELAYED' || highPriorityOccurrences >= 1) {
    return 'MEDIUM';
  }

  return 'LOW';
}

export function formatRouteRiskLevel(level: RouteRiskLevel): string {
  const labels: Record<RouteRiskLevel, string> = {
    LOW: 'Baixo',
    MEDIUM: 'Médio',
    HIGH: 'Alto',
  };

  return labels[level];
}
