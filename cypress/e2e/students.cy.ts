describe('Students', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="nav-students"]').click();
  });

  it('searches a student by name', () => {
    cy.get('[data-cy="student-search"]').type('Sofia');

    cy.contains('Sofia Oliveira').should('be.visible');
    cy.get('[data-cy="students-table"]').contains('Miguel Santos').should('not.exist');
  });

  it('filters students by status', () => {
    cy.get('[data-cy="student-status-filter"]').select('IN_ROUTE');

    cy.get('[data-cy="students-table"]').contains('Em rota').should('be.visible');
    cy.get('[data-cy="students-table"]').contains('Ausente').should('not.exist');
  });
});
