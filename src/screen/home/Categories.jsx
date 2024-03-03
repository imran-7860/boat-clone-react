import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
const Categories = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='font-semibold text-2xl'>Explore by Categories</h1>
      <div className='flex flex-row justify-between items-center p-2'>
        <div >
          <img src={require('../../assets/women.webp')} alt='' className='h-[400px] w-[100%] ' />
          <div className='bg-gray-100 p-2'>
          <div className='font-bold text-2xl text-center'>Neckbands</div>
          <div className='flex items-center justify-center text-blue-900 font-bold mt-1 gap-1'>View All <FaRegArrowAltCircleRight /> </div>
          </div>
        </div>
        <div>
        <img src={require('../../assets/hardik.webp')} alt='' className='h-[400px] w-[100%] '/>
        <div className='bg-gray-100 p-2'>
          <div className='font-bold text-2xl text-center'>Speakers</div>
          <div className='flex items-center justify-center text-blue-900 font-bold mt-1 gap-1'>View All <FaRegArrowAltCircleRight /> </div>
          </div>
        </div>
        <div>
        <img src={require('../../assets/south.webp')} alt='' className='h-[400px] w-[100%] '/>
        <div className='bg-gray-100 p-2'>
          <div className='font-bold text-2xl text-center'>Smartwatches</div>
          <div className='flex items-center justify-center text-blue-900 font-bold mt-1 gap-1'>View All <FaRegArrowAltCircleRight /> </div>
          </div>
        </div>
        <div>
        <img src={require('../../assets/kkr.webp')} alt='' className='h-[400px] w-[100%] '/>
        <div className='bg-gray-100 p-2 '>
          <div className='font-bold text-2xl text-center'>Headphones</div>
          <div className='flex items-center justify-center text-blue-900 font-bold mt-1 gap-1'>View All <FaRegArrowAltCircleRight /> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories