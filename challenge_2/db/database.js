var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection established');
});

const purchaseSchema = mongoose.Schema({
  purchaseId: Number,
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  number: String,
  expiry: String,
  cvv: String,
  billzip: String
})

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports.db = db;
module.exports.Purchase = Purchase;