import User from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const registerUser=async(req,res)=>{
    const{name,email,password}=req.body
    const hassshedPassowrd=await bcrypt.hash(password,10)
    const exisist=await User.findOne({email})
    if(exisist)return res.status(400).json({message:"user already exists"})
    const user=await User.create({name,email,password:hassshedPassowrd})
    const token=jwt.sign({
        email:user.email,
        id:user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"1d"
    })
    res.status(200).json({token})
}
export const signinUser=async(req,res)=>{
    const{email,password}=req.body
    const user=await User.findOne({email})
    if(!user)return res.status(400).json({message:"user not found"})
    const comparePassword=await bcrypt.compare(password,user.password)
    if(!comparePassword) return res.status(400).json({message:"invalid password"})
    const token=jwt.sign({
        email:user.email,
        id:user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn:"1d"
    })
    res.status(200).json({token})
}