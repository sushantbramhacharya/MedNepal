import { Router, request, response } from "express";

import {fetchMeds,fetchMedsByID,fetchMedsSorted } from "../controller/medController.js";

import {userOnly} from '../middlewares/authMiddleware.js';

const router = Router();
router.route('/').get(fetchMeds)
router.route('/sort/:sort').get(fetchMedsSorted)

router.route('/:id').get(fetchMedsByID)
router.route('/review').post(
    (req,res)=>{
        res.json({test:"test"})
    }
)

export default router;