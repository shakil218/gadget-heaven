import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-100">
      <div className=" flex flex-col items-center py-10 mx-auto  text-center">
        <div className="leading-10">
          <h1 className="text-3xl font-bold">Gadget Heaven</h1>
          <p>
            <span>
              Leading the way in cutting-edge technology and innovation.
            </span>
          </p>
        </div>
        <div className="divider w-11/12 mx-auto my-5"></div>
        <div className="flex flex-col justify-around w-11/12  mx-auto text-center">
          <div className="grid grid-cols-3 text-sm gap-x-3 gap-y-8 ">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-1">
                <li>
                  <Link to={"#"}>Product Support</Link>
                </li>
                <li>
                  <Link to={"#"}>Order Tracking</Link>
                </li>
                <li>
                  <Link to={"#"}>Shipping & Delivery</Link>
                </li>
                <li>
                  <Link to={"#"}>Returns</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-1">
                <li>
                <Link to={"#"}>About Us</Link>
                </li>
                <li>
                <Link to={"#"}>Careers</Link>
                </li>
                <li>
                <Link to={"#"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-1">
                <li>
                <Link to={"#"}>Terms of Service</Link>
                </li>
                <li>
                <Link to={"#"}>Privacy Policy</Link>
                </li>
                <li>
                <Link to={"#"}>Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
