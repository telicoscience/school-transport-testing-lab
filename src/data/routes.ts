import type { TransportRoute } from '../types';

export const routes: TransportRoute[] = [
  {
    id: 1,
    name: 'Rota Norte 01',
    driver: 'Francisco Almeida',
    vehicle: 'Ônibus ESC-1024',
    schools: ['Escola Estadual Santa Delmira', 'Escola Municipal Raimunda Nogueira'],
    status: 'ACTIVE',
  },
  {
    id: 2,
    name: 'Rota Oeste 03',
    driver: 'Raimundo César',
    vehicle: 'Van VAN-2210',
    schools: ['Escola Estadual Santa Delmira'],
    status: 'DELAYED',
  },
  {
    id: 3,
    name: 'Rota Centro 02',
    driver: 'Maria das Dores',
    vehicle: 'Micro-ônibus MIC-7712',
    schools: ['Escola Municipal Professor Antônio Fagundes'],
    status: 'ACTIVE',
  },
];
