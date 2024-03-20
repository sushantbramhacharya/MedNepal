import request from 'request-promise';
import {Router} from 'express';
import { KHALTI_SECRET_KEY, SITE_URL } from '../constants.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import {User} from "../models/userModel.js";
import {userOnly} from "../middlewares/authMiddleware.js"
const router=Router();

router.route('/pay').post(userOnly,asyncHandler(async(req, res) => {
    const {
        cartId,
        cartPrice,
        cartShippingPrice,
        cartTotalPrice
      }=req.body;
      const user=await User.findById(req.user._id);
        const options = {
            'method': 'POST',
            'url': 'https://a.khalti.com/api/v2/epayment/initiate/',
            'headers': {
                'Authorization': `key ${KHALTI_SECRET_KEY}` ,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "return_url": `${SITE_URL}/api/khalti/finalize/`,
                "website_url": `${SITE_URL}/`,
                "amount": (cartTotalPrice*100),
                //needs to be changed
                "purchase_order_id": "Order01",
                "purchase_order_name": "Medicine Purchase's from Med Nepal",
                "customer_info": {
                    "name": user.name,
                    "email": user.email,
                    "phone": user?.phone?user.phone:"0000000000"
                },
                "amount_breakdown": [
                    {
                        "label": "Medicine Total Price",
                        "amount": (cartPrice*100)
                    },
                    {
                        "label": "Shipping Price",
                        "amount": (cartShippingPrice*100)
                    }
                ],
            })
        };
    
        try {
            const response = await request(options);
            res.send(response);
        } catch (error) {
            throw new Error(error.message)
        }
}));


router.route('/finalize').get(asyncHandler(async(req,res)=>{
    const {
        pidx,
        transaction_id,
        tidx,
        amount,
        total_amount,
        mobile,
        status,
        purchase_order_id,
        purchase_order_name
    }=req.query;
    res.redirect('http://localhost:5173/user/profile');
}))

export default router;