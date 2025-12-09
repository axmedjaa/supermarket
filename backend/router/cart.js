import express from "express"
import { addCart, deleteAll, deleteCart, getCart, updateCart } from "../controller/cart.js"
const router=express.Router()
router.post("/",addCart)
router.get("/:id",getCart)
router.put("/:cartId",updateCart)
router.delete("/:userId/:productId", deleteCart);
router.delete("/:userId",deleteAll)
export default router