const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const savePurchase = require('./db/controllers.js');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} received from ${req.url}`);
  next();
})

app.post('/purchases', (req, res) => {
  console.log('request received', req.body);
  res.send('successfully saved data');
});

app.listen(3000, () => console.log('..app listening on port 3000!'))
