import React from "react";
import BannerImg from "../assets/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section>
        <div className="bg-violet-500 rounded-lg">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none  text-white">
              Upgrade Your Tech Accessorize with <br /> Gadget Heaven
              Accessories
            </h1>
            <p className="mt-6 mb-8 text-lg  text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to <br /> the coolest accessories,
              we have it all!
            </p>
            <div className=" flex justify-center">
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
          src="https://source.unsplash.com/random/480x320"
          alt=""
          className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
      <div className=" ">
        <img
          src={BannerImg}
          alt="Gadget-Image"
          className="h-[611px] w-5/6 mx-auto -mt-20 rounded-2xl gap-3 border-2 border-white p-6"
        />
      </div>
    </div>
  );
};

export default Banner;
