const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const modelSchema = new Schema(
  {
    title: String,
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = model('Model', modelSchema);
