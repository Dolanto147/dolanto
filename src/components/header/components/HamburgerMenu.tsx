"use client";
import { useState } from "react";
import "./style.css";
export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center flex-col gap-1 rounded-full bg-lightBLue">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2">
          <div id="bar2sub"></div>
          <div id="bar2sub"></div>
        </div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>

    // <div
    //   onClick={() => setOpenMenu(!openMenu)}
    //   className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center flex-col gap-1 rounded-full bg-lightBLue"
    // >
    //   <div
    //     className={`w-[30px] rounded-full h-[.25rem] duration-300  bg-gradient-main transition-all ${
    //       openMenu ? "rotate-45 origin-center" : ""
    //     }`}
    //   ></div>
    //   <div
    //     className={`w-[30px] flex items-center justify-between transition-all ${
    //       openMenu ? "invisible" : ""
    //     }`}
    //   >
    //     <div className="w-[14px] rounded-full h-[.25rem] bg-gradient-main"></div>
    //     <div className="w-[14px] rounded-full h-[.25rem] bg-gradient-main"></div>
    //   </div>
    //   <div
    //     className={`w-[30px] rounded-full h-[.25rem]  duration-300 bg-gradient-main transition-all ${
    //       openMenu ? "-rotate-45 origin-center" : ""
    //     }`}
    //   ></div>
    // </div>
  );
}
