import React from "react";
import { useState } from "react";
import { close, linkedin,logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import {spanish,english} from "../assets"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <nav className="w.full flex pt-2 sm:pt-6 justify-between items-center navbar">
      {/* <img src={logo} alt="hoobank" className="w-[162px] h-[76px]" /> */}
      <h1 className="text-white  text-lg">Luciano Giuliani</h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal hover:scale-110 cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-10" : "mr-10"
            }  text-white`}
          >
            <a className="hover:text-[#9fdedf] hover:line-through" href={`#${nav.id}`}>{currentLanguage === "en" ? nav.title : nav.titleSpanish}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-1 bg-black-gradient absolute  my-2   mx-4  rounded-xl sidebar`}
        >
          <ul className="list-none flex gap-2 justify-center   ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-0"
                }  text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav>
      <button className="text-white" onClick={toggleLanguage}><img className="p-1 max-w-[34px]" src={currentLanguage === "en" ? english : spanish } alt="" /></button>
      
    </nav>
    </nav>
  );
};

export default Navbar;
