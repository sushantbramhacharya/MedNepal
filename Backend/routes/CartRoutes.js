import { Router } from "express";
import { addToCart, fetchCartItems, removeFromChart } from "../controller/cartController.js";
import { userOnly } from "../middlewares/authMiddleware.js";

const router=Router();
router.route('/addtocart').post(userOnly,addToCart);
router.route('/getcarts').get(userOnly,fetchCartItems);
router.route('/removefromcart').delete(userOnly,removeFromChart);

export default router;