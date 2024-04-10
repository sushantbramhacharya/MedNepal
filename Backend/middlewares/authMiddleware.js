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
export const adminOnly = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, JWT_KEY);
            req.user = await User.findById(decoded.userId).select('-password -cart');

            if (req.user && req.user.isAdmin) { // Check if the user is an admin
                next();
            } else {
                res.status(403); // Forbidden status code for non-admin users
                throw new Error("Access Denied. You are not authorized as an admin.");
            }
        } catch (error) {
            res.status(401); // Unauthorized status code for invalid or expired token
            throw new Error("Invalid or Expired Token");
        }
    } else {
        res.status(401); // Unauthorized status code for missing token
        throw new Error("No user token found. Please log in.");
    }
});
