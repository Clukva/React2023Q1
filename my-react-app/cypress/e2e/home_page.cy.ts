describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/');
    cy.get('.main-page--input').type('summer');
    cy.get('.main-page--input').should('have.value', 'summer');
  });

  it('check search form', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/forms');
    cy.visit('/');
    cy.get('.main-page--input').type('summer');
    cy.get('.main-page--input').should('have.value', 'summer');
    cy.get('button').click();
    cy.get('.main-cards').contains('Summer');
  });

  it('check wrong search form', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/forms');
    cy.visit('/');
    cy.get('.main-page--input').type('4444444');
    cy.get('.main-page--input').should('have.value', '4444444');
    cy.get('button').click();
    cy.get('.main-cards').should('not.have.text', '4444444');
  });

  it('check search form for wrong responce', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/forms');
    cy.visit('/');
    cy.get('.main-page--input').type('123456789');
    cy.get('.main-page--input').should('have.value', '123456789');
    cy.get('button').click();
    cy.get('.main-cards').contains('Oh no, there was an error:');
  });

  it('check open card', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/forms');
    cy.visit('/');
    cy.get('#1').click();
    cy.get('.modal__content').contains('Alive');
  });

  it('check close card', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/');
    cy.get('#2').click();
    cy.get('.modal_close').click();
    cy.get('.main-cards').contains('Summer');
  });

  it('check close card by modal', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/');
    cy.get('#5').click();
    cy.get('.main-modal').click();
    cy.get('.main-cards').contains('Abadango Cluster');
  });

  it('check render footer', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/forms');
    cy.visit('/');
    cy.get('#root').contains('Yuri Shpakovsky');
  });

  it('check render header', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/');
    cy.get('#root').contains('Home');
  });

  it('create card', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/');
    cy.visit('/forms');
    cy.get('#id-input').type('Yuri');
    cy.get('#surname').type('Shpakovski');
    cy.get('[type="date"]').type('1940-04-01');
    cy.get('select').select('Belarus');
    cy.get('input').eq(3).check();
    cy.get('input').eq(4).check();
    cy.get('input').eq(5).check();
    cy.get('input').eq(8).selectFile('cypress/fixtures/pict.jpg');
    cy.get('#id-submit').click();
    cy.get('.form-cards-conteiner').contains('Shpakovski');

    cy.visit('/');
    cy.get('.main-page--input').type('summer');
    cy.get('.main-page--input').should('have.value', 'summer');
    cy.get('button').click();
    cy.get('.main-cards').contains('Summer');
  });

  it('renders without crashing', () => {
    cy.visit('/');
    cy.get('#root').should('exist');
    cy.get('#root')
      .and('have.descendants', '.main-page--input')
      .and('have.descendants', '.main-page-form');
  });
});
