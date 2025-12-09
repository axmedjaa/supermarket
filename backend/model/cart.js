import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
}, { timestamps: true })
const cart = mongoose.model("cart", cartSchema)
export default cart