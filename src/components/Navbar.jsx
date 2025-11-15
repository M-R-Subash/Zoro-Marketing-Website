import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { SiLazarus } from "react-icons/si";
import { CgCloseO } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>  
            <nav className='p-5 flex justify-between items-center shadow-lg shadow-[#c8c6fd] gap-10  '>
                <div className='text-3xl flex gap-3 relative items-center'>
                    <SiLazarus  className='cursor-pointer'/>
                    <a href="#" className='font-bold'>Zoro</a>
                    <span className='font-light text-[11px] absolute mt-8 ml-10'>by Onepiece</span>
                    <div className=' ml-5 hidden md:flex text-lg gap-5 font-medium '>
                        <a href="#">Sell</a>
                        <a href="#">Market</a>
                        <a href="#">Manage</a>
                    </div>
                </div>
                
                {/* Mobile Menu Button */}
                <div className='md:hidden '>
                    <RiMenu3Line 
                        className='text-3xl cursor-pointer' 
                        onClick={() => setIsMenuOpen(true)}
                    />
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className='fixed inset-0 z-50 bg-opacity-50 ' onClick={() => setIsMenuOpen(false)}>
                        {/* Sidebar Menu */}
                        <div 
                            className='w-64 h-screen fixed top-0 right-0 bg-white shadow-2xl shadow-[#6c63ff] p-5 transform transition-transform duration-300'
                            onClick={(e) => e.stopPropagation()} >
                            {/* Close Button */}
                            <div className='flex justify-end mb-8'>
                                <CgCloseO 
                                    className='text-3xl cursor-pointer hover:text-red-500 transition-colors' 
                                    onClick={() => setIsMenuOpen(false)}/>
                            </div>
                            {/* Menu Items */}
                            <ul className='space-y-6 text-lg font-medium [&_li]:cursor-pointer [&_li:hover]:text-green-600 [&_li]:transition-colors duration-300'>
                                <li>Login</li>
                                <li>Sign In</li>
                                <li>Sell</li>
                                <li>Market</li>
                                <li>Manage</li>
                                <li>Learn</li>
                                <li>Partner</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                )}
                <div className='flex gap-5 max-md:hidden font-medium'>
                    <a href="#">Learn</a>
                    <a href="#">Partner</a>
                    <a href="#">Pricing</a>
                    <div>
                        <a href="#">Login</a>
                        <a href="#" className='ml-5 bg-black border text-white p-3 rounded-sm hover:bg-white hover:text-black transition-colors text-nowrap'>Get started for FREE</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar