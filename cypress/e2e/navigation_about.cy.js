describe('Navegación a About', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/EstacionesTerrestres/**', { fixture: 'fuel_data.json' }).as('getFuelPrices');
    cy.visit('/');
    cy.wait('@getFuelPrices');
  });

  it('permite navegar desde el menú "Acerca de nosotros" a /about', () => {
    cy.contains('nav a', 'Acerca de nosotros').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', 'Acerca de nosotros');
  });
});
