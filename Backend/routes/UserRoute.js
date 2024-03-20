import { Router } from "express";
import { loginUser ,registerUser,logoutUser, updateShipping} from "../controller/userController.js";
import { userOnly } from "../middlewares/authMiddleware.js";

const router = Router();
router.route('/login').post(loginUser);
router.route('/').get((req,res)=>res.send("Profile Api"));
router.route('/register').post(registerUser);
router.route('/logout').delete(logoutUser);
router.route('/shipping').put(userOnly,updateShipping);

export default router;