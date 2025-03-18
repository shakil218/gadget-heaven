import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
const BlogDetails = () => {
  const { blogId } = useParams();
  const data = useLoaderData();
  const id = parseInt(blogId);

  const blog = data.find((blog) => blog.product_id === id);

  const {
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    availability,
    rating,
    Otherfield,
  } = blog;

  return (
    <section className="mb-3">
      <div className="bg-violet-500">
        {/* <div>
            <Navbar></Navbar>
          </div> */}
        <div className="container flex flex-col  px-4 pb-30 mx-auto text-center lg:pb-35  md:px-10 lg:px-32  text-white">
          <h1 className="text-3xl font-bold my-3 ">Product Details</h1>
          <p className="pb-3">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <article className="flex flex-col md:flex-row items-center md:items-start w-5/6 mx-auto gap-5 -mt-30 border-2 border-white  shadow-xs overflow-hidden rounded-lg  transition hover:shadow-lg p-5 bg-base-100">
        <img
          alt="Product Image"
          src={product_image}
          className=" h-40 w-40 md:h-64 lg:h-[500px] md:w-64 lg:w-[425px] object-cover rounded-lg"
        />

        <div className="bg-white lg:leading-8">
          <h3 className=" md:text-4xl font-semibold text-gray-900">
            {product_title}
          </h3>
          <p className="text-sm md:text-lg md:font-medium text-gray-500">
            Price: {price}k
          </p>
          <button className="h-5 w-20 text-sm md:text-balance md:h-[32px] md:w-[87px] bg-green-100 rounded-full text-green-500 my-3 ">
            {availability === true ? "In Stock" : "Stock Out"}
          </button>
          <p className="text-sm md:text-base">{description}</p>
          <div>
            <p className="text-lg font-medium my-3">Specification:</p>
            <ul className="text-sm md:text-base ml-7 list-decimal">
              {Specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-lg font-medium mt-3">Rating ⭐ </p>
          <div className="flex gap-3 items-center mb-3">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
                defaultChecked
              />
            </div>
            <p className="bg-gray-200 px-3 rounded-4xl">{rating}</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#_"
              class="inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-6 text-white bg-violet-600 border border-transparent rounded-full md:w-auto hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 gap-2"
            >
              Button Text <IoCartSharp></IoCartSharp>
            </a>
            <Link className=" bg-gray-200 hover:bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center "><IoMdHeartEmpty size={'24px'}></IoMdHeartEmpty></Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BlogDetails;
