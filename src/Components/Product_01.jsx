import Phone01 from "../Product_01-Img/Phone-img_01.jpg";
import Phone02 from "../Product_01-Img/Phone-img_02.jpg";
import Phone03 from "../Product_01-Img/Phone-img_03.jpg";
import Phone04 from "../Product_01-Img/Phone-img_04.jpg";
import Appliances01 from "../Product_01-Img/Appliances-img_01.jpg";
import Appliances02 from "../Product_01-Img/Appliances-img_02.jpg";
import Appliances03 from "../Product_01-Img/Appliances-img_03.jpg";
import Appliances04 from "../Product_01-Img/Appliances-img_04.jpg";
import Tv01 from "../Product_01-Img/TV brands-img_01.jpg";
import Tv02 from "../Product_01-Img/TV brands-img_02.jpg";
import Tv03 from "../Product_01-Img/TV brands-img_03.jpg";
import Tv04 from "../Product_01-Img/TV brands-img_04.jpg";
import Home01 from "../Product_01-Img/HOME_SIZE-img_01.jpg";
import Home02 from "../Product_01-Img/HOME_SIZE-img_02.jpg";
import Home03 from "../Product_01-Img/HOME_SIZE-img_03.jpg";
import Home04 from "../Product_01-Img/HOME_SIZE-img_04.jpg";
import Headphones01 from "../Product_01-Img/Headphones-img_01.jpg";
import Headphones02 from "../Product_01-Img/Headphones-img_02.jpg";
import Headphones03 from "../Product_01-Img/Headphones-img_03.jpg";
import Headphones04 from "../Product_01-Img/Headphones-img_04.jpg";
import Automotive01 from "../Product_01-Img/Automotive-img_01.jpg";
import Automotive02 from "../Product_01-Img/Automotive-img_02.jpg";
import Automotive03 from "../Product_01-Img/Automotive-img_03.jpg";
import Automotive04 from "../Product_01-Img/Automotive-img_04.jpg";
import TvImg01 from "../Product_01-Img/TV-img_01.jpg";
import TvImg02 from "../Product_01-Img/TV-img_02.jpg";
import TvImg03 from "../Product_01-Img/TV-img_03.jpg";
import TvImg04 from "../Product_01-Img/TV-img_04.jpg";
import Furnishings01 from "../Product_01-Img/Home-furnishings_01.jpg";
import Furnishings02 from "../Product_01-Img/Home-furnishings_02.jpg";
import Furnishings03 from "../Product_01-Img/Home-furnishings_03.jpg";
import Furnishings04 from "../Product_01-Img/Home-furnishings_04.jpg";

function Product_01() {
  return (
    <>
      <div className="relative top-60 flex flex-wrap justify-evenly gap-5 p-4">
        <div className="flex flex-wrap justify-evenly gap-5">
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Shop by brand | Deals on top smartphones</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Phone01} alt="" className="h-26" />
                <p className="text-xs">Savings up to ₹12,000</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Phone02} alt="" className="h-26" />
                <p className="text-xs">Savings up to ₹5,000</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Phone03} alt="" className="h-26" />
                <p className="text-xs">Savings up to ₹4,000</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Phone04} alt="" className="h-26" />
                <p className="text-xs">Savings up to ₹4,000</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See all offers
              </p>
            </div>
          </div>
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Appliances for your home</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Appliances01} alt="" className="h-30" />
                <p className="text-xs">Air conditioners</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Appliances02} alt="" className="h-30" />
                <p className="text-xs">Refrigerators</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Appliances03} alt="" className="h-30" />
                <p className="text-xs">Microwaves</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Appliances04} alt="" className="h-30" />
                <p className="text-xs">Washing machines</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See more
              </p>
            </div>
          </div>
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Big Savings on top TV brands</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Tv01} alt="" className="h-26" />
                <p className="text-xs">
                  Sony TVs | Up to ₹5,000 exchange offers
                </p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Tv02} alt="" className="h-26" />
                <p className="text-xs">
                  Samsung TVs | Up to 12 months No Cost EMI
                </p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Tv03} alt="" className="h-26" />
                <p className="text-xs">LG TVs | Up to 40% off</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Tv04} alt="" className="h-26" />
                <p className="text-xs">Xiaomi TVs | Up to 50% Off</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See all offers
              </p>
            </div>
          </div>
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3> Amazon Brands & more</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Home01} alt="" className="h-26" />
                <p className="text-xs">Starting ₹199 | Bedsheets</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Home02} alt="" className="h-26" />
                <p className="text-xs">Starting ₹199 | Curtains</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Home03} alt="" className="h-26" />
                <p className="text-xs">
                  Minimum 40% off | Ironing board & more
                </p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Home04} alt="" className="h-26" />
                <p className="text-xs">Up to 60% off | Home decor</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See more
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-5">
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Starting ₹149 | Headphones</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Headphones01} alt="" className="h-30" />
                <p className="text-xs">Starting ₹249 | boAt</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Headphones02} alt="" className="h-30" />
                <p className="text-xs">Starting ₹349 | boult</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Headphones03} alt="" className="h-30" />
                <p className="text-xs">Starting ₹649 | Noise</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Headphones04} alt="" className="h-30" />
                <p className="text-xs">Starting ₹149 | Zebronics</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See all offers
              </p>
            </div>
          </div>
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Automotive essentials</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Automotive01} alt="" className="h-30" />
                <p className="text-xs">Cleaning accessories</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Automotive02} alt="" className="h-30" />
                <p className="text-xs">Tyre & rim care</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Automotive03} alt="" className="h-30" />
                <p className="text-xs">Helmets</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Automotive04} alt="" className="h-30" />
                <p className="text-xs">Vacuum cleaner</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See more
              </p>
            </div>
          </div>
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Revamp your home in style</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Furnishings01} alt="" className="h-26" />
                <p className="text-xs">Cushion covers, bedsheets & more</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Furnishings02} alt="" className="h-26" />
                <p className="text-xs">Figurines, vases & more</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Furnishings03} alt="" className="h-26" />
                <p className="text-xs">Home storage</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={Furnishings04} alt="" className="h-26" />
                <p className="text-xs">Lighting solutions</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                Explore all
              </p>
            </div>
          </div>
          <div className="bg-white w-86 sm:w-[45%] lg:w-[23%] h-[420px] shadow-sm">
            <div className="mt-5 ml-3 text-xl font-bold">
              <h3>Get your desired TV screen size</h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 p-5 gap-3">
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={TvImg01} alt="" className="h-26" />
                <p className="text-xs">
                  Budget TVs | Save extra with No Cost EMI
                </p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={TvImg02} alt="" className="h-26" />
                <p className="text-xs">4K TVs | Up to 24 months No Cost EMI</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={TvImg03} alt="" className="h-26" />
                <p className="text-xs">Big Screens | Free installation</p>
              </div>
              <div className=" max-w-none h-100% cursor-pointer">
                <img src={TvImg04} alt="" className="h-26" />
                <p className="text-xs">Ultra Premium TVs | Up to 50% off</p>
              </div>
              <p className="text-blue-800 mt-5 text-sm font-normal cursor-pointer">
                See all
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_01;
