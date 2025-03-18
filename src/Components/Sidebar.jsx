import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full p-3 space-y-2 w-96  bg-white text-gray-100 rounded-lg">
      <ul className="pt-2 pb-4  text-sm text-black flex flex-col gap-3">
        <li className="bg-gray-200 rounded-full btn font-semibold">
          <Link
            to={"#"}
            className=""
          >
            All Products
          </Link>
        </li>
        <li className="bg-gray-200 btn font-semibold rounded-full">
          <Link
            to={"#"}
            className=""
          >
            Laptops
          </Link>
        </li>
        <li className="bg-gray-200 btn font-semibold rounded-full">
          <Link
            to={"#"}
            className=""
          >
            Phones
          </Link>
        </li>
        <li className="bg-gray-200 btn font-semibold rounded-full">
          <Link
            to={"#"}
            className=""
          >
            Accessories
          </Link>
        </li>
        <li className="bg-gray-200 btn font-semibold rounded-full">
          <Link
            to={"#"}
            className=""
          >
            Smart Watches
          </Link>
        </li>
        <li className="bg-gray-200 btn font-semibold rounded-full">
          <Link
            to={"#"}
            className=""
          >
            MacBook
          </Link>
        </li>
        <li className="bg-gray-200 btn font-semibold rounded-full">
          <Link
            to={"#"}
            className=""
          >
            Iphone
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
