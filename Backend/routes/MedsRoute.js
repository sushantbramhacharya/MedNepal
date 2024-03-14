import { Router } from "express";

import {fetchMeds,fetchMedsByID } from "../controller/medController.js";

const router = Router();
router.route('/').get(fetchMeds)

router.route('/:id').get(fetchMedsByID)

export default router;