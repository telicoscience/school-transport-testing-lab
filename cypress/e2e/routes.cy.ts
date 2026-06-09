describe('Routes', () => {
  it('shows route cards with driver, vehicle and risk information', () => {
    cy.visit('/');
    cy.get('[data-cy="nav-routes"]').click();

    cy.get('[data-cy="routes-page"]').should('be.visible');
    cy.get('[data-cy="route-card"]').should('have.length.at.least', 3);
    cy.contains('Rota Norte 01').should('be.visible');
    cy.contains('Francisco Almeida').should('be.visible');
    cy.contains('Ônibus ESC-1024').should('be.visible');
    cy.contains('Risco').should('be.visible');
  });
});
