describe('Footer de la aplicación', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/EstacionesTerrestres/**', { fixture: 'fuel_data.json' }).as('getFuelPrices');
    cy.visit('/');
    cy.wait('@getFuelPrices');
  });

  it('muestra todos los miembros del equipo', () => {
    cy.get('footer').should('exist');
    cy.contains('footer', 'Martín Eugenio Nunell Rey').should('exist');
    cy.contains('footer', 'Carlos Gálvez Reguera').should('exist');
    cy.contains('footer', 'Pedro Chacón Rosa').should('exist');
    cy.contains('footer', 'Asier Bajo Juan').should('exist');
    cy.contains('footer', 'Sergio Gálvez Reguera').should('exist');
  });
});
