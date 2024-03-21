import  jwt  from 'jsonwebtoken';
import { JWT_KEY, PRODUCTION } from '../constants.js';
export const generateToken=async(res,userId)=>{
    const token=jwt.sign({userId},JWT_KEY,{
        expiresIn:'1d'
    });

    //after generating token setting HTTP only cookie
    //A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API; it's only sent to the server.
    res.cookie('jwt',token,{
        httpOnly:true,
        secure:PRODUCTION,
        sameSite:"lax",
        maxAge: 24*60*60*1000//1day
    })
}