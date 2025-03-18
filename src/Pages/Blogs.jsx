import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blog }) => {
  const { product_id, product_title, product_image, price } = blog;
  return (
    <Link to={`/blogs/${product_id}`}>
      <article className=" overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg p-5 bg-base-100">
        <img
          alt="Product Image"
          src={product_image}
          className="h-56 w-full object-cover rounded-lg"
        />

        <div className="bg-white ">
          <h3 className=" text-[16px] font-semibold text-gray-900">{product_title}</h3>
          <p className=" font-medium text-gray-500 my-3">Price: {price}k</p>
          <a
            className="group inline-block rounded-full bg-gradient-to-r from-violet-500 via-violet-300 to-violet-100 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Shop Now
            </span>
          </a>
        </div>
      </article>
    </Link>
  );
};

export default Blogs;
