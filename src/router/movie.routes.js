const router = require("express")
const CreateMovie = require("../useCases/movie/CreateMovie")
const GetMovie = require("../useCases/movie/GetMovie")
const UpdateMovie = require("../useCases/movie/UpdateMovie")
const DeleteMovie = require("../useCases/movie/DeleteMovie")
const movieRoutes = router()

movieRoutes.get('/', (req, res) => {
  const getMovie = new GetMovie();
  getMovie.execute().then((movieInRespository) => {
    res.json(movieInRespository);
  })
})
movieRoutes.post('/', (req, res) => {
  const { movie, sinopse, language, genres } = req.body;
  const createMovie = new CreateMovie()
  createMovie.execute({ movie, sinopse, language, genres }).then((movieInRespository) => {
    res.json(movieInRespository);
  });
})
movieRoutes.put('/:id', (req, res) => {
  const movieId = req.params.id;
  const { movie, sinopse, language, genres } = req.body;
  const updateMovie = new UpdateMovie()
  updateMovie.execute(movieId, { movie, sinopse, language, genres }).then((movieInRespository) => {
    res.json(movieInRespository);
  });
})
movieRoutes.delete('/:id', (req, res) => {
  const movieId = req.params.id;
  const celeteMovie = new DeleteMovie()
  celeteMovie.execute(movieId).then((movieInRespository) => {
    res.json(movieInRespository);
  });
})

module.exports = movieRoutes