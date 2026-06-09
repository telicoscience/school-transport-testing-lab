import type { OccurrenceFormData } from '../types';
import { isOccurrenceFormValid, validateOccurrenceForm } from '../utils/validators';

describe('occurrence form validation', () => {
  it('returns errors for empty form', () => {
    const data: OccurrenceFormData = {
      studentName: '',
      type: '',
      description: '',
      priority: '',
    };

    const errors = validateOccurrenceForm(data);

    expect(errors.studentName).toBe('Selecione um aluno.');
    expect(errors.type).toBe('Selecione o tipo da ocorrência.');
    expect(errors.description).toBe('Informe uma descrição.');
    expect(errors.priority).toBe('Selecione a prioridade.');
  });

  it('rejects short description', () => {
    const data: OccurrenceFormData = {
      studentName: 'Sofia Oliveira',
      type: 'Atraso',
      description: 'curta',
      priority: 'MEDIUM',
    };

    expect(validateOccurrenceForm(data).description).toBe('A descrição deve ter pelo menos 10 caracteres.');
  });

  it('accepts valid form data', () => {
    const data: OccurrenceFormData = {
      studentName: 'Sofia Oliveira',
      type: 'Atraso',
      description: 'Veículo atrasou no trajeto da manhã.',
      priority: 'MEDIUM',
    };

    expect(isOccurrenceFormValid(data)).toBe(true);
  });
});
