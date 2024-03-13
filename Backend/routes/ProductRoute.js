import { Router } from "express";
import meds from "../data/meds.js";

const router = Router();
router.route('/').get((req,res)=>{
    res.status(200).json(meds);
})

export default router;