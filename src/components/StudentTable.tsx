import type { Student } from '../types';
import { StatusBadge } from './StatusBadge';

interface StudentTableProps {
  students: Student[];
}

export function StudentTable({ students }: StudentTableProps) {
  if (students.length === 0) {
    return (
      <div className="empty-state" data-cy="students-empty-state">
        Nenhum aluno encontrado para os filtros selecionados.
      </div>
    );
  }

  return (
    <div className="table-shell">
      <table className="data-table" data-cy="students-table">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Escola</th>
            <th>Rota</th>
            <th>Responsável</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.school}</td>
              <td>Rota #{student.routeId}</td>
              <td>{student.guardian}</td>
              <td>
                <StatusBadge value={student.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
