const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  pin: {
    type: Number,
    required: true,
  },
  salary: {
    type: String,
    required: true,
    trim: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
