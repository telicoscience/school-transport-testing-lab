import { FormEvent, useState } from 'react';
import type { OccurrenceFormData, OccurrenceFormErrors, Student } from '../types';
import { validateOccurrenceForm } from '../utils/validators';

interface OccurrenceFormProps {
  students: Student[];
  onSubmit: (data: OccurrenceFormData) => void;
}

const occurrenceTypes = [
  'Atraso',
  'Ausência',
  'Mudança de rota',
  'Problema no veículo',
  'Contato com responsável',
];

const initialFormData: OccurrenceFormData = {
  studentName: '',
  type: '',
  description: '',
  priority: '',
};

export function OccurrenceForm({ students, onSubmit }: OccurrenceFormProps) {
  const [formData, setFormData] = useState<OccurrenceFormData>(initialFormData);
  const [errors, setErrors] = useState<OccurrenceFormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateOccurrenceForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);
    setFormData(initialFormData);
  }

  return (
    <form className="occurrence-form" onSubmit={handleSubmit} data-cy="occurrence-form">
      <label>
        Aluno
        <select
          data-cy="occurrence-student"
          value={formData.studentName}
          onChange={(event) => setFormData({ ...formData, studentName: event.target.value })}
        >
          <option value="">Selecione</option>
          {students.map((student) => (
            <option key={student.id} value={student.name}>
              {student.name}
            </option>
          ))}
        </select>
        {errors.studentName ? <span className="form-error">{errors.studentName}</span> : null}
      </label>

      <label>
        Tipo
        <select
          data-cy="occurrence-type"
          value={formData.type}
          onChange={(event) => setFormData({ ...formData, type: event.target.value })}
        >
          <option value="">Selecione</option>
          {occurrenceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.type ? <span className="form-error">{errors.type}</span> : null}
      </label>

      <label>
        Prioridade
        <select
          data-cy="occurrence-priority"
          value={formData.priority}
          onChange={(event) =>
            setFormData({ ...formData, priority: event.target.value as OccurrenceFormData['priority'] })
          }
        >
          <option value="">Selecione</option>
          <option value="LOW">Baixa</option>
          <option value="MEDIUM">Média</option>
          <option value="HIGH">Alta</option>
        </select>
        {errors.priority ? <span className="form-error">{errors.priority}</span> : null}
      </label>

      <label className="occurrence-form__wide">
        Descrição
        <textarea
          data-cy="occurrence-description"
          value={formData.description}
          onChange={(event) => setFormData({ ...formData, description: event.target.value })}
          placeholder="Descreva a ocorrência de forma objetiva."
        />
        {errors.description ? <span className="form-error">{errors.description}</span> : null}
      </label>

      <button type="submit" data-cy="save-occurrence">
        Registrar ocorrência
      </button>
    </form>
  );
}
