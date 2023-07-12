import React, {useState} from "react";
import {navLinks} from "../../constants/index.js";
import {earth, planetOutline} from "../../assets/index.js";
import {Link} from "react-router-dom";

const NavbarView = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <a className="w-[124px] h-[32px]"><strong className="text-gradient font-mono cursor-pointer">Van
                Life</strong></a>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[10]">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`hover:text-cyan-300 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <Link to={nav.id}>{nav.title}</Link>
                    </li>))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer">
                <img src={toggle ? planetOutline : earth} alt="menu"
                     className="w-[28px] h-[28px] object-contain via-cyan-500"
                     onClick={() => setToggle((prev) => !prev)}/>
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 text-gradient z-[10]">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <Link to={nav.id}>{nav.title}</Link></li>))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavbarView

