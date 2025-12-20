import Computers01 from "../Product_04-img/Computers-img_01.jpg";
import Computers02 from "../Product_04-img/Computers-img_02.jpg";
import Computers03 from "../Product_04-img/Computers-img_03.jpg";
import Computers04 from "../Product_04-img/Computers-img_04.jpg";
import Computers05 from "../Product_04-img/Computers-img_05.jpg";
import Computers06 from "../Product_04-img/Computers-img_06.jpg";
import Computers07 from "../Product_04-img/Computers-img_07.jpg";
import Clutter01 from "../Product_04-img/Clutter-free-img_01.jpg";
import Clutter02 from "../Product_04-img/Clutter-free-img_02.jpg";
import Clutter03 from "../Product_04-img/Clutter-free-img_03.jpg";
import Clutter04 from "../Product_04-img/Clutter-free-img_04.jpg";
import Clutter05 from "../Product_04-img/Clutter-free-img_05.jpg";
import Clutter06 from "../Product_04-img/Clutter-free-img_06.jpg";
import Clutter07 from "../Product_04-img/Clutter-free-img_07.jpg";

function Product_04() {
  return (
    <div className="relative top-55">
      <div className="bg-white w-100% p-4 m-7 shadow-sm">
        <div className="flex flex-wrap gap-10 p-2 items-center">
          <p className="text-xl font-bold">
            Best Sellers in Computers & Accessories
          </p>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            See all offers
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <img src={Computers01} alt="" className="h-38 cursor-pointer" />
          <img src={Computers02} alt="" className="h-38 cursor-pointer" />
          <img src={Computers03} alt="" className="h-38 cursor-pointer" />
          <img src={Computers04} alt="" className="h-38 cursor-pointer" />
          <img src={Computers05} alt="" className="h-38 cursor-pointer" />
          <img src={Computers06} alt="" className="h-38 cursor-pointer" />
          <img src={Computers07} alt="" className="h-38 cursor-pointer" />
        </div>
      </div>
      <div className="bg-white w-100% p-4 m-7 shadow-sm">
        <div className="flex flex-wrap gap-10 p-2 items-center">
          <p className="text-xl font-bold">
            Up to 40% off | Smart storage, clutter-free living
          </p>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            See all offers
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <img src={Clutter01} alt="" className="h-42 cursor-pointer" />
          <img src={Clutter02} alt="" className="h-42 cursor-pointer" />
          <img src={Clutter03} alt="" className="h-42 cursor-pointer" />
          <img src={Clutter04} alt="" className="h-42 cursor-pointer" />
          <img src={Clutter05} alt="" className="h-42 cursor-pointer" />
          <img src={Clutter06} alt="" className="h-42 cursor-pointer" />
          <img src={Clutter07} alt="" className="h-42 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Product_04;
