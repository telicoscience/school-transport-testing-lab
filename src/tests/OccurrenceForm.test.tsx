import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { students } from '../data/students';
import { OccurrenceForm } from '../components/OccurrenceForm';

describe('OccurrenceForm', () => {
  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();

    render(<OccurrenceForm students={students} onSubmit={handleSubmit} />);

    await user.click(screen.getByRole('button', { name: /registrar ocorrência/i }));

    expect(screen.getByText('Selecione um aluno.')).toBeInTheDocument();
    expect(screen.getByText('Selecione o tipo da ocorrência.')).toBeInTheDocument();
    expect(screen.getByText('Informe uma descrição.')).toBeInTheDocument();
    expect(screen.getByText('Selecione a prioridade.')).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it('calls onSubmit when form is valid', async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();

    render(<OccurrenceForm students={students} onSubmit={handleSubmit} />);

    await user.selectOptions(screen.getByLabelText(/aluno/i), 'Sofia Oliveira');
    await user.selectOptions(screen.getByLabelText(/tipo/i), 'Atraso');
    await user.selectOptions(screen.getByLabelText(/prioridade/i), 'MEDIUM');
    await user.type(screen.getByLabelText(/descrição/i), 'Veículo atrasou por congestionamento.');
    await user.click(screen.getByRole('button', { name: /registrar ocorrência/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      studentName: 'Sofia Oliveira',
      type: 'Atraso',
      priority: 'MEDIUM',
      description: 'Veículo atrasou por congestionamento.',
    });
  });
});
