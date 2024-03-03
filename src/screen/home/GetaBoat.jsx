import React from 'react'

import { FaCircle } from 'react-icons/fa6';

const GetaBoat = () => {
  return (
    <div className='container mx-auto mt-5 py-10'>
      <h1 className='text-xl'>Get a <strong >bo<span className='decoration-red-700 underline '>At</span></strong></h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-5 content-center gap-9 lg:gap-4'>
        <div className=' flex flex-col items-center ' >
          <img src={require('../../assets/Rockerz.webp')} alt='' className='w-80 h-80 rounded-t-lg  ' />
          <div className='bg-gray-100 w-full rounded-b-xl  relative '>
            <div className='absolute -top-3 left-10 rounded-xl bg-yellow-400  w-56 text-center border border-gray-200 shadow-xl'>40 Hours Playback</div>
            <div className='flex mt-4  justify-between items-center  '>
              <div className='font-bold ml-5'>Rockerz 255 Pro+</div>
              <div className='flex items-center mr-2'><FaCircle /><FaCircle className='-ml-2 text-green-400' /><span className='text-gray-500'>+3</span></div>
            </div>
            <div className='flex flex-row ml-5'>
              <div className='font-bold'>Price For One</div>
              <div className='ml-1 font-bold'>₹1,299</div>
              <div className='line-through text-gray-500 ml-1'>₹3,990 </div>
              <div className='text-green-400 ml-1'>67%off</div>
            </div>
            <div className='text-white bg-black p-2 w-72 rounded-lg mt-2 text-center ml-2'>
              <div className='text-sm cursor-pointer'>Buy 5 at ₹1234/-per item | <span className='text-green-500 font-bold'>69%off</span></div>
            </div>
            <div className='mt-2 ml-[44px] mb-3'>
              <div className='text-slate-500 font-medium text-sm '>Buy 5 at ₹1329/-per item | <span className='text-green-600 font-semibold'>70%off</span></div>
            </div>
          </div>
        </div>



        <div className=' flex flex-col items-center relative' >
          <img src={require('../../assets/Airdopes Hype.webp')} alt='' className='w-80 h-80 rounded-t-lg bg-neutral-200' />
          <div className='bg-gray-100 w-full rounded-b-xl  relative '>
            <div className='absolute -top-3 left-10 rounded-xl bg-yellow-400  w-56 text-center border border-gray-200 shadow-xl'>42 Hours Playback</div>
            <div className='flex mt-4 justify-between items-center '>
              <div className='font-bold ml-5 '>Airdopes Hype</div>
              <div className='flex mr-2 '><FaCircle className='' /><FaCircle className=' -ml-1 text-gray-500' /><FaCircle className='-ml-2 text-gray-200' /></div>
            </div>
            <div className='flex flex-row ml-5'>
              <div className='font-bold'>Price For One</div>
              <div className='ml-1 font-bold'>₹1,799</div>
              <div className='line-through text-gray-500 ml-1'>₹5,490 </div>
              <div className='text-green-400 ml-1'>67%off</div>
            </div>
            <div className='text-white bg-black p-2 w-72 rounded-lg mt-2 text-center ml-2'>
              <div className='text-sm cursor-pointer'>Buy 5 at ₹1709/-per item | <span className='text-green-500 font-bold'>69%off</span></div>
            </div>
            <div className='mt-2 ml-[44px] mb-3'>
              <div className='text-slate-500 font-medium text-sm '>Buy 5 at ₹1329/-per item | <span className='text-green-600 font-semibold'>70%off</span></div>
            </div>
          </div>
        </div>



        <div className=' flex flex-col items-center relative' >
          <img src={require('../../assets/Nirvana_Ion.webp')} alt='' className='w-80 h-80 rounded-t-lg bg-neutral-200' />
          <div className='bg-gray-100 w-full rounded-b-xl  relative '>
            <div className='absolute -top-3 left-10 rounded-xl bg-yellow-400  w-56 text-center border border-gray-200 shadow-xl'>42 Hours Playback</div>
            <div className='flex mt-4 justify-between items-center '>
              <div className='font-bold ml-5 '>Nirvana Ion</div>
              <div className='flex mr-2'><FaCircle className='text-gray-200' /><FaCircle className=' -ml-2 text-black' /></div>
            </div>
            <div className='flex flex-row  ml-5'>
              <div className='font-bold'>Price For One</div>
              <div className='ml-1 font-bold'>₹2,299</div>
              <div className='line-through text-gray-500 ml-1'>₹7,990 </div>
              <div className='text-green-400 ml-1'>71%off</div>
            </div>
            <div className='text-white bg-black p-2 w-72 rounded-lg mt-2 text-center ml-2'>
              <div className='text-sm cursor-pointer'>Buy 5 at ₹2184/-per item | <span className='text-green-500 font-bold'>73%off</span></div>
            </div>
            <div className='mt-2 ml-[44px] mb-3'>
              <div className='text-slate-500 font-medium text-sm '>Buy 5 at ₹1329/-per item | <span className='text-green-600 font-semibold'>70%off</span></div>
            </div>
          </div>
        </div>



        <div className=' flex flex-col items-center relative' >
          <img src={require('../../assets/141white_300x.png')} alt='' className='w-80 h-80 rounded-t-lg bg-neutral-200' />
          <div className='bg-gray-100 w-full rounded-b-xl  relative '>
            <div className='absolute -top-3 left-10 rounded-xl bg-yellow-400  w-56 text-center border border-gray-200 shadow-xl'>42 Hours Playback</div>
            <div className='flex mt-4 justify-between items-center '>
              <div className='font-bold ml-5'>TRebel Airdopes 141</div>
              <div className='flex mr-2'><FaCircle className='text-gray-500' /><FaCircle className=' -ml-2 text-gray-400' /></div>
            </div>
            <div className='flex flex-row  ml-5'>
              <div className='font-bold'>Price For One</div>
              <div className='ml-1 font-bold'>₹1,399</div>
              <div className='line-through text-gray-500 ml-1'>₹4,490 </div>
              <div className='text-green-400 ml-1'>69%off</div>
            </div>
            <div className='text-white bg-black p-2 w-72 rounded-lg mt-2 text-center ml-2 '>
              <div className='text-sm cursor-pointer'>Buy 5 at ₹1329/-per item | <span className='text-green-500 font-bold'>70%off</span></div>
            </div>
            <div className='mt-2 ml-[44px] mb-3'>
              <div className='text-slate-500 font-medium text-sm '>Buy 5 at ₹1329/-per item | <span className='text-green-600 font-semibold'>70%off</span></div>
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}

export default GetaBoat