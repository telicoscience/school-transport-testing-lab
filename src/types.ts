export type StudentStatus = 'IN_ROUTE' | 'ARRIVED' | 'ABSENT';
export type RouteStatus = 'ACTIVE' | 'DELAYED' | 'FINISHED';
export type OccurrencePriority = 'LOW' | 'MEDIUM' | 'HIGH';
export type OccurrenceStatus = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED';

export interface Student {
  id: number;
  name: string;
  school: string;
  routeId: number;
  guardian: string;
  status: StudentStatus;
}

export interface TransportRoute {
  id: number;
  name: string;
  driver: string;
  vehicle: string;
  schools: string[];
  status: RouteStatus;
}

export interface Occurrence {
  id: number;
  studentName: string;
  type: string;
  description: string;
  priority: OccurrencePriority;
  status: OccurrenceStatus;
}

export interface OccurrenceFormData {
  studentName: string;
  type: string;
  description: string;
  priority: OccurrencePriority | '';
}

export type OccurrenceFormErrors = Partial<Record<keyof OccurrenceFormData, string>>;
