import React from 'react'

const Sell = () => {
  return (
    <>
    <div className='border rounded-4xl m-5 flex justify-around gap-5 items-center flex-col-reverse p-5 text-center sm:justify-between sm:flex-row sm:mx-10'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl max-md:mt-6'>Sell around <br className='max-md:hidden'/> the world</h2>
            <p className='md:mt-5 mt-2 text-gray-500'>Take your small business global with built-in international payment tools and translation support for 50 languages - and counting.</p>
        </div>
        <div className='flex md:w-1/2 justify-center items-center gap-10 max-sm:flex-wrap'>
            <div className='text-center'>
                <h2 className='text-6xl text-nowrap'>50 <span className='text-2xl -ml-5'>+</span></h2>
                <p className='text-gray-500 text-[12px]'>Payment gateways</p>
            </div>
            <div className='text-center'>
                <h2 className='text-6xl'>175</h2>
                <p className='text-gray-500 text-[12px]'>Countries</p>
            </div>
            <div className='text-center'>
                <h2 className='text-6xl'>50</h2>
                <p className='text-gray-500 text-[12px]'>Languages</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sell