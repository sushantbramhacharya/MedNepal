import { medModel } from "../models/medModel.js";

export const fetchMeds=async(req,res)=>{
    const meds=await medModel.find({});
    res.status(200).json(meds);
}

export const fetchMedsByID=async(req,res)=>{
    const med=meds.find((med)=>med._id===Number(req.params.id))

    res.status(200).json(med);
}