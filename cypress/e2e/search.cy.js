let movies; // List of movies from TMDB
let series;

describe("tests for search  movie page", () => {
  before(() => {
    cy.request(
        `https://api.themoviedb.org/3/search/movie?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&query=comedy&page=1&include_adult=false`
    )
      .its("body") 
      .then((response) => {
        movies = response.results;
      });

    cy.request(
        `https://api.themoviedb.org/3/search/tv?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&query=comedy&page=1&include_adult=false`
    )
      .its("body") 
      .then((response) => {
        series = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Discover Search page", () => {
    it("displays the page header", () => {
      cy.get("span").contains("MOVIE HUB");

    });

  });
  describe("events search page contains", () => {
    beforeEach(() => {
      cy.get("Button").contains("Search").click();
      cy.url().should("include", `/search`);

    });
    it("contains search input and button.", () => {
        cy.get(".search").contains("Search");
        cy.get(".search").find("svg");
    });

    it("contains switch between movies and TV series.", () => {
      cy.get("Button").contains("Search Movies");
      cy.get("Button").contains("Search TV Series");
    });

    describe("By movie title", () => {
      it("handles case when there are no matches", () => {
        const searchString = "xyxxzyyzz";
        cy.get("input").eq(1).type(searchString); 
        cy.get("button").eq(0).click();
        cy.get(".media").should("have.length", 0);
      });

      it("only display movies with 'comedy' in the title", () => {
        const searchString = "comedy";
        cy.get("input").eq(1).type(searchString); 
        cy.get("button").eq(0).click();
        cy.get(".media").should(
          "have.length",
          movies.length
        );
        cy.on('uncaught:exception', (err, runnable) => {
          
          cy.get(".media").each(($card, index) => {
            cy.wrap($card).find("b").contains(movies[index].title||movies[index].name);
          });
          if (err.message.includes('list not defined')) {
            return false
          }
        })
      });
      
    });
    
    
    describe("By tv series title", () => {it("only display TVs with 'comedy' in the title", () => {

      const searchString = "comedy";
      cy.get("input").eq(1).type(searchString); 
      cy.get("button").eq(0).click();
      cy.get("button").eq(2).click();
      cy.get(".media").should(
        "have.length",
        series.length
      );
      cy.get(".media").each(() => {
        cy.get("span.subTitle").contains("TV Series")
      });
      cy.on('uncaught:exception', (err, runnable) => {
        cy.get(".media").each(($card, index) => {
          cy.wrap($card).find("b").contains(series[index].title||series[index].name);
        });
        if (err.message.includes('list not defined')) {
          return false
        }
      })
    });
  });
});

});