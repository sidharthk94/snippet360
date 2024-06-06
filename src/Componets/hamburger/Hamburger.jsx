import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";

const Hamburger = () => {
  const [hamburger, setHamburger] = useState(false);


  return (
    <>
      {hamburger ? (
        <div className="absolute h-[100vh] bg-gray-200 top-0 left-0 w-[80%] flex flex-col gap-[30px] ">
          <div className="flex justify-end mr-[10px] mt-[10px]" onClick={() => {setHamburger(false)}}>
            <TfiClose />
          </div>
          <div className="flex flex-col gap-[30px] pl-[10px]">
            <p className="text-lg font-semibold">New collections</p>
            <p className="text-lg font-semibold">Men</p>
            <p className="text-lg font-semibold">Women</p>
            <p className="text-lg font-semibold">Kids</p>
            <p className="text-lg font-semibold">Accessories</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-[40px] mt-4">
          <div
            className="flex w-[20%] justify-center text-xl"
            onClick={() => {setHamburger(true)}}
          >
            <GiHamburgerMenu />
          </div>

          <div className=" flex w-[80%]">
            <h1 className="text-2xl font-bold">BoutiqueStore</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Hamburger;
