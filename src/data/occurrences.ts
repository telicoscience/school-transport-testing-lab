import type { Occurrence } from '../types';

export const initialOccurrences: Occurrence[] = [
  {
    id: 1,
    studentName: 'Miguel Santos',
    type: 'Ausência',
    description: 'Responsável informou ausência antes do embarque.',
    priority: 'LOW',
    status: 'OPEN',
  },
  {
    id: 2,
    studentName: 'Sofia Oliveira',
    type: 'Atraso',
    description: 'Veículo atrasado por congestionamento no trajeto.',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
  },
  {
    id: 3,
    studentName: 'Valentina Rocha',
    type: 'Mudança de rota',
    description: 'Responsável solicitou alteração temporária de ponto.',
    priority: 'HIGH',
    status: 'OPEN',
  },
];
