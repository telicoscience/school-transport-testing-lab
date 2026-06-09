import { StatusBadge } from '../components/StatusBadge';
import type { Occurrence, Student, TransportRoute } from '../types';
import { calculateRouteRiskLevel, formatRouteRiskLevel } from '../utils/routeRisk';

interface RoutesPageProps {
  routes: TransportRoute[];
  students: Student[];
  occurrences: Occurrence[];
}

export function RoutesPage({ routes, students, occurrences }: RoutesPageProps) {
  return (
    <section className="page" data-cy="routes-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Rotas</span>
          <h1>Mapa operacional das rotas</h1>
          <p>Resumo de motoristas, veículos, escolas atendidas e nível de risco.</p>
        </div>
      </div>

      <div className="routes-grid">
        {routes.map((route) => {
          const routeStudents = students.filter((student) => student.routeId === route.id);
          const riskLevel = calculateRouteRiskLevel(route, occurrences);

          return (
            <article className="route-card" key={route.id} data-cy="route-card">
              <div className="route-card__header">
                <div>
                  <h2>{route.name}</h2>
                  <p>{route.vehicle}</p>
                </div>
                <StatusBadge value={route.status} />
              </div>

              <dl>
                <div>
                  <dt>Motorista</dt>
                  <dd>{route.driver}</dd>
                </div>
                <div>
                  <dt>Alunos</dt>
                  <dd>{routeStudents.length}</dd>
                </div>
                <div>
                  <dt>Risco</dt>
                  <dd>{formatRouteRiskLevel(riskLevel)}</dd>
                </div>
              </dl>

              <div className="schools-list">
                {route.schools.map((school) => (
                  <span key={school}>{school}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
