import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaMobileScreen } from "react-icons/fa6";
const Support = () => {
  return (
    <>
       <div className='m-5 mt-10 flex gap-5 justify-center items-center flex-wrap'>
            <div className='w-80 h-80 border flex flex-col justify-between p-5 rounded-4xl bg-purple-50'>
                <div>
                <BiSupport className='text-5xl p-2 bg-[#6c63ff] text-white rounded-xl'/>
                <h3 className='mt-10 font-medium text-xl'>Live Support</h3>
                <p className='text-sm text-gray-500'>Expert support, whenever you need it</p>
                </div>
                <div>
                    <button className=''>Learn more <BsArrowRight className='inline'/></button>
                </div>
            </div>
            <div className='w-80 h-80 border flex flex-col justify-between p-5 rounded-4xl'>
                <div>
                <AiOutlineAppstoreAdd className='text-5xl p-2 bg-[#6c63ff] text-white rounded-xl'/>
                <h3 className='mt-10 font-medium text-xl'>Zoro App Market</h3>
                <p className='text-sm text-gray-500'>Take your store to the next level with new tools and apps from our Zoro partners.</p>
                </div>
                <div>
                    <button className=''>Learn more <BsArrowRight className='inline'/></button>
                </div>
            </div>
            <div className='w-80 h-80 border flex flex-col justify-between p-5 rounded-4xl bg-purple-50'>
                <div>
                <FaMobileScreen className='text-5xl p-2 bg-[#6c63ff] text-white rounded-xl'/>
                <h3 className='mt-10 font-medium text-xl'>Manage on Mobile</h3>
                <p className='text-sm text-gray-500'>Manage business on the go with the Zoro Mobile App.</p>
                </div>
                <div>
                    <button className=''>Learn more <BsArrowRight className='inline'/></button>
                </div>
            </div>
        </div> 
        <div className='border rounded-4xl flex justify-around gap-5 items-center flex-col sm:flex-row m-5 p-5 '>
        <div className='md:w-1/2'>
            <h2 className='text-2xl sm:text-3xl max-md:mt-6'>Your free online store is<br className='max-md:hidden'/> just a few clicks away</h2>
        </div>
        <div className='md:w-1/2 text-center'>
            <button className='mt-5 border p-3 px-8 sm:px-15 rounded-sm transition-all font-medium bg-[#6c63ff] text-white hover:text-black hover:bg-white duration-300'>Learn more <MdOutlineKeyboardArrowRight className='inline'/></button>
            <p className='text-gray-400 text-[12px] sm:text-sm'>No credit card required</p>
        </div>
    </div>
    </>
  )
}

export default Support