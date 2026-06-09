import type { OccurrenceFormData, OccurrenceFormErrors } from '../types';

export function validateOccurrenceForm(data: OccurrenceFormData): OccurrenceFormErrors {
  const errors: OccurrenceFormErrors = {};

  if (!data.studentName.trim()) {
    errors.studentName = 'Selecione um aluno.';
  }

  if (!data.type.trim()) {
    errors.type = 'Selecione o tipo da ocorrência.';
  }

  if (!data.description.trim()) {
    errors.description = 'Informe uma descrição.';
  } else if (data.description.trim().length < 10) {
    errors.description = 'A descrição deve ter pelo menos 10 caracteres.';
  }

  if (!data.priority) {
    errors.priority = 'Selecione a prioridade.';
  }

  return errors;
}

export function isOccurrenceFormValid(data: OccurrenceFormData): boolean {
  return Object.keys(validateOccurrenceForm(data)).length === 0;
}
