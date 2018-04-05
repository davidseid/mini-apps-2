const {db, Purchase} = require('./database.js');


const savePurchase = (data) => {
  const purchase = new Purchase(data);
  purchase.save((err, purchase) => {
    if (err) console.error(err);
  });
}

module.exports.savePurchase = savePurchase;