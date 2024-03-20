import { Schema,model } from "mongoose"
export const orderSchema= new Schema({
        userId:{
            type:Schema.Types.ObjectId,
            ref:"Med"
            },
        order:[
            {
                name:String,
                image:String,
                description:String,
                pricePerMed:Number,
                medId:{
                    type:Schema.Types.ObjectId,
                    ref:"Med"
                },
                qty:Number,
                totalPrice:Number,
            }
        ],
        paymentVerification:{
            pidx: String,
            total_amount: Number,
            status: String,
            transaction_id: String,
            fee: Number,
            refunded: Boolean
         },
         paymentResponse:{
            pidx:String,
            transaction_id:String,
            tidx:String,
            amount:Number,
            total_amount:Number,
            mobile:String,
            status:String,
            purchase_order_id:String,
            purchase_order_name:String
         },
        delivered:{
            type:Boolean,
            default:false
        }
},{timestamps:true})

export const Order=model("Order",orderSchema);