const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Decimal128,
    required: true,
  },
  inStock: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model("item", ItemSchema);