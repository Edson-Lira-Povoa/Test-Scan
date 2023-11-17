//import { contains } from "cypress/types/jquery"

class resultPage {
    // Método para visitar a página resultado de buscar


   resultado() {

    cy.get('#ap_email').type('scan.teste.2019@gmail.com')
    cy.get('.a-button-inner > #continue').click()
    cy.get('input[type="password"]').type('Scansource2022')
    cy.get('#signInSubmit').click() 

    cy.get('#twotabsearchtextbox').type('nike')
    cy.get('#nav-search-submit-button').click()

    cy.get('[data-asin="B092R9C9JH"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-spacing-none > .a-link-normal > .a-size-base-plus').click()
    cy.get('#add-to-cart-button').click()
    
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    cy.get('[data-testid="Address_selectShipToThisAddress"]').click()
    cy.get('[type="radio').first().click()
    cy.pause()
    cy.get('.a-fixed-left-grid-inner > .a-col-right > span').click()

    cy.get('#orderSummaryPrimaryActionBtn > .a-button-inner > .a-button-input').click()
    cy.get('#submitOrderButtonId > .a-button-inner > [data-testid]').click()
    cy.get('#bottomSubmitOrderButtonId > .a-button-inner > [data-testid]').click()

    cy.get('.a-alert-content > :nth-child(1) > :nth-child(1)').should('be.visible')

    

    


    
     
        
    }


}

export default new resultPage(); 