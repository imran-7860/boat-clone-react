import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown} from "react-icons/io";
// import img from '../assets/logo.png'
const categoriesData = [
  { image: require("../assets/boat1.webp"), title: "True Wireless Earbuds" },
  {
    image: require("../assets/wireless speaker.webp"),
    title: "Wireless Speakers",
  },
  { image: require("../assets/cables.png"), title: "Cables" },
  { image: require("../assets/party speaker.png"), title: "Party Speakers" },
  {
    image: require("../assets/personalised product.png"),
    title: "Personalised Products",
  },
  { image: require("../assets/car measure.png"), title: "Car Accessories" },
  {
    image: require("../assets/wiredheadphones.png"),
    title: "Wired Headphones",
  },
  { image: require("../assets/boat1.webp"), title: "Wireless Earbuds" },
  { image: require("../assets/MISFIT-shop.png"), title: "Misfit Trimmers" },
  { image: require("../assets/imageedit.png"), title: "Superhero Collection" },
  { image: require("../assets/Neckbands.png"), title: "Neckbands" },
  { image: require("../assets/wiredheadphones.png"), title: "Wired Earphones" },
  { image: require("../assets/Charger.png"), title: "Chargers" },
  {
    image: require("../assets/New-Category-Banners.png"),
    title: "Trebel for Women",
  },
  { image: require("../assets/Collections.png"), title: "Smart Watches" },
  { image: require("../assets/party speaker.png"), title: "Soundbars" },
  { image: require("../assets/powerbank.png"), title: "Power Banks" },
  {
    image: require("../assets/dropdown-limited.png"),
    title: "Limited Edition",
  },
  {
    image: require("../assets/Wiredearphones.png"),
    title: "Wireless Headphones",
  },
  { image: require("../assets/Rectangle.png"), title: "Gaming Headphones" },
  { image: require("../assets/cables.png"), title: "Cables" },
];

const Navbar = () => {
  return (
    <div className="p-4 text-gray-700 bg-white shadow">
      <header className="container flex items-center justify-between mx-auto ">
        <div className="max-w-24 ">
          <img
            src={require("../assets/logo.png")}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <nav className="flex gap-4 lg:gap-8 lg:text-lg">
          <div className="relative cursor-pointer group ">
            <div className="flex items-center gap-2">
              <Link to="/">boAt Personalisation</Link>
              <IoIosArrowDown className="text-lg duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute z-40  rounded-xl -left-60 top-[25px]  group-hover:block hidden w-[80vw]  text-base  pb-10 bg-none">
              <div className="grid items-center w-full grid-cols-3 gap-4 p-4 m-4 bg-white h-min rounded-b-xl whitespace-nowrap lg:grid-cols-4 ">
                {categoriesData.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center rounded hover:bg-gray-200"
                  >
                    <img
                      src={category.image}
                      alt=""
                      className="mr-2 max-h-10"
                    />
                    <div>{category.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/">Gift With boAt</Link>
          <Link to="/">Corporate Orders</Link>

          <div className="relative cursor-pointer group ">
            <div className="flex items-center gap-2 ">More <IoIosArrowDown className="text-lg duration-200 group-hover:rotate-180" /></div>
           
            <div className="absolute z-40 hidden  rounded-xl -left-8 top-[25px] group-hover:block pt-4">
              <div className="flex flex-col p-4 pt-4 space-y-1 text-base text-gray-700 bg-white h-min rounded-b-xl whitespace-nowrap ">
                <div className="px-2 py-1 rounded hover:bg-gray-200">
                  Daily Deals
                </div>
                <div className="px-2 py-1 rounded hover:bg-gray-200">
                  Do What FloAts Your boAt
                </div>
                <div className="px-2 py-1 rounded hover:bg-gray-200">Blogs</div>
                <div className="px-2 py-1 rounded hover:bg-gray-200">
                  Refer & Earn{" "}
                </div>
                <div className="px-2 py-1 rounded hover:bg-gray-200">
                  {" "}
                  Careers
                </div>
                <div className="px-2 py-1 rounded hover:bg-gray-200">
                  {" "}
                  Social Responsibility
                </div>
                <div className="px-2 py-1 rounded hover:bg-gray-200">
                  {" "}
                  Store Locator{" "}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-4 ">
          <form action="">
            <div className="flex gap-1 px-2 rounded-xl bg-neutral-100 ">
              <input
                type="text"
                placeholder="Search"
                required
                className="w-56 px-2 bg-transparent outline-none min-h-4"
              />
              <button className="" type="submit">
                <CiSearch className="text-xl text-blue-600 cursor-pointer min-h-10" />
              </button>
            </div>
          </form>

          <FaRegUser className="text-xl" />
          <BsHandbag className="text-xl" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
