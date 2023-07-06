import React, {useState} from "react";
import {navLinks} from "../constants/index.js";
import {close, menu} from "../assets/index.js";
const Navbar = () => {
    const [toggle, setToggle] =useState()
  return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
          <p className="w-[124px] h-[32px]"><strong>Van Life</strong></p>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index)=> (<li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-white `}><a href={`#$nav.id`}>{nav.title}</a></li>))}
          </ul>

      </nav>
  )
}
export default Navbar

