const Movie = require("../../entity/Movie")
const InMemoryMovie = require("../../repositories/inMemory/InMemoryMovieRepository")

class DeleteMovie {
  async execute(movieId) {
    const movieRespository = new InMemoryMovie()
    const movies = movieRespository.delete(movieId)
    return movies
  }
}
module.exports = DeleteMovie