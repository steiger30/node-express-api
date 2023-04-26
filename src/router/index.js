const router = require("express")
const movieRoutes = require("./movie.routes")
const peopleRoutes = require("./people.routes")
const routes = router()

routes.use("/people", peopleRoutes)
routes.use("/movie", movieRoutes)

module.exports = routes