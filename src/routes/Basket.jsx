import React from "react";
import TopBar from "../components/TopBar";
import img1 from "../assets/products/img1.svg";
function Basket() {
  return (
    <>
        <TopBar name={"BASKET"} buttons={"cart"} />
      <div className="top-8 relative gap-2 flex ">
        <div className="border-black border rounded-2xl w-28 h-28 items-center content-center flex">
          <div className="absolute top-4 bg-black w-6 text-white rounded items-center content-center  left-4">
            {"✔"}
          </div>
          <img className="" src={img1} alt="asd" />
        </div>
        <div className="text-left uppercase  justify-center grid">
          <h1 className="neue font-semibold text-sm ">Jordan 1 Retro High OG</h1>
          <h1 className="neue font-semibold text-xs text-gray-400">Size: UK9</h1>
          <div className="flex gap-2 items-center">
          <h1 className="neue text font-semibold">$120.00</h1>
          <p className="line-through text-gray-400">$399</p>
          <p className="text-red-600 font-bold text-[11px]">40% OFF</p>
          </div>
          <div className="flex gap-2 items-center">
            <button className="border w-6 h-6 rounded flex  items-center justify-center font-bold text-xl">
              -
            </button>
            <h1 className="neue text font-semibold text-sm text-gray-400">1</h1>
            <button className="border w-6 h-6 rounded flex  items-center  justify-center font-bold text-xl">
              +
            </button>
          </div>
        </div>
        <div className="flex content-center  justify-center items-center">
          <button className="neue text-sm text-gray-600  hover:border-gray-800 hover:text-gray-800">
            Remove
          </button>
          </div>
      </div>
    </>
  );
}

export default Basket;
