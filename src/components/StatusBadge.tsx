import type { OccurrencePriority, OccurrenceStatus, RouteStatus, StudentStatus } from '../types';
import {
  formatOccurrencePriority,
  formatOccurrenceStatus,
  formatRouteStatus,
  formatStudentStatus,
} from '../utils/formatters';

type BadgeKind = StudentStatus | RouteStatus | OccurrencePriority | OccurrenceStatus;

interface StatusBadgeProps {
  value: BadgeKind;
}

function getLabel(value: BadgeKind): string {
  if (value === 'IN_ROUTE' || value === 'ARRIVED' || value === 'ABSENT') {
    return formatStudentStatus(value);
  }

  if (value === 'ACTIVE' || value === 'DELAYED' || value === 'FINISHED') {
    return formatRouteStatus(value);
  }

  if (value === 'LOW' || value === 'MEDIUM' || value === 'HIGH') {
    return formatOccurrencePriority(value);
  }

  return formatOccurrenceStatus(value);
}

export function StatusBadge({ value }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${value.toLowerCase()}`} data-cy="status-badge">
      {getLabel(value)}
    </span>
  );
}
