import {model, Schema} from 'mongoose';
const medSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    rating:[
        {
            review:String,
            rater:String,
            rate:Number,
            raterId:{
                type:Schema.Types.ObjectId,
                ref:"User"
            },
            date:{
                type:String,
                default:Date.now
            }
        }
    ],
    inStock:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const Med=model('Med',medSchema);

