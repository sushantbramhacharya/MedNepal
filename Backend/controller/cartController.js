import asyncHandler from '../middlewares/asyncHandler.js';
import { User } from "../models/userModel.js";
export const addToCart=asyncHandler(async(req,res)=>{
    const {
        medId,
        qty,
        price,
        shippingPrice,
        totalPrice,
        name,
        image,
        description,
        pricePerMed,
    }=req.body;
    //inserting into user cart 
    //req._id is user id from auth middleware
    
    const user=await User.findById(req.user._id);
    const existingCartItemIndex = user.cart.findIndex(cartItem => {
        
        return String(cartItem.medId) === medId});
    console.log(existingCartItemIndex);
    //returns -1 if not found
    if(existingCartItemIndex===-1)
    {
    user.cart.push({
        name,
        image,
        description,
        pricePerMed,
        medId,
        qty,
        price,
        shippingPrice,
        totalPrice
    });
    } else{
        user.cart[existingCartItemIndex].qty=qty;
        user.cart[existingCartItemIndex].price=price;
        user.cart[existingCartItemIndex].shippingPrice=shippingPrice;
        user.cart[existingCartItemIndex].totalPrice=totalPrice;
        user.cart[existingCartItemIndex].name=name;
        user.cart[existingCartItemIndex].image=image;
        user.cart[existingCartItemIndex].description=description;
        user.cart[existingCartItemIndex].pricePerMed=pricePerMed;
    }         
    await user.save();
    res.json(user.cart);
})

export const fetchCartItems=asyncHandler(async(req,res)=>{
    const user=await User.findById(req.user._id);
    res.json(user.cart);
})