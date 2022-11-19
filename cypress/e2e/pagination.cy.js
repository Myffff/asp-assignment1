let movies;

Cypress.config('defaultCommandTimeout', 10000);
describe("Pagination", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe("jump from first page to second page", () => {
    it("contains pagination component and show 10 pages.", () => {
      cy.get("ul");
      cy.get("li").eq(-2).find("Button").contains("10");
    });
    it("jump to second page", () => {
      cy.get("li").eq(1).find("Button").click();
      const card= cy.get(".media").eq(0);
      cy.get("li").eq(2).find("Button").click();
      cy.get(".media").eq(0).should('not.contain', card);
    });
  });



});