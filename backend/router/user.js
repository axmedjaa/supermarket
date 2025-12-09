import express  from "express"
import { registerUser, signinUser } from "../controller/user.js"
import jwt from "jsonwebtoken"
import User from "../model/user.js"
const router=express.Router()
router.post("/register",registerUser)
router.post("/signin",signinUser)
router.get("/profile",async(req,res)=>{
    const authHeader=req.headers.authorization
    if(!authHeader)return res.status(401).json({message:"unauthorized"})
    const token=authHeader.split(" ")[1]
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    const user=await User.findById(decoded.id).select("-password")
    res.status(200).json(user)
})
export default router