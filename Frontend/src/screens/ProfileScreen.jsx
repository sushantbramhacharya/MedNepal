import React,{useEffect} from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const {user} = useSelector((state)=>state.userSlice);
    const navigator=useNavigate();
    useEffect(()=>{
        if(Object.keys(user).length<1)
        {
            navigator('/login')
        }
    },[user])

  const userD = {
    name: "sushant",
    email: "email@email.com",
    password: 123,
    cart: [
      {
        name: "Paracetamol",
        qty: 3,
        price: 100,
      },
      {
        name: "Sodium Hydrocloride",
        qty: 3,
        price: 100,
      },
    ],
    shippingAddress: {
      street: "Sundhara",
      municipality: "Lalitpur Metropolitan City",
      wardNo: 12,
      district: "Lalitpur",
    },
    orders: [
      {
        orderId: 1,
        paymentInformation: "paymentInfo",
        delivered: false,
        order: [
          {
            name: "Paracetamol",
            qty: 3,
            price: 100,
          },
          {
            name: "Sodium Hydrocloride",
            qty: 3,
            price: 100,
          },
        ],
      },
    ],
  };

  const handleDeleteCartItem = (index) => {
    
  };

  return (
    <div className="profile-screen bg-gray-100 min-h-screen py-12">
      <h1 className="text-3xl text-center mb-6">User Profile</h1>
      <div
        className="user-profile bg-white rounded-lg shadow-lg p-6 mx-auto max-w-4xl"
      >
        {" "}
        {/* Adjusted max-w-4xl */}
        <h2 className="text-xl font-semibold mb-4">Name: {userD.name.toUpperCase()}</h2>
        <p className="text-gray-600">Email: {userD.email}</p>

        <div className="cart mt-4">
          <h3 className="text-lg font-semibold mb-2">Cart</h3>
          <div className="grid grid-cols-2 gap-4">
            {userD.cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-lg shadow-lg p-4"
              >
                <img
                  src={`images/${item.name.toLowerCase()}.jpg`}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-600">
                    {item.qty}x ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteCartItem(index)}
                  className="ml-auto focus:outline-none"
                >
                  <FaTrashAlt className="text-red-500 cursor-pointer" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="shipping-address mt-4 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
          <div className="text-gray-600">
            <p>
              <span className="font-semibold">Street:</span>{" "}
              {userD.shippingAddress.street}
            </p>
            <p>
              <span className="font-semibold">Municipality:</span>{" "}
              {userD.shippingAddress.municipality}
            </p>
            <p>
              <span className="font-semibold">Ward No:</span>{" "}
              {userD.shippingAddress.wardNo}
            </p>
            <p>
              <span className="font-semibold">District:</span>{" "}
              {userD.shippingAddress.district}
            </p>
          </div>
        </div>
        <div className="orders mt-4">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          {userD.orders.map((order) => (
            <div
              key={order.orderId}
              className="order mb-4 bg-white rounded-lg shadow-lg p-4"
            >
              <p className="text-gray-600">Order ID: {order.orderId}</p>
              <p className="text-gray-600">
                Payment Information: {order.paymentInformation}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {order.order.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      item.delivered ? "bg-green-200" : "bg-red-200"
                    } rounded-lg p-2`}
                  >
                    <img
                      src={`images/${item.name.toLowerCase()}.jpg`}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-2">
                      <p className="text-gray-800">{item.name}</p>
                      <p className="text-gray-600">
                        {item.qty}x ${item.price}
                      </p>
                      {item.delivered ? (
                        <p className="text-green-700 font-semibold">
                          Delivered
                        </p>
                      ) : (
                        <p className="text-red-700 font-semibold">
                          Not Delivered
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
