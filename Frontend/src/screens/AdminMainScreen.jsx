import React from "react";
import { NavLink } from "react-router-dom";

const AdminMainMenu = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-7">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Admin Panel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/admin/medsmanagement"
                activeClassName="underline"
                className="hover:underline"
              >
                Meds Management
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/orders"
                activeClassName="underline"
                className="hover:underline"
              >
                Order Management
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminMainMenu;
