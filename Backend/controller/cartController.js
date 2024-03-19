import asyncHandler from "../middlewares/asyncHandler.js";
import { User } from "../models/userModel.js";
export const addToCart = asyncHandler(async (req, res) => {
  const {
    medId,
    qty,
    price,
    shippingPrice,
    totalPrice,
    name,
    image,
    description,
    pricePerMed,
  } = req.body;
  //inserting into user cart
  //req._id is user id from auth middleware

  const user = await User.findById(req.user._id);
  const existingCartItemIndex = user.cart.findIndex((cartItem) => {
    return String(cartItem.medId) === medId;
  });
  console.log(existingCartItemIndex);
  //returns -1 if not found
  if (existingCartItemIndex === -1) {
    user.cart.push({
      name,
      image,
      description,
      pricePerMed,
      medId,
      qty,
      totalPrice,
    });
  } else {
    user.cart[existingCartItemIndex].qty = qty;
    user.cart[existingCartItemIndex].totalPrice = totalPrice;
    user.cart[existingCartItemIndex].name = name;
    user.cart[existingCartItemIndex].image = image;
    user.cart[existingCartItemIndex].description = description;
    user.cart[existingCartItemIndex].pricePerMed = pricePerMed;
  }
  await user.save();
  res.json(user.cart);
});

export const fetchCartItems = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user.cart);
});

export const removeFromChart = asyncHandler(async (req,res) => {
  const { cartId } = req.body;
  try {
    const user = await User.findById(req.user._id);
    const index = user.cart.findIndex(
        (obj) => obj._id.toString() === cartId
        );
    const cart=[...user.cart];

    if (index === -1) {
        res.status(404);
        throw new Error("Not found cart item!!");
    }

    // Remove one the object from the array when hits index
    user.cart.splice(index, 1);

    await user.save();

    res.json({
      name: cart[index].name,
    });
  } catch (err) {
    throw new Error("Cannot Delete !!");
  }
});
