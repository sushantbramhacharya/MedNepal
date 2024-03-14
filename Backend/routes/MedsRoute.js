import { Router } from "express";
import meds from "../data/meds.js";

const router = Router();
router.route('/').get((req,res)=>{
    res.status(200).json(meds);
})

router.route('/:id').get((req,res)=>{
    const med=meds.find((med)=>med._id===Number(req.params.id))
    res.status(200).json(med);
})

export default router;