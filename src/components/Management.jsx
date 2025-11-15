import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import chillGuy from '../assets/images/undraw_chill-guy-avatar_tqsm.svg'
import managementImg from '../assets/images/undraw_typing-code_6t2b.svg'
const Features = () => {
  return (
    <>
      <div className="p-5 mt-10 md:flex md:justify-center items-center gap-15">
        <div className="bg-purple-50 p-5 rounded-2xl md:w-1/2">
            <h2 className="text-4xl font-bold">Manage simply</h2>
            <p className="mt-5 text-gray-500 text-justify">Control everything seamlessly from a single dashboard with centralized inventory, order management, pricing and more. Like a leisurely walk in the park. if that park also made money!</p>
            <button className='mt-5 border p-3 px-8 rounded-sm transition-all font-medium bg-[#6c63ff] text-white hover:text-black hover:bg-white duration-300'>Learn more <MdOutlineKeyboardArrowRight className='inline'/></button>
            <div className="sm:flex sm:gap-5 mt-10">
                <div>
                    <h3 className="font-bold">Fast and secure payments</h3>
                    <p className="text-gray-500 mt-2 text-justify">Choose frome Stripe and more than 50 other payments options to accept credit card payments quickly and securely</p>
                </div>
                <div className="mt-5 sm:mt-0">
                    <h3 className="font-bold">Shipping that works for you</h3>
                    <p className="text-gray-500 mt-2 text-justify">Choose as many shipping rates and carries as you like to provide you and your customers with the best experience</p>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 mt-10 flex justify-center">
            <img src={managementImg} alt="dataImage" className="min-w-xs max-w-xl " />
        </div>
      </div>

      {/* FEEDBACK */}

      <div className="md:mx-20 mx-5 py-5 px-5 md:px-20 text-white bg-[#6c63ff] rounded-4xl md:flex md:justify-around md:items-center md:gap-5">  
        <div className="flex items-center flex-col gap-1 mb-5">
                <img src={chillGuy} alt="Benjamin Scott" title="Benjamin Scott" className="w-15 border-2 rounded-full border-black" />
                <p className="font-semibold">Benjamin Scott</p>
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
            <p className="text-justify">Zoro is awesome. Their smooth, operational and user friendly interface<br className="max-md:hidden" />makes managing my store eays. They allow extensive and <br className="max-md:hidden" />easy customization of products and variations galore.</p>
        </div>
      </div>
    </>
  );
};

export default Features;
