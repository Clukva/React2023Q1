describe('not found page', () => {
  beforeEach(() => {
    cy.visit('/m.;,m,.m,.');
  });

  it('renders error alert', () => {
    cy.contains(
      'Sorry, the requested page was not found. You may have clicked on a link that was in error, or the resource may have been removed.'
    );
  });

  it('renders error alert', () => {
    cy.visit('/');
    cy.get('.main-cards').contains('Rick Sanchez');
  });
});
