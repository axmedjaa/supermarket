import express from "express"
import { createProduct, deleteProtuct, getProduct, getProducts, updateProduct } from "../controller/product.js"
const router=express.Router()
router.post("/",createProduct)
router.get("/",getProducts)
router.get("/:id",getProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProtuct)
export default router