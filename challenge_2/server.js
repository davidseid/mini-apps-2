const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
})

app.post('/purchases', (req, res) => {
  console.log('request received');
  console.log(req.body);
});

app.listen(3000, () => console.log('..app listening on port 3000!'))
