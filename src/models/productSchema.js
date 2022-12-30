import mongoose from "mongoose";
const { Schema, model } = mongoose;

// CREATE THE SCHEMA FOR MY DATA
const productSchema = new Schema({
    category: {type:String, required:true},
    name: {type: String, required: true},
    stock: {type: Number, required: true},
    description: {type: String, required: true},
    price: {type:Number, required: true}
})

// CREATE THE MODEL
const productModel = model('Products', productSchema);

// EXPORT THE MODEL
export default productModel