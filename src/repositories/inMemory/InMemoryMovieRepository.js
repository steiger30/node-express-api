
let arrayMovie = []
let id = 0
class InMemoryMovie {

  createMovie({ movie, sinopse, language, genres }) {
    id++;
    arrayMovie.push({ id, movie, sinopse, language, genres })
    return arrayMovie
  }
  updateMovie(movieId, { movie, sinopse, language, genres }) {
    const movieIndexDelete = arrayMovie.findIndex((movie) => movie.id == movieId);
    if (movieIndexDelete !== -1) {
      arrayMovie[movieIndexDelete].movie = movie
      arrayMovie[movieIndexDelete].sinopse = sinopse
      arrayMovie[movieIndexDelete].language = language
      arrayMovie[movieIndexDelete].genres = genres
    }
    return arrayMovie
  }
  findAllMovie() {
    return arrayMovie
  }
  delete(movieId) {
    const movieIndexDelete = arrayMovie.findIndex((movie) => movie.id == movieId);
    if (movieIndexDelete !== -1) {
      arrayMovie.splice(movieIndexDelete, 1);
    }
    return arrayMovie
  }

}

module.exports = InMemoryMovie