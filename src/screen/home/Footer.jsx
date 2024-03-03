import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { FaFacebookF ,FaInstagram} from "react-icons/fa";
import { FaXTwitter ,FaYoutube , FaLinkedinIn} from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='container mx-auto'>
        <div className=' flex flex-row justify-between items-center p-5 bg-gray-200 '>
            <div>
                <img src={require("../../assets/logo.png")} alt="logo" className="cursor-pointer max-w-36 bg-gray-200" />
                <div className='font-bold text-2xl'>Subscribe to our email alerts!</div>
                <div className='flex items-center mt-2'>
                    <input type='text' placeholder='Enter your email address' className='p-3 w-full bg-gray-100 rounded-xl outline-none' />
                    <CiCircleChevRight className='-ml-8' />
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Shop</h1>

                <div className='grid grid-cols-2 text-sm gap-2 mt-2 text-gray-600 '>
                    <div className='space-y-3'>
                        <div>True Wireless Earbuds</div>
                        <div>Wired Headphones</div>
                        <div>Home Audio</div>
                        <div>Smart Watches</div>
                        <div>Misfit Trimmers</div>
                    </div>
                    <div className='space-y-3'>
                        <div>Wireless Headphones</div>
                        <div>Wireless Speakers</div>
                        <div>Mobile Accessories</div>
                        <div>TRebel</div>
                        <div>Refer & Earn</div>
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <h1 className='font-bold'>Shop</h1>

                <div className='grid grid-cols-1 text-sm gap-2  text-gray-600 mt-2 '>
                <div className='space-y-3'>
                        <div>Track Your Order</div>
                        <div>Warranty & Support</div>
                        <div>Return Policy</div>
                        <div>Service Centers</div>
                        <div>Bulk Orders</div>
                        <div>FAQs</div>
                        <div>Why Buy Direct</div>
                    </div>

                   
                </div>
            </div>
             <div className='mt-20'>
                <h1 className='font-bold'>Shop</h1>

                <div className='grid grid-cols-1 text-sm gap-2  text-gray-600 mt-2'>
                <div className='space-y-3'>
                        <div>About boAt</div>
                        <div>News</div>
                        <div>Read Our Blog</div>
                        <div>Careers</div>
                        <div>Security</div>
                        <div>Investor Relations</div>
                        <div>Social Responsibility</div>
                        <div>Warranty Policy</div>
                    </div>

                   
                </div>
            </div>

        </div>





        <div className='bg-gray-100 p-5'>
            <div className='flex gap-3 justify-center items-center font-bold p-5 text-xl'>Let's get social <FaFacebookF /><FaXTwitter /> <FaInstagram /><FaYoutube /><FaLinkedinIn /></div>
            <div className='text-center text-gray-600 text-sm font-semibold mt-5'>Privacy Policy . Terms & Conditions</div>
            <div className='text-center text-gray-400 text-sm  mt-4'>&#169; 2024 Imagine Marketing Limited. All Rights Reserved.</div>
            <div className='text-center text-gray-400 text-sm  mt-4'>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing, <br/> Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India</div>
        </div>
        </div>
    )
}

export default Footer