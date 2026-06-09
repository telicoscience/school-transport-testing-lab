import type { Student } from '../types';

export const students: Student[] = [
  {
    id: 1,
    name: 'Sofia Oliveira',
    school: 'Escola Estadual Santa Delmira',
    routeId: 1,
    guardian: 'Télico Oliveira',
    status: 'IN_ROUTE',
  },
  {
    id: 2,
    name: 'Lara Beatriz',
    school: 'Escola Municipal Raimunda Nogueira',
    routeId: 1,
    guardian: 'Ana Beatriz',
    status: 'ARRIVED',
  },
  {
    id: 3,
    name: 'Miguel Santos',
    school: 'Escola Estadual Santa Delmira',
    routeId: 2,
    guardian: 'Carlos Santos',
    status: 'ABSENT',
  },
  {
    id: 4,
    name: 'Heitor Lima',
    school: 'Escola Municipal Professor Antônio Fagundes',
    routeId: 3,
    guardian: 'Mariana Lima',
    status: 'IN_ROUTE',
  },
  {
    id: 5,
    name: 'Valentina Rocha',
    school: 'Escola Estadual Santa Delmira',
    routeId: 2,
    guardian: 'João Rocha',
    status: 'ARRIVED',
  },
];
