import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import heart from '../../assets/svgs/heart.svg'
import cart from '../../assets/svgs/cart.svg'
import profile from '../../assets/svgs/avatar.svg'
import curr from '../../assets/svgs/curr.svg'
function Header() {
  return (
   <div>
     <div className="bg-primary ">
      <div className="p-[15px] lg:p-[20px_50px] flex flex-col lg:flex-row items-center justify-between">
        <p className="font-[700] text-[18px] font-notosans text-white">
          Astro Ecommerce
        </p>
        <div className="hidden lg:flex items-center mt-[10px] lg:mt-0 space-x-[24px]">
          <Image src={cart} alt='' />
          <Image src={heart} alt='' />
          <Image src={curr} alt='' />
          <Image src={profile} alt='' />
        </div>
      </div>
      <div className="border-t border-[#DEE2E6] p-[20px] lg:p-[20px_50px] flex items-center justify-between flex-col lg:flex-row ">
        <div className="flex items-center space-x-[20px]">
          <Link
            href="/"
            className="font-[500] text-[14px] font-notosans text-white"
          >
            Furniture
          </Link>
          <Link
            href="/"
            className="font-[500] text-[14px] font-notosans text-white"
          >
            Designers
          </Link>
          <Link
            href="/"
            className="font-[500] text-[14px] font-notosans text-white"
          >
            Categories
          </Link>
        </div>
        <div className="bg-[#64748B] w-[240px] flex items-center space-x-[5px] rounded-[6px] p-[5px_10px] mt-[20px] lg:mt-0">
        <CiSearch className="text-[#94A3B8]" />
          <input placeholder="Search" type="text" id="search" className="placeholder:text-[#94A3B8] bg-transparent outline-none font-notosans text-[14px] " />
        </div>
      </div>
    </div>
    
   </div>
  );
}

export default Header;
