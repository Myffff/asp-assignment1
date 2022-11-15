let movies;

describe("Navigation", () => {
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
  describe("From the trending page to movies page", () => {
    it("navigates to the movies page and change browser URL", () => {
      cy.get("Button").contains("Movies").click();
      cy.url().should("include", `/movies`);
    });
  });
  describe("From the trending page to TVs page", () => {
    it("navigates to the TVs page and change browser URL", () => {
      cy.get("Button").contains("TV Series").click();
      cy.url().should("include", `/series`);
    });
  });
  describe("From the trending page to Search page", () => {
    it("navigates to the search page and change browser URL", () => {
      cy.get("Button").contains("Search").click();
      cy.url().should("include", `/search`);
    });
  });
  describe("From the trending page to top rating page", () => {
    it("navigates to the top rating page and change browser URL", () => {
      cy.get("Button").contains("Top").click();
      cy.url().should("include", `/topRating`);
    });
  });
  describe("From the trending page to people page", () => {
    it("navigates to the people page and change browser URL", () => {
      cy.get("Button").contains("People").click();
      cy.url().should("include", `/people`);
    });
  });

  describe("From the trending page movie detail modal", () => {
    it("click card and show correct containers", () => {
      cy.get(".media").eq(0).find("img").click();
      cy.get("span[class='ContentModal__title']").contains(movies[0].title||movies[0].name);
      cy.get("span[class='ContentModal__description']").contains(movies[0].overview);
      cy.get(".alice-carousel"||null);
    });
    it("jump to youtube trailer", () => {
      cy.get(".media").eq(0).find("img").click();
      cy.get("a").click();
    });
  });



});