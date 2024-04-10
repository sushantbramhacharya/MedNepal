import { User } from "../models/userModel.js";
import { generateToken } from "../utils/GenerateToken.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { Med } from '../models/medModel.js';
import { Order } from '../models/orderModel.js';

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check if user exists and password matches
  if (user && user.password === password) {
    // Check if user is admin
    if (user.isAdmin) {
      generateToken(res, user._id);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        // Add any other admin-specific fields here
      });
    } else {
      res.status(403); // Forbidden status code for non-admin users
      throw new Error("Access Denied. You are not an admin.");
    }
  } else {
    res.status(400);
    throw new Error("Email or Password Incorrect");
  }
});

export const logout = asyncHandler(async (req, res) => {
    // Clear the JWT token by setting it to an empty string and expiring it immediately
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
  
    // Respond with a success message
    res.status(200).json({ message: "Logged out successfully" });
  });


export const addProduct = async (req, res) => {
  try {
    const { name, image, price, description, inStock } = req.body;

    // Create a new product instance
    const newProduct = new Med({
      name,
      image,
      price,
      description,
      inStock,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct); // Respond with the saved product
  } catch (error) {
    res.status(500).json({ error: 'Unable to add product' });
  }
};

export const deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id; 
  
      // Find the product by ID and remove it
      const deletedProduct = await Med.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to delete product' });
    }
  };
  

  export const editProduct = async (req, res) => {
    try {
      const productId = req.params.id; // Assuming the product ID is passed as a route parameter
      const { name, image, price, description, inStock } = req.body;
  
      // Find the product by ID and update it with the new information
      const updatedProduct = await Med.findByIdAndUpdate(
        productId,
        { name, image, price, description, inStock },
        { new: true } // Return the updated document
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to edit product' });
    }
  };


export const fetchAllOrders = async (req, res) => {
  try {
    // Find all orders
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch orders' });
  }
};


export const markOrderAsDelivered = async (req, res) => {
  try {
    const orderId = req.params.id; // Assuming the order ID is passed as a route parameter

    // Find the order by ID and update the delivered field to true
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { delivered: true },
      { new: true } // Return the updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ message: 'Order marked as delivered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to mark order as delivered' });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id; // Assuming the order ID is passed as a route parameter

    // Find the order by ID and remove it
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to delete order' });
  }
};
