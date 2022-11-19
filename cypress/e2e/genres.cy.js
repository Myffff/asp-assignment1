import {filterByGenre} from '../support/e2e'

let movies;
let series;

// describe("Genres in movies page", () => {
//   before(() => {
//     cy.request(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
//         "TMDB_KEY"
//       )}&language=en-US&include_adult=false&include_video=false&page=1`
//     )
//       .its("body")
//       .then((response) => {
//         movies = response.results;
//       });
//   });
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   describe("changes on genres and page", () => {
//     beforeEach(() => {
//         cy.get("Button").contains("Movies").click();
//         cy.url().should("include", `/movie`);
//         Cypress.Commands.add('getGenre', (index) => {
//           cy.get("span[class='MuiChip-label MuiChip-labelSmall css-wjsjww-MuiChip-label']").eq(index);
//         })
//     });
//     it("contains Genres on the top of page.", () => {
//       cy.get("span[class='MuiChip-label MuiChip-labelSmall css-wjsjww-MuiChip-label']");
//     });
//     it("click comedy and it will show in the beginning of Genres list.", () => {
//       cy.getGenre(0).contains("Action");
//       cy.getGenre(3).click({force: true});
//       cy.getGenre(0).contains("Comedy");
//     });
//     it("show movies of correct selected genres", () => {
//       const matchingMovies = filterByGenre(movies, 28) // 28 is Genres id of 'Action'
//       cy.getGenre(0).click({force: true});
//       cy.get(".media").eq(0).find("b").contains(matchingMovies[0].title)
//     });
//   });

// });



describe("Genres in TV series page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        series = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe("changes on genres and page", () => {
    beforeEach(() => {
      cy.get("Button").contains("TV Series").click();
      cy.url().should("include", `/series`);
      Cypress.Commands.add('getGenre', (index) => {
        cy.get("span[class='MuiChip-label MuiChip-labelSmall css-wjsjww-MuiChip-label']").eq(index);
      })
    });
    it("contains Genres on the top of page.", () => {
      cy.get("span[class='MuiChip-label MuiChip-labelSmall css-wjsjww-MuiChip-label']");
    });
    it("click one genre and this one jump and show in the beginning of Genres list.", () => {
      cy.getGenre(0).contains("Action & Adventure");
      cy.getGenre(2).click({force: true});
      cy.getGenre(0).contains("Comedy");
    });
    it("show movies of correct selected genres", () => {
      const matchingSeries = filterByGenre(series, 10765) // 35 is Genres id of '"Sci-Fi & Fantasy"'
      cy.getGenre(0).click({force: true});
      cy.get(".media").eq(0).find("b").contains(matchingSeries[0].title||matchingSeries[0].name)
    });
  });

});