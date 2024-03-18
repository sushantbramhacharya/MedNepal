import { Router } from "express";
import { addToCart } from "../controller/cartController.js";
import { userOnly } from "../middlewares/authMiddleware.js";

const router=Router();
router.route('/addtocart').post(userOnly,addToCart);

export default router;