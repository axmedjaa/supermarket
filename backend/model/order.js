import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, default: "pending" }
}, { timestamps: true })
const order = mongoose.model("order", orderSchema)
export default order