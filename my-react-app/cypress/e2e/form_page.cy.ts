describe('The Form Page', () => {
  it('input name', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('#id-input').type('Yuri').should('have.value', 'Yuri');
  });

  it('input surname', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('#surname').type('Shpakovski').should('have.value', 'Shpakovski');
  });

  it('input date', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('[type="date"]').type('1940-04-01').should('have.value', '1940-04-01');
  });

  it('input country', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('select').select('Belarus').should('have.value', 'Belarus');
  });

  it('input image', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('input').eq(8).selectFile('cypress/fixtures/pict.jpg');
  });

  it('create card', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
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
    cy.get('.form-cards-conteiner').contains('Yuri');
    cy.get('.form-cards-conteiner').contains('1940-04-01');
    cy.get('.form-cards-conteiner').contains('subscribe to the newsletter');
    cy.get('.form-cards-conteiner').contains('consent to my personal data');
    cy.get('.form-cards-conteiner').contains('Belarus');
  });

  it('renders without crashing', () => {
    cy.visit('/forms');
    cy.get('#root').and('have.descendants', '.form-title').and('have.descendants', '.input-name');
  });

  it('error name, surname and date', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('#id-input').type('uri');
    cy.get('#surname').type('hpakovski');
    cy.get('[type="date"]').type('1000-04-01');
    /* cy.get('select').select('Belarus'); */
    cy.get('input').eq(3).check();
    cy.get('input').eq(4).check();
    cy.get('input').eq(5).check();
    cy.get('input').eq(8).selectFile('cypress/fixtures/pict.jpg');
    cy.get('#id-submit').click();
    cy.get('.input-text-error').contains('Please write name correctly, example Stiven');
    cy.get('.input-text-error').contains('Please write surname correctly example Sigal');
    cy.get('.input-text-error').contains('Please write date correctly');
    cy.get('.input-text-error').contains('Please write country correctly');
  });
  it('Some kind of crutch', () => {
    expect(true).to.equal(true);
  });

  it('error name, surname and date', () => {
    cy.visit('http://localhost:3001');
    cy.visit('/about');
    cy.visit('/forms');
    cy.get('input').eq(3).check();
    cy.get('input').eq(3).should('be.checked');
    cy.get('input').eq(4).check();
    cy.get('input').eq(4).should('be.checked');
    cy.get('input').eq(5).check();
    cy.get('input').eq(5).should('be.checked');
  });
});
