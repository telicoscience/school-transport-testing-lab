import { useState } from 'react';
import { initialOccurrences } from './data/occurrences';
import { routes } from './data/routes';
import { students } from './data/students';
import { DashboardPage } from './pages/DashboardPage';
import { OccurrencesPage } from './pages/OccurrencesPage';
import { RoutesPage } from './pages/RoutesPage';
import { StudentsPage } from './pages/StudentsPage';
import type { Occurrence, OccurrenceFormData } from './types';

type Page = 'dashboard' | 'students' | 'routes' | 'occurrences';

const navigationItems: { label: string; page: Page }[] = [
  { label: 'Dashboard', page: 'dashboard' },
  { label: 'Alunos', page: 'students' },
  { label: 'Rotas', page: 'routes' },
  { label: 'Ocorrências', page: 'occurrences' },
];

export default function App() {
  const [activePage, setActivePage] = useState<Page>('dashboard');
  const [occurrences, setOccurrences] = useState<Occurrence[]>(initialOccurrences);

  function handleCreateOccurrence(data: OccurrenceFormData) {
    const newOccurrence: Occurrence = {
      id: occurrences.length + 1,
      studentName: data.studentName,
      type: data.type,
      description: data.description,
      priority: data.priority || 'LOW',
      status: 'OPEN',
    };

    setOccurrences((currentOccurrences) => [newOccurrence, ...currentOccurrences]);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand" data-cy="brand">
          <span>ST</span>
          <div>
            <strong>School Transport</strong>
            <small>Testing Lab</small>
          </div>
        </div>

        <nav aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <button
              key={item.page}
              className={activePage === item.page ? 'active' : ''}
              onClick={() => setActivePage(item.page)}
              data-cy={`nav-${item.page}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        {activePage === 'dashboard' ? (
          <DashboardPage students={students} routes={routes} occurrences={occurrences} onNavigate={(page) => setActivePage(page as Page)} />
        ) : null}
        {activePage === 'students' ? <StudentsPage students={students} /> : null}
        {activePage === 'routes' ? <RoutesPage routes={routes} students={students} occurrences={occurrences} /> : null}
        {activePage === 'occurrences' ? (
          <OccurrencesPage students={students} occurrences={occurrences} onCreateOccurrence={handleCreateOccurrence} />
        ) : null}
      </main>
    </div>
  );
}
