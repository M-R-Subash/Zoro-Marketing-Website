import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import dataImg from '../assets/images/undraw_data-at-work_3tbf.svg'
import shyBoy from '../assets/images/undraw_shy-guy-avatar_094a.svg'
const Features = () => {
  return (
    <>
      <div className="p-5 mt-10 md:flex md:justify-center items-center gap-15">
        <div className="bg-purple-50 p-5 rounded-2xl md:w-1/2">
            <h2 className="text-4xl font-bold">Sell anywhere</h2>
            <p className="mt-5 text-gray-500 text-justify">Set up your Zoro store once to easily sync and sell across a website. social medis, marketplaces like Amazon, and live in-person. Get started with one, or try them all</p>
            <button className='mt-5 border p-3 px-8 rounded-sm transition-all font-medium bg-[#6c63ff] text-white hover:text-black hover:bg-white duration-300'>Learn more <MdOutlineKeyboardArrowRight className='inline'/></button>
            <div className="sm:flex sm:gap-5 mt-10">
                <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="text-gray-500 mt-2 text-justify">Let customers order directly from yoru Instagram posts when you"re powered by Ecwid</p>
                </div>
                <div className="mt-5 sm:mt-0">
                    <h3 className="font-bold">Facebook</h3>
                    <p className="text-gray-500 mt-2 text-justify">Set up and manage a Facebook Store right from your Zoro dashboard. You're ready for social selling.</p>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 mt-10 flex justify-center">
            <img src={dataImg} alt="dataImage" className="min-w-xs max-w-xl" />
        </div>
      </div>

      {/* FEEDBACK */}

      <div className="md:mx-20 mx-5 -my-[20px] py-5 px-5 md:px-20 text-white bg-[#6c63ff] rounded-4xl md:flex md:justify-around md:items-center md:gap-5">  
        <div className="flex items-center flex-col gap-1 mb-5">
                <img src={shyBoy} alt="Roronoa Zoro" className="w-15 border-2 rounded-full border-black" />
                <p className="font-semibold">Roronoa Zoro</p>
            <div className="flex items-center ">
            <div className="flex items-center mr-5"> <IoStarOutline className="mr-2"/>Trustpilot</div>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
            </div>
        </div>
        <div>
            <p className="text-justify">This is the perfect place to get your online business up and running. <br className="max-md:hidden" /> You literally don't have to go anywhere else. They have everything <br className="max-md:hidden" /> you need plus add on wigets web syncing to social media and more!</p>
        </div>
      </div>
    </>
  );
};

export default Features;
