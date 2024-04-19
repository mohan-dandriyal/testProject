const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : {type : String, require : true},
    productImage : {type : String, require : true},
    productDescription : {type : String, require : true},
    productPrice : {type : Number, require : true},
})

const ProductModule = mongoose.model("product", productSchema)

module.exports = ProductModule

