const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import scanPage from '../pages/scan.pages';
import resultPage from '../pages/result.pages';

Given('que eu estou na página do scansource', () => {
    scanPage.visit();
});

When('realizo uma busca com a palavra videos', () =>{
scanPage.buscar()
});

Then('vizualizo o resultado da pesquisa', ()=>{
resultPage.resultado()

});

