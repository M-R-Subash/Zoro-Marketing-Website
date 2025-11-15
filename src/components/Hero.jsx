import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiArrowScope } from "react-icons/gi";
import { IoStarOutline } from "react-icons/io5";
import { CgCrowdfire } from "react-icons/cg";
import { LuCrown } from "react-icons/lu";
import heroImg from "../assets/images/undraw_product-demo_9d4i.svg"
const Hero = () => {
    
  return (
    <>
    <div className='mt-15 text-center p-5 sm:flex sm:items-center sm:justify-around sm:flex-wrap sm:gap-10'>
        <div className=''>
            <h1 className='text-4xl font-bold'>Start Selling Online for <span className='text-[#6c63ff] font-semibold'>FREE</span></h1>
        <p className='mt-8'>We're putting free trials on trial with Zoro, you get free forever, Set up <br className='hidden md:block'/> your free account once, and keep it as long as you like, Seriously !</p>
        <button className='mt-5 border p-3 px-8 rounded-sm transition-all font-medium bg-[#6c63ff] text-white hover:text-black hover:bg-white duration-300'>Get started for free <MdOutlineKeyboardArrowRight className='inline'/></button>
        <p className='text-gray-400 text-sm'>No credit card required</p>
        </div>
        <div className='mt-10 flex justify-center'>
            <img src={heroImg} alt="" className='min-w-xs max-w-xl'/>
        </div>
    </div>
    <div className='flex flex-wrap justify-center items-center sm:justify-around mt-10 gap-6 sm:gap-5 [&_div]:rounded-lg [&_div]:w-[170px] [&_div]:h-[100px] [&_h4]:font-semibold [&_div]:max-sm:w-3/4 p-5 [&_div]:odd:bg-purple-50 [&_div]:even:bg-gray-50'>
        <div className='p-5 text-center'>
            <h4><GiArrowScope className='inline -rotate-90'/> Capterra</h4>
            <p className='text-gray-500'>Best easy of use</p>
        </div>
        <div className='p-5 text-center'>
            <h4><IoStarOutline className='inline -rotate-90'/> Trust Pilot</h4>
            <p className='text-gray-500'>4.7 average rating</p>
        </div>
        <div className='p-5 text-center'>
            <h4><LuCrown className='inline '/> CROWN</h4>
            <p className='text-gray-500'>Easiest setup Summer 2025</p>
        </div>
        <div className='p-5 text-center'>
            <h4><CgCrowdfire className='inline '/> CROWD</h4>
            <p className='text-gray-500'>Best usability Summer 2015</p>
        </div>
    </div>
    </>
  )
}

export default Hero