import React from "react";
import { GoMail } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiLoginBoxLine } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import Hamburger from "./hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className="bg-gray-100 h-[100vh]">
      <div className=" flex h-[7vh] justify-around border-b-[1px]">
        <div className="sm:flex w-1/2 justify-around hidden">
          <div className="flex items-center gap-x-[5px]">
            <span className="text-md">
              <GoMail />
            </span>
            <p className="text-sm">info@abcde@gmai.com</p>
          </div>

          <div className="flex items-center gap-x-[5px]">
            <span className="text-sm">
              <FaPhoneAlt />
            </span>
            <p className="text-sm">+123456</p>
          </div>

          <div className="flex items-center gap-x-[5px]">
            <span className="text-lg">
              <LiaShippingFastSolid />
            </span>
            <p className="text-sm">Free Shipping</p>
          </div>
        </div>

        <div className="flex flex-1 justify-around sm:justify-end sm:w-1/2 gap-x-[30px]">
          <div className="flex items-center gap-x-[5px]">
            <span className="text-md">
              <RiLoginBoxLine />
            </span>
            <p className="text-sm">Login/create account</p>
          </div>

          <div className="flex items-center gap-x-[5px] sm:hidden">
            <span className="text-sm">
              <FaPhoneAlt />
            </span>
            <p className="text-sm">+123456</p>
          </div>

          <div className="flex items-center gap-x-[5px] sm:mr-[50px]">
            <span className="text-sm">
              <MdOutlineFavorite />
            </span>
            <p className="text-sm">Favroite</p>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex justify-around  sm:mt-4 items-center ">
        <h1 className="text-4xl font-bold">BoutiqueStore</h1>
        <p className="text-lg font-semibold">New collections</p>
        <p className="text-lg font-semibold">Men</p>
        <p className="text-lg font-semibold">Women</p>
        <p className="text-lg font-semibold">Kids</p>
        <p className="text-lg font-semibold">Accessories</p>
      </div>

      <div className="sm:hidden">
      <Hamburger/>
      </div>
    </div>
  );
};

export default Navbar;
