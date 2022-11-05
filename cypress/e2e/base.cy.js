let movies; // List of movies from TMDB
let movie; //

describe("Base tests", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/trending/all/day?api_key=26ba5e77849587dbd7df199727859189&page=1`
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


