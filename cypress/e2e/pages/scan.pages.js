class scanPage {
    // Método para visitar a página inicial do Google
    visit() {
        cy.visit('/')
    }
    buscar() {
        cy.get('#search')
        .type('videos')
       cy.get('.search-button > .entered')
      .invoke('removeAttr', 'target').click()
      
    }


}

export default new scanPage();