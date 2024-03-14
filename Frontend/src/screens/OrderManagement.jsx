import React, { useState } from "react";
import { FaTimes, FaUser, FaCheck } from "react-icons/fa";

const OrderManagement = () => {
  // Sample order data
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      orderItems: ["Product 1", "Product 2"],
      totalPrice: 250,
      delivered: false,
      date: new Date("2022-03-15"),
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderItems: ["Product 3", "Product 4"],
      totalPrice: 180,
      delivered: true,
      date: new Date("2022-03-16"),
    },
    // Add more order data as needed
  ];

  // State variables for search query and sorting criteria
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByDate, setSortByDate] = useState(false);

  // Filter and sort orders based on search query and sorting criteria
  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedOrders = sortByDate
    ? [...filteredOrders].sort((a, b) => b.date - a.date)
    : filteredOrders;

  const handleCancelOrder = (orderId) => {
    console.log(`Order with ID ${orderId} canceled`);
  };

  const handleViewProfile = (customerId) => {
    console.log(`View profile of customer with ID ${customerId}`);
  };

  const handleMarkAsDelivered = (orderId) => {
    console.log(`Order with ID ${orderId} marked as delivered`);
  };

  return (
    <div className="container mx-auto py-8 px-8">
      <h1 className="text-3xl font-semibold mb-6">Order Management</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by customer name"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex ml-4 space-x-4">
          <button
            className={`px-4 py-2 border border-gray-300 rounded-md ${
              sortByDate ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => setSortByDate(!sortByDate)}
          >
            Sort by Date
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Export CSV
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {sortedOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Order ID: {order.id}
              </h2>
              <p className="text-gray-600 mb-2">
                Customer: {order.customerName}
              </p>
              <p className="text-gray-600 mb-2">
                Order Items: {order.orderItems.join(", ")}
              </p>
              <p className="text-gray-600 mb-2">
                Total Price: ${order.totalPrice}
              </p>
              <p className="text-gray-600 mb-2">
                Date: {order.date.toLocaleDateString()} {/* Display formatted date */}
              </p>
              {order.delivered ? (
                <p className="text-green-600 font-semibold">Delivered</p>
              ) : (
                <button
                  onClick={() => handleMarkAsDelivered(order.id)}
                  className="text-blue-600 font-semibold underline"
                >
                  Mark as Delivered
                </button>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleCancelOrder(order.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTimes />
              </button>
              <button
                onClick={() => handleViewProfile(order.id)}
                className="text-blue-600 hover:text-blue-800"
              >
                <FaUser />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
