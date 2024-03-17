import {User} from '../models/userModel.js';
import { generateToken } from '../utils/GenerateToken.js';


export const loginUser=async(req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(user?.password===password)
    {
        generateToken(res,user._id);
        //sending extra json response for storing in local storage
        res.json({
            _id:user._id,
            name:user.name,
            email:user.name,
            cart:user?.cart,
            shippingAddress:user?.shippingAddress
        })
    }
    else{
        res.status(400).json({
            error:"Incorrect email or Password"
        })
    }
}


export const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    const userExists=await User.findOne({email});
    console.log(userExists);
    if(!userExists)
    {
        const user=await User.create({name,email,password});
        generateToken(res,user._id);

        //sending extra json response for storing in local storage
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            cart:user?.cart,
            shippingAddress:user?.shippingAddress
        })
    }
    else{
        res.status(400).json({
            error:"User Already Exists!!"
        })
    }
}