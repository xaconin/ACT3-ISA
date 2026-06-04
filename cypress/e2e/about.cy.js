describe('Página About', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/EstacionesTerrestres/**', { fixture: 'fuel_data.json' }).as('getFuelPrices');
    cy.visit('/about');
    cy.wait('@getFuelPrices');
  });

  it('muestra la información del equipo', () => {
    cy.get('h1').should('contain', 'Acerca de nosotros');
    cy.get('#team-number').should('contain', 'Somos el equipo nº 1');
    cy.contains('Martín Eugenio Nunell Rey').should('exist');
    cy.contains('Carlos Gálvez Reguera').should('exist');
    cy.contains('Pedro Chacón Rosa').should('exist');
    cy.contains('Asier Bajo Juan').should('exist');
    cy.contains('Sergio Gálvez Reguera').should('exist');
  });
});
