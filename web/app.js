const app = require('express')();
const Axios = require('axios').default;

app.get('/', (req, res) => {
  Axios.get('http://api/message')
    .then(result => res.send(result.data.message))
    .catch(err => console.log('FAIL:', err));
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`WEB listening on port ${port}...`));
