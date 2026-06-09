import { DashboardCard } from '../components/DashboardCard';
import { StatusBadge } from '../components/StatusBadge';
import type { Occurrence, Student, TransportRoute } from '../types';

interface DashboardPageProps {
  students: Student[];
  routes: TransportRoute[];
  occurrences: Occurrence[];
  onNavigate: (page: string) => void;
}

export function DashboardPage({ students, routes, occurrences, onNavigate }: DashboardPageProps) {
  const activeRoutes = routes.filter((route) => route.status === 'ACTIVE').length;
  const openOccurrences = occurrences.filter((occurrence) => occurrence.status !== 'RESOLVED').length;
  const inRouteStudents = students.filter((student) => student.status === 'IN_ROUTE').length;

  return (
    <section className="page" data-cy="dashboard-page">
      <div className="hero-panel">
        <div>
          <span className="eyebrow">QA Lab • Transporte escolar</span>
          <h1>Monitoramento escolar com foco em testes automatizados</h1>
          <p>
            Dashboard fictício para treinar Jest, React Testing Library e Cypress em um cenário
            próximo de um produto real.
          </p>
        </div>
        <button onClick={() => onNavigate('occurrences')} data-cy="new-occurrence-shortcut">
          Nova ocorrência
        </button>
      </div>

      <div className="dashboard-grid">
        <DashboardCard title="Alunos monitorados" value={students.length} description="Base operacional simulada" trend="+12% este mês" />
        <DashboardCard title="Rotas ativas" value={activeRoutes} description="Rotas em operação agora" />
        <DashboardCard title="Ocorrências abertas" value={openOccurrences} description="Demandam acompanhamento" />
        <DashboardCard title="Alunos em rota" value={inRouteStudents} description="Em deslocamento neste momento" />
      </div>

      <div className="content-grid">
        <article className="panel">
          <h2>Saúde operacional</h2>
          <div className="progress-list">
            <div>
              <span>Rotas ativas</span>
              <strong>{activeRoutes}/{routes.length}</strong>
              <div className="progress"><span style={{ width: `${(activeRoutes / routes.length) * 100}%` }} /></div>
            </div>
            <div>
              <span>Alunos em rota</span>
              <strong>{inRouteStudents}/{students.length}</strong>
              <div className="progress"><span style={{ width: `${(inRouteStudents / students.length) * 100}%` }} /></div>
            </div>
          </div>
        </article>

        <article className="panel">
          <h2>Alertas recentes</h2>
          <div className="alert-list" data-cy="recent-alerts">
            {occurrences.slice(0, 3).map((occurrence) => (
              <div className="alert-item" key={occurrence.id}>
                <div>
                  <strong>{occurrence.type}</strong>
                  <p>{occurrence.studentName}</p>
                </div>
                <StatusBadge value={occurrence.priority} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
