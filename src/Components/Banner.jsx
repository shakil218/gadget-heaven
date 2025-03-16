import React from "react";
import BannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Blogs from "../Pages/Blogs";

const Banner = () => {
  return (
    <div>
      <section>
        <div className="bg-violet-500 rounded-lg lg:mx-6">
          {/* <div>
            <Navbar></Navbar>
          </div> */}
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none  text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="mt-6 mb-8 text-lg  text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className=" flex justify-center mb-14 md:mb-0">
              <Link
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full text-violet-500 bg-white hover:scale-105"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img
          src={BannerImg}
          alt="Gadget-Image"
          className="lg:h-[600px] w-5/6 mx-auto lg:-mt-45 -mt-30 rounded-2xl gap-3 border-2 border-white p-6 shadow-xs"
        />
      </section>
      <section className="w-11/12 mx-auto my-14">
        <h1 className="text-5xl font-bold text-center">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex my-10">
          <Sidebar></Sidebar>
          <Blogs></Blogs>
        </div>
      </section>
    </div>
  );
};

export default Banner;
