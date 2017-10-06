const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.openUri(process.env.DB_CONN, {}, (err, conn) => {
  if(err) { console.log(err) }
});

module.exports = {
  Account: require('./account'),
  Transaction: require('./transaction').Transaction,
  Recurrence: require('./recurrence').Recurrence,
};
