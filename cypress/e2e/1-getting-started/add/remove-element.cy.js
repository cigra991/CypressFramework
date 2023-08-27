/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    })

    it('click-on-add-element-button', () => {

      cy.get('button').click()
      cy.get('[onclick="addElement()"]').click()
      
    });
})