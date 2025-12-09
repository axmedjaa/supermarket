import Product from "../model/product.js"
export const createProduct=async(req,res)=>{
    try {
        const product=await Product.create(req.body)
        if(!product)return res.status(400).json({message:"product not created"})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export const getProducts=async(req,res)=>{
    try {
        const products=await Product.find()
        res.status(200).json(products)        
    } catch (error) {
     res.status(400).json({message:error.message})   
    }
}
export const getProduct=async(req,res)=>{
    try {
        const protect=await Product.findById(req.params.id)
        if(!protect)return res.status(400).json({message:"product not found"})
         res.status(200).json(protect)   
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export const updateProduct=async(req,res)=>{
    try {
        const Update=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!Update)return res.status(400).json({message:"product not updated"})
        res.status(200).json(Update)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
export const deleteProtuct=async(req,res)=>{
    try {
        const deleteProtuct=await Product.findByIdAndDelete(req.params.id)
        if(!deleteProtuct)return res.status(400).json({message:"product not deleted"})
        res.status(200).json("product deleted")
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}