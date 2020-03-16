const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    default: "uncategorized",
    lowercase: true,
  },
  inStock: {
    type: Number,
    required: true,
  }
});

module.exports = User = mongoose.model("item", ItemSchema);