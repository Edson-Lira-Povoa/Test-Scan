const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import scanPage from '../pages/scan.pages';
import resultPage from '../pages/result.pages';

Given('que eu logo na pagina da amazon', () => {
    scanPage.visit();
});

When('realizo uma busca e adiciono no carrinho', () =>{
scanPage.buscar()
});

Then('realizo a compra com sucesso', ()=>{
resultPage.resultado()

});

