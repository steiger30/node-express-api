const router = require("express")

const peopleRoutes = router()

peopleRoutes.get('/', (req, res) => {
  res.send("ok");
})

module.exports = peopleRoutes