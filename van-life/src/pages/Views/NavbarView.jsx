import React, {useState} from "react";
import {navLinks} from "../../constants/index.js";
import {camera, earth, planetOutline} from "../../assets/index.js";
import {Link} from "react-router-dom";

const NavbarView = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <a href="/" className="logo cursor-pointer flex flex-col items-center">
                <img src={camera} alt="Camera Icon" className=" w-[70px]"/>
                <h1 className="font-mono">Van Life</h1>
            </a>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[10]">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}
                        className={`hover:text-cyan-300 font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <Link to={`/${nav.id}`}>{nav.title}</Link>
                    </li>))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center cursor-pointer z-[5]">
                <img src={toggle ? planetOutline : earth} alt="menu"
                     className="w-[28px] h-[28px] object-contain via-cyan-500"
                     onClick={() => setToggle((prev) => !prev)}/>
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 text-gradient ">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                <Link to={`/${nav.id}`} className=" z-[6]">{nav.title}</Link></li>))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavbarView

