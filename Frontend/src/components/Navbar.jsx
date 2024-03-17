import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGetMedsQuery } from "../api/medsApi";

function Navbar() {
  // Sample product data
  const {isLoading,isError,data:meds}= useGetMedsQuery(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredMeds = meds?.filter((med) =>
    searchTerm!==""?med.name.toLowerCase().includes(searchTerm.toLowerCase()):null
  );


  const [mobileMenu, setmobileMenu] = useState(false);
  return (
    <div className="p-8 flex justify-between relative">
      <div className="flex items-center gap-6 lg:gap-16">
        <h1 className="text-3xl">MedNepal</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Medicine"
            className="p-2 m-0 sm:w-[50vw]  md:w-[60vw] border-slate-400 border-2 rounded-lg lg:w-[20vw] lg:text-md lg:p-4 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredMeds?.length > 0 && (
            <ul className="mt-2 absolute w-full bg-white border border-gray-300 rounded-lg z-10">
              {filteredMeds.slice(0, 5).map((med) => (
                <Link to={`/med/${med._id}`} onClick={()=>searchTerm=""}>
                <li
                  key={med.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {med.name}
                </li>
                </Link>
              ))}
              {filteredMeds?.length > 5&&<li
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  See More
                </li>}
            </ul>
          )}
        </div>
      </div>

      <ul
        className={`absolute inset-0 bg-slate-400 h-fit z-10 text-white p-5 text-lg ${
          mobileMenu ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) => isActive ? "font-bold":""}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) => isActive ? "font-bold":""}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <ul
        className={`hidden  inset-0 bg-slate-400 h-fit z-10 text-white p-5 text-lg gap-10 rounded-lg lg:flex`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "font-bold":""}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <button
        className="z-20 lg:hidden"
        onClick={() => setmobileMenu(!mobileMenu)}
      >
        <img
          className="w-9"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          alt="menu"
        />
      </button>
    </div>
  );
}

export default Navbar;
