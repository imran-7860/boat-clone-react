import React from 'react';

const Bestseller = () => {
    return (
        <div className='container mx-auto mt-5 py-10'>
            <h1 className='text-xl'>Explore <strong >Bestselle<span className='decoration-red-700 underline '>rs</span></strong></h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-5 content-center gap-9 lg:gap-4'>
                <div className=' flex flex-col items-center ' >
                    <video width="640" height="360"  autoPlay loop muted className='rounded-xl'>
                        <source src={require('../../assets/1.mp4')} type="video/mp4" />
                    </video>
                    <div className='font-bold mt-2'>SmartWatches</div>
                </div>
                <div className=' flex flex-col items-center ' >
                    <video width="640" height="360"  autoPlay  loop muted className='rounded-xl'>
                        <source src={require('../../assets/2.mp4')} type="video/mp4" />
                    </video>
                    <div className='font-bold mt-2'>Wireless Earbuds</div>
                </div>
                <div className=' flex flex-col items-center ' >
                    <video width="640" height="360"  autoPlay  loop muted className='rounded-xl'>
                        <source src={require('../../assets/3.mp4')} type="video/mp4" />
                    </video>
                    <div className='font-bold mt-2'>Neckbands</div>
                </div>
                <div className=' flex flex-col items-center ' >
                    <video width="640" height="360"  autoPlay  loop muted className='rounded-xl'>
                        <source src={require('../../assets/4.mp4')} type="video/mp4" />
                    </video>
                    <div className='font-bold mt-2'>Headphones</div>
                </div>
            </div>
        </div>
    );
}

export default Bestseller;
