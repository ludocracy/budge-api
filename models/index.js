const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.openUri(process.env.DB_CONN, {}, (err, conn) => {
  if(err) { console.log(err) }
});

module.exports = {
  Account: require('./account'),
  Recurrence: require('./recurrence').Recurrence,
  Transaction: require('./transaction').Transaction,
};
