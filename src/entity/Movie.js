class Movie {
  movie;
  sinopse;
  language;
  genres;

  constructor({ movie, sinopse, language, genres }) {
    this.movie = movie;
    this.sinopse = sinopse;
    this.language = language;
    this.genres = genres;
  }
}

module.exports = Movie