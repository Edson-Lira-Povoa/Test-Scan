class scanPage {
    // Método para visitar a página inicial do Google
    visit() {
        
            cy.visit('/')

    
        
    }
    buscar() {
        cy.get('#nav-link-accountList-nav-line-1').click()


       // cy.get('input[type="email"]').click()
       
        //cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
        //.invoke('removeAttr', 'target')
        //cy.get('#ap_email').type('scan.teste.2019@gmail.com')
      //  cy.get('.a-button-inner > #continue').click()
      
    }


}

export default new scanPage();