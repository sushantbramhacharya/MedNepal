import { Schema } from "mongoose"
export const orderSchema= new Schema({

    orderedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    paymentInformation:String,
    delivered:{
        type:Boolean,
        required:true,
        default:false
    },
    order:[
    {
        medId:{
            type:Schema.Types.ObjectId,
            ref:"Med"
        },
        qty:Number,
        price:Number,
        shippingPrice:Number,
        totalPrice:Number,
    }
    ]
})

const orderModel=model("Order",orderSchema);