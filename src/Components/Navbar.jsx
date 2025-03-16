import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <div className="flex gap-3">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 border border-violet-500 font-medium"
              : "font-medium text-[#0B0B0BB2]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/statistics"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 border border-violet-500 font-medium"
              : "font-medium text-[#0B0B0BB2]"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "text-violet-500 border border-violet-500 font-medium"
              : "font-medium text-[#0B0B0BB2]"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-gray-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <Link to={"#"} className=" h-14 w-14 border border-gray-200 bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-full ">
          <IoCartSharp size={"25px"}></IoCartSharp>
        </Link>
        <Link to={"#"} className=" h-14 w-14 border border-gray-200 bg-gray-200 hover:bg-gray-300 flex justify-center items-center rounded-full ">
          <FaRegHeart size={"25px"}></FaRegHeart>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
