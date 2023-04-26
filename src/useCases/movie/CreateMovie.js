const Movie = require("../../entity/Movie")
const InMemoryMovie = require("../../repositories/inMemory/InMemoryMovieRespository")
class CreateMovie {
  constructor() { }
  async execute({ movie, sinopse, language, genres }) {
    const classMovie = new Movie({ movie, sinopse, language, genres })
    const movieRespository  = new InMemoryMovie()
    const movieInRespository = movieRespository.createMovie(classMovie)
    return movieInRespository

  }
}
module.exports = CreateMovie;