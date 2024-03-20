import { User } from "../models/userModel.js";
import {Order} from "../models/orderModel.js"
import { generateToken } from "../utils/GenerateToken.js";
import asyncHandler from "../middlewares/asyncHandler.js";

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user?.password === password) {
    generateToken(res, user._id);
    //sending extra json response for storing in local storage
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      cart: user?.cart,
      shippingAddress: user?.shippingAddress,
    });
  } else {
    res.status(400);
    throw new Error("Username or Password Incorrect");
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  console.log(userExists);
  if (!userExists) {
    const user = await User.create({ name, email, password });
    generateToken(res, user._id);

    //sending extra json response for storing in local storage
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      cart: user?.cart,
      shippingAddress: user?.shippingAddress,
    });
  } else {
    res.status(400);
    throw new Error("User Already Exists");
  }
});

export const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,

    // When you pass 0 as an argument to create a Date object in JavaScript, it represents the date January 1, 1970, 00:00:00 UTC, which is also known as the Unix epoch.
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out Successfully" });
};

export const updateShipping = asyncHandler(async (req, res) => {
  const { street, municipality, wardNo, phone, district } = req.body;
  const user = await User.findById(req.user._id);
  console.log(user);
  user.shippingAddress={
    street,
    municipality,
    wardNo,
    phone,
    district
};
  const updatedUser=await user.save();
  res.json(updatedUser.shippingAddress);
});

export const fetchOrder = asyncHandler( async (req, res) => {
  const order=await Order.find({userId:req.user._id});
  res.json(order);
});
