import { useMemo, useState } from 'react';
import { StudentTable } from '../components/StudentTable';
import type { Student, StudentStatus } from '../types';
import { filterStudents } from '../utils/filters';

interface StudentsPageProps {
  students: Student[];
}

export function StudentsPage({ students }: StudentsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState<StudentStatus | 'ALL'>('ALL');

  const filteredStudents = useMemo(
    () => filterStudents(students, searchTerm, status),
    [students, searchTerm, status],
  );

  return (
    <section className="page" data-cy="students-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Alunos</span>
          <h1>Controle de embarque</h1>
          <p>Filtre alunos por nome e status operacional.</p>
        </div>
      </div>

      <div className="toolbar">
        <input
          data-cy="student-search"
          type="search"
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          data-cy="student-status-filter"
          value={status}
          onChange={(event) => setStatus(event.target.value as StudentStatus | 'ALL')}
        >
          <option value="ALL">Todos</option>
          <option value="IN_ROUTE">Em rota</option>
          <option value="ARRIVED">Chegou</option>
          <option value="ABSENT">Ausente</option>
        </select>
      </div>

      <StudentTable students={filteredStudents} />
    </section>
  );
}
