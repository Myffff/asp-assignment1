let movies; // List of movies from TMDB
let movie; //

describe("Base tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${Cypress.env(
        "TMDB_KEY")}&page=1`
    )
      .its("body") 
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Discover Trending page", () => {
    it("displays the page header and 20 movies per page", () => {
      cy.get("span").contains("MOVIE HUB");
      cy.get(".media").should("have.length", 20);
    });

    it("displays the correct movie titles", () => {
      cy.get(".media").each(($card, index) => {
        cy.wrap($card).find("p").contains(movies[index].title||movies[index].name);
      });
    });

  });

});

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
    cy.visit("/movie");
  });

  describe("Discover Movies page", () => {
    it("displays the page header and 20 movies per page", () => {
      cy.get("span").contains("MOVIE HUB");
      cy.get(".media").should("have.length", 20);
    });

    it("displays only movies shows in this page", () => {
      cy.get(".media").each(() => {
        // cy.wrap($card).find("p").contains(movies[index].title||movies[index].name);
        cy.get("span.subTitle").contains("Movie")
      });
    });

  });

});
