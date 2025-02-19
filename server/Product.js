const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:String,
    quantity:Number,
    price:Number
})

const ProductModel = mongoose.model("Products",ProductSchema,'Products')
exports.module = ProductModel