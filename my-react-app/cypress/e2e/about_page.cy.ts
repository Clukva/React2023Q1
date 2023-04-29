describe('The About Page', () => {
  it('check render footer', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/forms');
    cy.visit('/about');
    cy.get('#root').contains('Yuri Shpakovsky');
  });

  it('about page content', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.get('.about-content').contains('Rick and Morty');
  });

  it('about page content', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.get('.about-content').contains('The general concept of Rick and Morty');
  });
});
