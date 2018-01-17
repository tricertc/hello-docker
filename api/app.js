const app = require('express')();

app.get('/message', (req, res) =>
  res.json({ message: 'Hello, Docker - from the API!' }));

const port = process.env.PORT || 3000;
app.listen(port,
  () => console.log(`API listening on port ${port}...`));
