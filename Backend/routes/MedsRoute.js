import { Router } from "express";

import {fetchMeds,fetchMedsByID,fetchMedsSorted } from "../controller/medController.js";

import {userOnly} from '../middlewares/authMiddleware.js';

const router = Router();
router.route('/').get(fetchMeds)
router.route('/sort/:sort').get(fetchMedsSorted)

router.route('/:id').get(fetchMedsByID)

export default router;