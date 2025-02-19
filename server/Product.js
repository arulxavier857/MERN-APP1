const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number
})

const ProductModel = new mongoose.model("Products",ProductSchema,'Products')
module.exports = ProductModel