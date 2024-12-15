const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title: String,
    Description : String,
    imageUrl: String,
    price: Number,
  });
module.exports = mongoose.model('store', productSchema);