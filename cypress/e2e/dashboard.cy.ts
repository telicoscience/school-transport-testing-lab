describe('Dashboard', () => {
  it('loads the dashboard and shows main indicators', () => {
    cy.visit('/');

    cy.get('[data-cy="dashboard-page"]').should('be.visible');
    cy.contains('Alunos monitorados').should('be.visible');
    cy.contains('Rotas ativas').should('be.visible');
    cy.contains('Ocorrências abertas').should('be.visible');
    cy.get('[data-cy="recent-alerts"]').should('be.visible');
  });

  it('navigates to occurrences from dashboard shortcut', () => {
    cy.visit('/');

    cy.get('[data-cy="new-occurrence-shortcut"]').click();
    cy.get('[data-cy="occurrences-page"]').should('be.visible');
  });
});
