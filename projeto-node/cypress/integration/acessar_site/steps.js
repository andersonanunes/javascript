/// <reference types="cypress" />

Given(/^que acesso a aplicação$/, () => {
	cy.viewport(1280, 720) // exibe em desktop
	cy.visit('/');
});

When(/^seleciono a página onde aceita$/, () => {
	cy.contains('Pra Você').click();
});

Then(/^valido se o mapa do Google aparece na tela$/, () => {
	cy.get('.vr-button--negative').click();
	// assertions
	cy.get('#map').should('be.visible');
	cy.get('.form-search-estab').should('exist');
});