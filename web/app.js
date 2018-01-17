const app = require('express')();

app.get('/', (req, res) =>
  res.send('Hello, Docker!'));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Listening on port ${port}...`));