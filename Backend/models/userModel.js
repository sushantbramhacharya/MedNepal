import {Schema,model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
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
    shippingAddress:{
        street:String,
        municipality:String,
        wardNo:Number,
        phone:Number,
        district:String
    },
},{timestamps:true})

export const User = model("User",userSchema);