const Schema = require('mongoose').Schema;

const TransactionSchema = new Schema({
  name: String,
  amount: Number,
  tags: [String],
});

module.export.TransactionSchema = TransactionSchema;
