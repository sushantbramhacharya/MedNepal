import {Schema,model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cart:[
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
    ],
    shippingAddress:{
        street:String,
        municipality:String,
        wardNo:Number,
        district:String
    },
})

export const User = model("User",userSchema);