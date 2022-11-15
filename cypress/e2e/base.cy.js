let movies; // List of movies from TMDB


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
    it("displays the page header and 20 shows per page", () => {
      cy.get("span").contains("MOVIE HUB");
      cy.get(".media").should("have.length", 20);
    });
    it("displays the correct titles", () => {
      cy.get(".media").each(($card, index) => {
        cy.wrap($card).find("b").contains(movies[index].title||movies[index].name);
      });
    });
    
    it("displays the correct time", () => {
      cy.get(".media").each(($card, index) => {
        cy.wrap($card).get("span").contains(movies[index].first_air_date || movies[index].release_date);

      });
    });

  });

});

