import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useOrderFetchQuery } from "../api/userApi";
const ShowOrders = () => {
  // const { user } = useSelector((state) => state.userSlice);
  const { data: orders, isLoading, isError, error } = useOrderFetchQuery();

  

  return (
    <div className="flex justify-center">
      <div className="orders mt-4 w-[80vw]">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Error</h1>
        ) : (
          <>
            <h3 className="text-2xl font-semibold mb-2">
              Orders ({orders.length})
            </h3>
            {orders.map((order) => (
              <div key={order.orderId}
                className="order mb-4 bg-white rounded-lg shadow-lg p-4"
              >
                <p className="text-gray-600">Order ID: {order._id}</p>
                <p className="text-gray-600">Order Date: {(()=>{
                  const date=new Date(order.createdAt);
                  return date.toDateString();
                })()}</p>
                <p className="text-gray-600">
                  Payment Information: {order.paymentResponse.status}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {order.order.map((item, index) => (
                    <div
                      key={item._id}
                      className="flex items-center rounded-lg p-2"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="ml-2">
                        <p className="text-gray-800">{item.name}</p>
                        <p className="text-gray-600">
                          {item.qty}x Rs.{item.pricePerMed} = Rs.
                          {item.totalPrice}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="col-span-2  bg-slate-400 p-2 rounded-lg  gap-5 items-center">
                    <p className="text-white">
                      Price: Rs.
                      {order.order.reduce(
                        (acc, item) => acc + item.totalPrice,
                        0
                      )}
                    </p>
                    <p className="text-white">
                      Shipping Price: Rs.
                      {order.order.reduce(
                        (acc, item) => acc + item.totalPrice,
                        0
                      ) < 800
                        ? 100
                        : 0}
                    </p>
                    <p className="text-white">
                      Total Price: Rs.
                      {order.order.reduce(
                        (acc, item) => acc + item.totalPrice,
                        0
                      ) < 800
                        ? order.order.reduce(
                            (acc, item) => acc + item.totalPrice,
                            0
                          ) + 100
                        : order.order.reduce(
                            (acc, item) => acc + item.totalPrice,
                            0
                          )}
                    </p>
                  </div>
                </div>
                <p
                  className={`${
                    order.delivered ? "bg-green-700" : "bg-red-700"
                  } bg-white p-2 rounded-lg text-white font-semibold mt-2`}
                >
                  {order.delivered ? "Order delivered" : "Order Not delivered"}
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowOrders;
