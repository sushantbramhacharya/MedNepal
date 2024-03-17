import { Router } from "express";
import { loginUser } from "../controller/userController.js";

const router = Router();
router.route('/login').post(loginUser)
router.route('/').get((req,res)=>res.send("Profile Api"))
router.route('/register').post(registerUser)

export default router;