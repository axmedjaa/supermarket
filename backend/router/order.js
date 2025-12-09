import express from "express"
import { addOrder, deleteAll, deleteOrder, getOrders, getUserOrders, updateOrder } from "../controller/order.js"
const router=express.Router()
router.post("/",addOrder)
router.get("/",getOrders)
router.get("/:userId",getUserOrders)
router.put("/:id",updateOrder)
router.delete("/:orderId",deleteOrder)
router.delete("/delete/:id",deleteAll)
export default router