import React from "react";
import logo from "../Footer-Img/Amazon-logo.png";
import Flag from "../Footer-Img/flag.jpg";
import { TfiWorld } from "react-icons/tfi";
import { PiCaretUpDownFill } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="relative top-50">
        <div className="max-w-100% bg-[#303e4f] text-center text-white p-3 hover:bg-[#4e5761] ">
          <p>Back to top</p>
        </div>
        <div className="w-100% h-100% bg-[#232F3E] text-white p-10">
          <div className="flex flex-wrap justify-center gap-25">
            <div>
              <h3 className="font-semibold">Get to Know Us</h3>
              <p className="text-sm p-1 mt-2 cursor-pointer hover:underline">
                About Amazon
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Careers
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Press Releases
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Amazon Science
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Connect with Us</h3>
              <p className="text-sm p-1 mt-2 cursor-pointer hover:underline">
                Facebook
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Twitter
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Instagram
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Make Money with Us</h3>
              <p className="text-sm p-1 mt-2 cursor-pointer hover:underline">
                Sell on Amazon
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Sell under Amazon Accelerator
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Protect and Build Your Brand
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Amazon Global Selling
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Supply to Amazon
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Become an Affiliate
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Fulfilment by Amazon
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Advertise Your Products
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Amazon Pay on Merchants
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Let Us Help You</h3>
              <p className="text-sm p-1 mt-2 cursor-pointer hover:underline">
                Your Account
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Returns Centre
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Recalls and Product Safety Alerts
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                100% Purchase Protection
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">
                Amazon App Download
              </p>
              <p className="text-sm p-1 cursor-pointer hover:underline">Help</p>
            </div>
          </div>
        </div>
        <hr className="text-[#445264]" />
        <div className="max-w-100% p-5 bg-[#232f3e] text-white">
          <div className="flex flex-wrap justify-center items-center">
            <img src={logo} alt="" className="h-8 cursor-pointer" />
            <div className="flex flex-wrap gap-2 ml-15">
              <div className="flex gap-2 items-center border-1 border-white p-2 rounded-sm cursor-pointer">
                <TfiWorld />
                <p>English</p>
                <PiCaretUpDownFill className="text-gray-400" />
              </div>
              <div className="flex gap-2 border-1 border-white p-2 rounded-sm items-center cursor-pointer">
                <img src={Flag} alt="" className="w-4 h-3 mt-0.5" />
                <p>India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#131A22] w-100% p-10 text-white">
          <div className="flex flex-wrap justify-center gap-20">
            <div className="cursor-pointer hover:underline">
              <p className="text-xs font-bold">AbeBooks</p>
              <p className="text-xs">
                Books, art <br />& collectibles
              </p>
            </div>
            <div className="cursor-pointer hover:underline">
              <p className="text-xs font-bold">Amazon Web Services</p>
              <p className="text-xs">
                Scalable Cloud <br />
                Computing Services
              </p>
            </div>
            <div className="cursor-pointer hover:underline">
              <p className="text-xs font-bold">Audible</p>
              <p className="text-xs">
                Download
                <br />
                Audio Books
              </p>
            </div>
            <div className="cursor-pointer hover:underline">
              <p className="text-xs font-bold">IMDb</p>
              <p className="text-xs">
                Movies, TV
                <br />& Celebrities
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-20 ml-16">
            <div className="mt-5 cursor-pointer hover:underline">
              <p className="text-xs font-bold">Shopbop</p>
              <p className="text-xs">
                Designer
                <br />
                Fashion Brands
              </p>
            </div>
            <div className="mt-5 cursor-pointer hover:underline">
              <p className="text-xs font-bold">Amazon Business</p>
              <p className="text-xs">
                Everything For
                <br />
                Your Business
              </p>
            </div>
            <div className="mt-5 cursor-pointer hover:underline">
              <p className="text-xs font-bold">Prime Now</p>
              <p className="text-xs">
                2-Hour Delivery
                <br />
                on Everyday Items
              </p>
            </div>
            <div className="mt-5 cursor-pointer hover:underline">
              <p className="text-xs font-bold">Amazon Prime Music</p>
              <p className="text-xs">
                100 million songs, ad- <br />
                free <br />
                Over 15 million podcast <br /> episodes
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-5">
            <p className="text-xs font-bold cursor-pointer hover:underline">
              Conditions of Use & Sale
            </p>
            <p className="text-xs font-bold cursor-pointer hover:underline">
              Privacy Notice
            </p>
            <p className="text-xs font-bold cursor-pointer hover:underline">
              Interest-Based Ads
            </p>
          </div>
          <h3 className="text-center text-xs mt-1">
            © Amazon Clone
          </h3>
        </div>
      </footer>
    </>
  );
}

export default Footer;
