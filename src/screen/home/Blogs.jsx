import React from 'react'
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";

const Blogs = () => {
    return (
        <div className='container mx-auto mt-5 py-10'>
            <h1 className='text-xl'>In the <strong >Pre<span className='decoration-red-700 underline '>ss</span></strong></h1>

            <div className='flex flex-row'>
                <div className='h-[300px] w-[500px] bg-gray-300 text-center p-5 text-2xl flex justify-center items-center mt-5'><span className='text-[#E80006] font-bold'>BW</span> <span className='text-[#02B4F4] font-bold'>BUSINESSWORLD</span>
                </div>
                
                
                <div className='bg-gray-200 h-[300px] w-[800px] mt-5'>
                   
                   <div className='flex justify-center items-center '> 
                   <div className="text-8xl font-bold ">,</div>
                   <div className="text-8xl font-bold text-gray-400">,</div>
                   </div>
                    <div className='text-center text-gray-500 text-xl font-medium p-5'>boAt is the first company from the consumer lifestyle electronics industry to collaborate with the ICEA to bring out the Indigenous IP.</div>


                    <div className='flex justify-center items-center gap-2'>
                        <div className='bg-gray-300 rounded-full text-2xl text-gray-400 p-1'><IoIosArrowBack /></div>
                        <div className='bg-gray-300 rounded-full text-2xl text-gray-400 p-1'><IoIosArrowForward /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs