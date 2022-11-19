let movies; // List of movies from TMDB
let people;
let series;

describe("Base tests for movie page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
          "TMDB_KEY")}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
        .its("body") 
        .then((response) => {
          movies = response.results;
        });
    });
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Discover Movies page", () => {
        beforeEach(() => {
            cy.get("Button").contains("Movies").click();
            cy.url().should("include", `/movie`);
                
          });
      it("displays the page header and 20 movies per page", () => {
        cy.get("span").contains("MOVIE HUB");
        cy.get("span").contains("Movies");
        cy.get(".media").should("have.length", 20);
      });
  
      it("displays only movies shows in this page", () => {
        cy.get(".media").each(() => {
          cy.get("span.subTitle").contains("Movie")
        });
      });
  
    });
  
  });
  
  describe("Base tests for tv page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
          "TMDB_KEY")}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
        .its("body") 
        .then((response) => {
          series = response.results;
        });
    });
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Discover TV series page", () => {
      beforeEach(() => {
        cy.get("Button").contains("TV Series").click();
        cy.url().should("include", `/series`);
                
      });
      it("displays the page header and 20 TVs per page", () => {
        cy.get("span").contains("Discover TV Series");
        cy.get(".media").should("have.length", 20);
      });
  
      it("displays only TVs shows in this page", () => {
        cy.get(".media").each(() => {
          cy.get("span.subTitle").contains("TV Series")
        });
      });
  
    });
  
  });
  
  describe("Base tests for people page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
          "TMDB_KEY")}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
        .its("body") 
        .then((response) => {
          people = response.results;
        });
    });
    beforeEach(() => {
      cy.visit("/");
      
    });
  
    describe("Discover People page", () => {
      beforeEach(() => {
        cy.get("Button").contains("People").click();
        cy.url().should("include", `/people`);
            
      });
      it("displays the page header and 20 people per page", () => {
        cy.get("span").contains("People");
        cy.get(".media").should("have.length", 20);
      });
  
      it("displays person name in the card", () => {
        cy.get(".media").each(($card, index) => {
          cy.wrap($card).find("b").contains(people[index].name);
        });
      });
  
    });
  
  });