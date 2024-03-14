import { medModel } from "../models/medModel.js";

export const fetchMeds=async(req,res)=>{
    const meds=await medModel.find({});
    res.status(200).json(meds);
}

export const fetchMedsByID=async(req,res)=>{
    const med=await medModel.findById(req.params.id);
    res.status(200).json(med);
}
export const fetchMedsSorted=async(req,res)=>{
    const meds=await medModel.find().sort({price:Number(req.params.sort)});
    res.status(200).json(meds);
}