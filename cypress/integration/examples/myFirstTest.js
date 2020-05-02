/// <reference types="Cypress" />

describe('First Test scenario',function(){
    it('Navigation to URL',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index,$list)=>{
            const vegtext=$el.find('h4.product-name').text()
            if(vegtext.includes('Cashews'))
            {
                $el.find('button').click()
            }
        })

    })
})