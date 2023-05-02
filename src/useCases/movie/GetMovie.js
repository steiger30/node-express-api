const Movie = require("../../entity/Movie")
const InMemoryMovie = require("../../repositories/inMemory/InMemoryMovieRepository")

class GetMovie {
  async execute() {
    const movieRespository = new InMemoryMovie()
    const movieInRespository = movieRespository.findAllMovie()
    return movieInRespository;
  }
}

module.exports = GetMovie