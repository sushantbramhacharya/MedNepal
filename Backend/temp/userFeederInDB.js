import { connect } from "mongoose";
import { DB_URL } from "../constants.js";
import { User } from "../models/userModel.js";

const connectDb = async () => {
    try {
      await connect(DB_URL);
      console.log("Connected Successfully!!");
    } catch (err) {
      console.log(err.message);
    }
  };

const userData={
    name:"Ram Shrestha",
    email:"ram@email.com",
    password:"123456"
}
connectDb()
;
(async()=>{
    try{
        const user=await User.create(userData)
    }
    catch(err)
    {
        console.log(err.message);
    }
    
    console.log("Updated Successfully");
})();
