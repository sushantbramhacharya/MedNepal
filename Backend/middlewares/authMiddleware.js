import { JWT_KEY } from "../constants.js";
import { User } from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";

export const userOnly= asyncHandler(async (req,res,next)=>{
    let token;
    token=req.cookies.jwt;

    if(token)
    {
        try{
            const decoded=jwt.verify(token,JWT_KEY);
            req.user=await User.findById(decoded.userId).select('-password -cart');
            if(req.user)
            {
                next();
            }
            else{
                res.status(404);//auth required error
                throw new Error("User doesnt Exists");
            }
        }
        catch(error)
        {
            res.status(401);//auth required error
            throw new Error("Invalid or Expired Token");
        }
    }
    else{
        res.status(401);//auth required error
        throw new Error("No user token Please Login");
    }
})