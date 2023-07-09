import React from "react";
import {aboutUs} from "../constants/index.js";

const AboutUs = () => {
    return (
        <div className="w-full h-[100%] mt-8 bg-gradient-to-r from-indigo-950 via-green-950 rounded-lg ">
            <div className=" w-[100%] h-[100%]">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-2xl font-extrabold p-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-violet-500">
                           We are</span>
                        </div>
                        <div className="flex justify-center items-center relative">
                            <img className="max-h-[300px] min-w-[200px] p-4" src="/we.png" alt="profile photo"/>
                            <div className="thunder"></div>
                        </div>
                        <div className="text-1xl font-extrabold pb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-violet-500">
                           Milena and Wojciech</span>
                        </div>
                    </div>


                    <div className="justify-center">
                        <div className="flex flex-col">
                            {aboutUs.map((p, index) => (
                                <p key={index}
                                   className="text-xs px-[40px] py-3 font-mono text-gray-400 min-w-[400px] max-w-[500px] text-center">{p}</p>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default AboutUs
