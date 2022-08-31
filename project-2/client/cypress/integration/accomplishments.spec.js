/// <reference types ="cypress"/>

describe("accomplishments dashboard",()=>{
    beforeEach(()=>{
        cy.visit("/accomplishments")
    })
//http request
    it("display appropiate content error", ()=>{
        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
        
    })
//Mock
    it("display appropiate content error", ()=>{
        cy.intercept('POST',"http://localhost:4000/",(req)=>{
            req.reply((res)=>{
                res.send({
                    msg:"Your content is not appropriate"
                })
            })
        })
        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
        
    })


    

})
