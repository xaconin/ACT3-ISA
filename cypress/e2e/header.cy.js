/// <reference types="cypress" />

describe('Visualización del header de la aplicación', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/EstacionesTerrestres/**', { fixture: 'fuel_data.json' }).as('getFuelPrices');
    cy.visit('/');
    cy.wait('@getFuelPrices');
  });

  it('El usuario ve un enlace a la página de información', () => {
    cy.get('nav a.about')
      .should('exist')
      .should('have.attr', 'href', '/about')
      .contains('Acerca de nosotros')
      .click();
    cy.url().should('include', '/about');
  });

  it('El usuario ve un enlace al buscador', () => {
    cy.get('nav a.buscador')
      .should('exist')
      .should('have.attr', 'href', '/lista')
      .contains('Buscador')
      .click();
    cy.url().should('include', '/lista');
  });

  it('El usuario ve un enlace al mapa', () => {
    cy.get('nav a.mapa')
      .should('exist')
      .should('have.attr', 'href', '/mapa')
      .contains('Mapa')
      .click();
    cy.url().should('include', '/mapa');
  });

  it('El usuario ve un enlace a la página de registro', () => {
    cy.get('nav a.registro')
      .should('exist')
      .should('have.attr', 'href', '/registro')
      .contains('Registro')
      .click();
    cy.url().should('include', '/registro');
  });

  it('El usuario ve un enlace a la página de login', () => {
    cy.get('nav a.login')
      .should('exist')
      .should('have.attr', 'href', '/login')
      .contains('Login')
      .click();
    cy.url().should('include', '/login');
  });
});
