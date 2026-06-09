import type { OccurrencePriority, OccurrenceStatus, RouteStatus, StudentStatus } from '../types';

export function formatStudentStatus(status: StudentStatus): string {
  const labels: Record<StudentStatus, string> = {
    IN_ROUTE: 'Em rota',
    ARRIVED: 'Chegou',
    ABSENT: 'Ausente',
  };

  return labels[status];
}

export function formatRouteStatus(status: RouteStatus): string {
  const labels: Record<RouteStatus, string> = {
    ACTIVE: 'Ativa',
    DELAYED: 'Atrasada',
    FINISHED: 'Finalizada',
  };

  return labels[status];
}

export function formatOccurrencePriority(priority: OccurrencePriority): string {
  const labels: Record<OccurrencePriority, string> = {
    LOW: 'Baixa',
    MEDIUM: 'Média',
    HIGH: 'Alta',
  };

  return labels[priority];
}

export function formatOccurrenceStatus(status: OccurrenceStatus): string {
  const labels: Record<OccurrenceStatus, string> = {
    OPEN: 'Aberta',
    IN_PROGRESS: 'Em atendimento',
    RESOLVED: 'Resolvida',
  };

  return labels[status];
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}
