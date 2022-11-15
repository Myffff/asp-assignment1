let movies; // List of movies from TMDB

describe("Base tests", () => {
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
  });
  beforeEach(() => {
    cy.visit("/search");
  });

  describe("Discover Search page", () => {
    it("displays the page header", () => {
      cy.get("span").contains("MOVIE HUB");

    });

  });
  describe("events search page contains", () => {
    it("contains search input and button.", () => {
        cy.get(".search").contains("Search");
        cy.get(".search").find("svg");
    });

    it("contains switch between movies and TV series.", () => {
      cy.get("Button").contains("Search Movies");
      cy.get("Button").contains("Search TV Series");
    });
  });

});

// use filtering.cy.js