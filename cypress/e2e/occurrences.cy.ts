describe('Occurrences', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="nav-occurrences"]').click();
  });

  it('shows validation messages when submitting empty form', () => {
    cy.get('[data-cy="save-occurrence"]').click();

    cy.contains('Selecione um aluno.').should('be.visible');
    cy.contains('Selecione o tipo da ocorrência.').should('be.visible');
    cy.contains('Informe uma descrição.').should('be.visible');
    cy.contains('Selecione a prioridade.').should('be.visible');
  });

  it('creates a new occurrence and shows it in the queue', () => {
    cy.get('[data-cy="occurrence-student"]').select('Sofia Oliveira');
    cy.get('[data-cy="occurrence-type"]').select('Contato com responsável');
    cy.get('[data-cy="occurrence-priority"]').select('HIGH');
    cy.get('[data-cy="occurrence-description"]').type('Responsável pediu confirmação do horário de chegada.');
    cy.get('[data-cy="save-occurrence"]').click();

    cy.get('[data-cy="occurrence-list"]').contains('Contato com responsável').should('be.visible');
    cy.get('[data-cy="occurrence-list"]').contains('Sofia Oliveira').should('be.visible');
  });
});
