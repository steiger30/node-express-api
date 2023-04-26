const express = require('express');
const routes = require('./router/index');

const port = 3000;

const app = express();

app.use(express.json())


app.use('/api/v1',routes)

app.listen(port, () => {
  console.log(`http://localhost:${port}/api/v1`);
})