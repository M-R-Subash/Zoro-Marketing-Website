import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import selfiGirl from '../assets/images/undraw_selfie-fun_0qzh.svg'
import remoteWorker from '../assets/images/undraw_remote-worker_0l91.svg'
const Features = () => {
  return (
    <>
      <div className="p-5 mt-10 md:flex md:justify-center items-center gap-15">
        <div className="md:w-1/2 mb-5 flex justify-center">
            <img src={remoteWorker} alt="dataImage" className="min-w-xs max-w-xl rounded-2xl" />
        </div>
        <div className="bg-purple-50 mb-5 p-5 rounded-2xl md:w-1/2">
            <h2 className="text-4xl font-bold">Grow faster</h2>
            <p className="mt-5 text-gray-500 text-justify">Zoro gives you the power to easily sell anywhere. to anyone - across the internet and around the world. Control everything from a single platform with centralized inventory, order management, and pricing. It doesn't get any simpler than this.</p>
            <button className='mt-5 border p-3 px-8 rounded-sm transition-all font-medium bg-[#6c63ff] text-white hover:text-black hover:bg-white duration-300'>Learn more <MdOutlineKeyboardArrowRight className='inline'/></button>
            <div className="sm:flex sm:gap-5 mt-10">
                <div>
                    <h3 className="font-bold">Google advertising</h3>
                    <p className="text-gray-500 mt-2 text-justify">Get your products to the top of the world's most powerfull search engine with Zoro's automated Google Shopping ads.</p>
                </div>
                <div className="mt-5 sm:mt-0">
                    <h3 className="font-bold">Facebook advertising</h3>
                    <p className="text-gray-500 mt-2 text-justify">Create Facebook campaign in minutes to reach up to two billion actibe Facebook users.</p>
                </div>
            </div>
        </div>
        
      </div>

      {/* FEEDBACK */}

      <div className="md:mx-20 mx-5 -my-[20px] py-5 px-5 md:px-20 text-white bg-[#6c63ff] rounded-2xl md:flex md:justify-around md:items-center md:gap-5">  
        <div className="flex items-center flex-col gap-1 mb-5">
                <img src={selfiGirl} alt="Pamela Strydom" className="w-15 border rounded-full border-black bg-white" />
                <p className="font-semibold">Pamela Strydom</p>
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
            <p className="text-justify">Easy to use, affordable (and a free option if starting off). The platform integration<br className="max-md:hidden" /> with other program such as Facebook, Instagram and local<br className="max-md:hidden" />payment options make it an easy setup to manage effectively and easily.</p>
        </div>
      </div>
    </>
  );
};

export default Features;
