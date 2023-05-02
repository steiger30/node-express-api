const Movie = require("../../entity/Movie")
const InMemoryMovie = require("../../repositories/inMemory/InMemoryMovieRepository")
class UpdateMovie {
  constructor() { }

  async execute(movieId, { movie, sinopse, language, genres }) {
    const classMovie = new Movie({ movie, sinopse, language, genres })
    const movieRespository  = new InMemoryMovie()
    const movieInRespository = movieRespository.updateMovie(movieId, classMovie)
    return movieInRespository
  }
}
module.exports = UpdateMovie;