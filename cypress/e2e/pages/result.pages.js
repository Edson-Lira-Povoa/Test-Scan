class resultPage {
    // Método para visitar a página resultado de buscar


    resultado() {
       cy.get('.font-14-semi').should('be.visible')
     
        
    }


}

export default new resultPage();