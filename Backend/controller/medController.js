import { Med } from "../models/medModel.js";
import asyncHandler from '../middlewares/asyncHandler.js';
import { User } from "../models/userModel.js";

export const fetchMeds = asyncHandler(async (req, res, next) => {
    const meds = await Med.find({});
    res.status(200).json(meds);
});

export const fetchMedsByID=asyncHandler(async(req,res)=>{
    const med=await Med.findById(req.params.id);
    res.status(200).json(med);
})
export const fetchMedsSorted=asyncHandler(async(req,res)=>{
    const meds=await Med.find().sort({price:Number(req.params.sort)});
    res.status(200).json(meds);
})
