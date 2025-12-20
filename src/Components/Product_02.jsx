import Light01 from "../Product_02-img/Light-img_01.jpg";
import Light02 from "../Product_02-img/Light-img_02.jpg";
import Light03 from "../Product_02-img/Light-img_03.jpg";
import Light04 from "../Product_02-img/Light-img_04.jpg";
import Light05 from "../Product_02-img/Light-img_05.jpg";
import Light06 from "../Product_02-img/Light-img_06.jpg";
import Light07 from "../Product_02-img/Light-img_07.jpg";
import Electronics01 from "../Product_02-img/Electronics-img_01.jpg";
import Electronics02 from "../Product_02-img/Electronics-img_02.jpg";
import Electronics03 from "../Product_02-img/Electronics-img_03.jpg";
import Electronics04 from "../Product_02-img/Electronics-img_04.jpg";
import Electronics05 from "../Product_02-img/Electronics-img_05.jpg";
import Electronics06 from "../Product_02-img/Electronics-img_06.jpg";
import Electronics07 from "../Product_02-img/Electronics-img_07.jpg";

function Product_02() {
  return (
    <div className="relative top-55">
      <div className="bg-white w-100% p-4 m-7 shadow-sm">
        <div className="flex flex-wrap gap-10 p-2 items-center">
          <p className="text-xl font-bold">
            Min. 50% off | Unique home finds | Amazon Brands & more
          </p>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            See all
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <img src={Light01} alt="" className="h-46 cursor-pointer" />
          <img src={Light02} alt="" className="h-46 cursor-pointer" />
          <img src={Light03} alt="" className="h-46 cursor-pointer" />
          <img src={Light04} alt="" className="h-46 cursor-pointer" />
          <img src={Light05} alt="" className="h-46 cursor-pointer" />
          <img src={Light06} alt="" className="h-46 cursor-pointer" />
          <img src={Light07} alt="" className="h-46 cursor-pointer" />
        </div>
      </div>
      <div className="bg-white w-100% p-4 m-7 shadow-sm">
        <div className="flex flex-wrap gap-10 p-2 items-center">
          <p className="text-xl font-bold">
            Up to 55% off | Electronics & accessories from Amazon Launchpad
          </p>
          <p className="text-sm text-blue-500 cursor-pointer hover:underline">
            Explore more
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <img src={Electronics01} alt="" className="h-46 cursor-pointer" />
          <img src={Electronics02} alt="" className="h-46 cursor-pointer" />
          <img src={Electronics03} alt="" className="h-46 cursor-pointer" />
          <img src={Electronics04} alt="" className="h-48 cursor-pointer" />
          <img src={Electronics05} alt="" className="h-46 cursor-pointer" />
          <img src={Electronics06} alt="" className="h-46 cursor-pointer" />
          <img src={Electronics07} alt="" className="h-46 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Product_02;
