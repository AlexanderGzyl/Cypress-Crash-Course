/// <reference types="cypress" />

describe("Locators",()=>{
    //runs before each test
    beforeEach(()=>{
        cy.visit("/elements")
    })

    it("locating elements with the get command",()=>{
        //get all elements by tag name
        cy.get("button");
        //by class name
        cy.get(".btn-with-class")
        
        //Get all elements with speific class
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        //get all elements by id
        cy.get("#btn-with-id")

        //get all elements by specific attribute
        cy.get("[type='submit']")

        // Get all elements by button tag name
        cy.get("button.Elements-btn")

        //Get all elelmenst by tag name and class and  id
        cy.get("button.Elements-btn#btn-with-id")

        // get all elements by tag, class and type attribute
        cy.get("button.Elements-btn[type='submit']")
        //Get all elements by with specific data test id-cy
        cy.getByTestId('btn-id-1')
    })

    it("locating elements with contains",()=>{
        //get elelment by text
        cy.contains("Unique Text")
        //with selector
        cy.contains("[type='submit']","Not Unique Text")
        //
    })

    it("locating elements with find",()=>{
        cy.get("#form-1").find(".btn-1")
        cy.get("#form-1").find(".btn-2")
    })


})