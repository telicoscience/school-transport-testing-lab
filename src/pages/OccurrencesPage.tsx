import { OccurrenceForm } from '../components/OccurrenceForm';
import { StatusBadge } from '../components/StatusBadge';
import type { Occurrence, OccurrenceFormData, Student } from '../types';
import { formatOccurrencePriority } from '../utils/formatters';

interface OccurrencesPageProps {
  students: Student[];
  occurrences: Occurrence[];
  onCreateOccurrence: (data: OccurrenceFormData) => void;
}

export function OccurrencesPage({ students, occurrences, onCreateOccurrence }: OccurrencesPageProps) {
  return (
    <section className="page" data-cy="occurrences-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Ocorrências</span>
          <h1>Registro e acompanhamento</h1>
          <p>Cadastre eventos operacionais e valide regras com testes automatizados.</p>
        </div>
      </div>

      <div className="content-grid content-grid--wide-left">
        <article className="panel">
          <h2>Nova ocorrência</h2>
          <OccurrenceForm students={students} onSubmit={onCreateOccurrence} />
        </article>

        <article className="panel">
          <h2>Fila de atendimento</h2>
          <div className="occurrence-list" data-cy="occurrence-list">
            {occurrences.map((occurrence) => (
              <div className="occurrence-item" key={occurrence.id}>
                <div>
                  <strong>{occurrence.type}</strong>
                  <p>{occurrence.studentName}</p>
                  <small>{occurrence.description}</small>
                </div>
                <div className="occurrence-item__badges">
                  <span className="priority-label">{formatOccurrencePriority(occurrence.priority)}</span>
                  <StatusBadge value={occurrence.status} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
