const mongoose = require('mongoose'),
  TransactionSchema = require('transaction'),
  Schema = mongoose.Schema;

const RecurrenceSchema = new Schema({
  name: String,
  start_date: { type: Date, required: true },
  end_date: Date,
  period: { type: String, default: 'once' },
  events: [TransactionSchema],
  default_transaction: TransactionSchema,
});

module.export = {
  Recurrence: mongoose.model('Recurrence', RecurrenceSchema),
  Transaction: mongoose.model('Transaction', TransactionSchema),
};
