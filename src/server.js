const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send("Olá mundo!")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})