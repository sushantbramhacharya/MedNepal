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
            rater:String,
            rate:Number
        }
    ],
    inStock:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const medModel=model('Med',medSchema);

