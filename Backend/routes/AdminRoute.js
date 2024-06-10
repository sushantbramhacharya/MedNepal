import { Router } from "express";
import { login, logout, fetchAllOrders, markOrderAsDelivered, addProduct, editProduct, deleteProduct } from "../controller/adminController.js";
import { adminOnly } from "../middlewares/authMiddleware.js";

const router = Router();

router.route('/').post(login).delete(logout);
router.route('/orders').get(adminOnly, fetchAllOrders);
router.route('/orders/:id/mark-delivered').put(adminOnly, markOrderAsDelivered);
router.route('/products').post(adminOnly, addProduct); 
router.route('/products/:id').put(adminOnly, editProduct); 
router.route('/products/:id').delete(adminOnly, deleteProduct); 

export default router;
