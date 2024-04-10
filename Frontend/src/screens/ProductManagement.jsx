import React, { useState } from "react";
import { useGetMedsQuery } from "../api/medsApi";

const ProductManagementScreen = () => {
  // Sample product data
  const [sort,setSort]=useState(0);
  const {isError,isLoading,data:products}=useGetMedsQuery(sort);
  

  // State to store search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on search query
  let filteredProducts;
  if(!isLoading){
    filteredProducts= products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  

  return (
    <div className="bg-gray-100 px-10 min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6 text-center">Product Management</h1>
        <div className="flex justify-between mb-6">
          {/* Search bar */}
          <div className="w-full mr-4">
            <input
              type="text"
              className="w-full p-5 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* Add product button */}
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600">
            Add Product
          </button>
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts?.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-700">${product.price}</p>
              <div className="flex mt-4 justify-center">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductManagementScreen;
