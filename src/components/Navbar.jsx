import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown, IoMdArrowDropdown } from "react-icons/io";
// import img from '../assets/logo.png'
const categoriesData = [
    { image: require("../assets/boat1.webp"), title: 'True Wireless Earbuds' },
    { image: require("../assets/wireless speaker.webp"), title: 'Wireless Speakers' },
    { image: require("../assets/cables.png"), title: 'Cables' },
    { image: require("../assets/party speaker.png"), title: 'Party Speakers' },
    { image: require("../assets/personalised product.png"), title: 'Personalised Products' },
    { image: require("../assets/car measure.png"), title: 'Car Accessories' },
    { image: require("../assets/wiredheadphones.png"), title: 'Wired Headphones' },
    { image: require("../assets/boat1.webp"), title: 'Wireless Earbuds' },
    { image: require("../assets/MISFIT-shop.png"), title: 'Misfit Trimmers' },
    { image: require("../assets/imageedit.png"), title: 'Superhero Collection' },
    { image: require("../assets/Neckbands.png"), title: 'Neckbands' },
    { image: require("../assets/wiredheadphones.png"), title: 'Wired Earphones' },
    { image: require("../assets/Charger.png"), title: 'Chargers' },
    { image: require("../assets/New-Category-Banners.png"), title: 'Trebel for Women' },
    { image: require("../assets/Collections.png"), title: 'Smart Watches' },
    { image: require("../assets/party speaker.png"), title: 'Soundbars' },
    { image: require("../assets/powerbank.png"), title: 'Power Banks' },
    { image: require("../assets/dropdown-limited.png"), title: 'Limited Edition' },
    { image: require("../assets/Wiredearphones.png"), title: 'Wireless Headphones' },
    { image: require("../assets/Rectangle.png"), title: 'Gaming Headphones' },
    { image: require("../assets/cables.png"), title: 'Cables' },
];

const Navbar = () => {
    return (
        <div className="bg-white shadow p-4 ">
            <header className="container mx-auto flex justify-between items-center ">
                <div className="max-w-24 ">
                    <img
                        src={require("../assets/logo.png")}
                        alt="logo"
                        className="cursor-pointer"
                    />
                </div>
                <nav className="flex gap-4">

                    <div className="relative cursor-pointer group ">
                        <div className="flex items-center  ">
                            Categories
                            <IoMdArrowDropdown className="text-lg duration-200 group-hover:rotate-180" />
                        </div>
                        <div className="absolute z-40  rounded-xl left-0 top-[36px] hidden group-hover:flex w-full ">
                            <div className="p-8 bg-white text-black h-min rounded-b-xl  items-center gap-4 whitespace-nowrap grid grid-cols-3 xl:grid-cols-5 w-full ">
                                {categoriesData.map((category, index) => (
                                    <div key={index} className="flex items-center " >
                                        <img src={category.image} alt='' className="mr-2 max-h-10" />
                                        <div>{category.title}</div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>

                    </div>
                    <Link to="/">boAt Personalisation</Link>
                    <Link to="/">Gift With boAt</Link>
                    <Link to="/">Corporate Orders</Link>

                    <div className="relative  cursor-pointer group ">
                        <div className="flex items-center  ">
                            More
                            <IoIosArrowDown className="text-lg duration-200 group-hover:rotate-180" />
                        </div>
                        <div className="absolute z-40 hidden  rounded-xl -left-8 top-[36px] group-hover:block">
                            <div className="p-4 bg-white text-black h-min rounded-b-xl whitespace-nowrap  flex flex-col ">
                                <div className="">Daily Deals</div>
                                <div className="">Do What FloAts Your boAt</div>
                                <div className="">Blogs</div>
                                <div className="">Refer & Earn </div>
                                <div className=""> Careers</div>
                                <div className=""> Social Responsibility</div>
                                <div className=""> Store Locator </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex gap-4 text-xl items-center">
                    <div className="flex rounded-xl bg-neutral-100  px-2 gap-1 ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="min-h-4 outline-none bg-transparent w-56 px-2"
                        />
                        <CiSearch className="min-h-10 text-blue-600" />
                    </div>
                    <FaRegUser />
                    <BsHandbag />
                </div>


            </header>
        </div>
    );
};

export default Navbar;
