import request from 'request-promise';
import {Router} from 'express';
import { KHALTI_SECRET_KEY } from '../constants.js';
import asyncHandler from '../middlewares/asyncHandler.js';
const router=Router();

router.route('/pay').post(asyncHandler(async(req, res) => {
        const options = {
            'method': 'POST',
            'url': 'https://a.khalti.com/api/v2/epayment/initiate/',
            'headers': {
                'Authorization': `key ${KHALTI_SECRET_KEY}` ,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "return_url": "http://example.com/",
                "website_url": "https://example.com/",
                "amount": "1000",
                "purchase_order_id": "Order01",
                "purchase_order_name": "test",
                "customer_info": {
                    "name": "Ram Bahadur",
                    "email": "test@khalti.com",
                    "phone": "9800000001"
                }
            })
        };
    
        try {
            const response = await request(options);
            res.send(response);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
}));

export default router;