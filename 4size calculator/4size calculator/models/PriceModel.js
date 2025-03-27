const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: true,
    enum: [2.5, 4.0, 6.0, 10.0, 16.0]
  },
  price: {
    type: Number,
    required: true
  },
  coreType: {
    type: String,
    required: true,
    enum: ['2core-flat', '2core-round', '3core-round', '4core-round']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Price', priceSchema);
