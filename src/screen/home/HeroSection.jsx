import React from 'react';
import herosectionImage from '../../assets/herosection.webp'; // Adjust the path based on your project structure

const HeroSection = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row '>
  <div className='md:w-1/3 lg:w-1/2 flex items-center'>
    <img src={herosectionImage} alt='' className='w-full   my-auto' />
  </div>
  <div className='p-16 md:w-2/3 lg:w-1/2'>
    <div>
      <div className='text-[55px] font-bold'>Your Bulk Orders</div>
      <span className='text-2xl font-semibold'>Are Now Hassle Free</span>
    </div>
    <div className='mt-10'>
      <div className='text-4xl font-bold'>Got A Big boAt Order?</div>
      <div className='text-xl font-medium'>Come sail with us</div>
    </div>
    <div className='mt-10'>
      <div className='text-xl '>For shipments of 25 units or more,</div>
      <div className='text-xl font-bold'>Hit us up!</div>
    </div>
    <div className='bg-black text-white rounded-lg p-3 text-center mt-10'>
      <button>Submit Your Requirement</button>
    </div>
  </div>
</div>


  );
}

export default HeroSection;
