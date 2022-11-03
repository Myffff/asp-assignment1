export const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

export const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

export const filterByGenreAndTitle = (movieList, genreId, string) =>
  movieList.filter((m) => (m.genre_ids.includes(genreId) && m.title.toLowerCase().search(string) !== -1));