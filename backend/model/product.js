import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String,required: true },
  stock: { type: Number, default: 0 },
  category: { type: String },
  tags: [{ type: String }]  
}, { timestamps: true });
const product=mongoose.model("product",productSchema)
export default product
