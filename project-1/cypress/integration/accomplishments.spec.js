/// <reference types="cypress" />

describe("accomplishments dashboard",()=>{
    beforeEach(()=>{
        cy.visit("/accomplishments")
    })

    it("showcase error message if info is missing",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("triple double")
        cy.contains("Submit Accomplishment").click()
        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("should display validation component if all info is completed",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("triple double")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("should return back to accomplishment dashboard empty when go back is clicked",()=>{
        cy.get("[data-cy='accomplishment-title-input']").type("My Basketball Accomplishment")
        cy.get("[data-cy='accomplishment-input']").type("triple double")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()
        cy.contains("Go Back").click()
        cy.contains("h2","Accomplishment").should("be.visible")
        cy.get("[data-cy='accomplishment-title-input']").should("have.value","")
        cy.get("[data-cy='accomplishment-input']").should("have.value","")
        cy.get("[type='checkbox']").should("not.be.checked")
    })
})