import React from "react";
import bag from "./assets/image/Bag.png";
import subtract from "./assets/image/Subtract.png";
import { FaSearch } from "react-icons/fa";

function Rice({ onOpenLogin }) {
  const cards = [
    { name: "Teriyaki Rice Bowl", tag: "Healthy", price: "$14.90" },
    { name: "Chicken Burrito Bowl", tag: "Popular", price: "$16.50" },
    { name: "Veggie Power Bowl", tag: "Fresh", price: "$13.20" },
  ];

  return (
    <div className="min-h-screen bg-amber-50/40">
      {/* <div className="flex flex-col gap-4 px-4 pt-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center gap-1.5">
          <img src={subtract} className="w-6" alt="Fitme logo" />
          <p className="text-2xl font-bold text-black">Fitme</p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-end lg:w-auto">
          <div className="flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-3 py-2 shadow-sm transition duration-200 focus-within:border-amber-500 focus-within:shadow-md sm:min-w-[280px] lg:min-w-[420px]">
            <FaSearch className="text-gray-500" />
            <input
              className="w-full border-none bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
              placeholder="Enter item or restaurant you are looking for"
            />
          </div>

          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white p-2 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <img src={bag} className="h-5 w-5" alt="Bag icon" />
            </button>

            <button
              type="button"
              onClick={onOpenLogin}
              className="h-10 w-24 rounded bg-black text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
            >
              sign in
            </button>
          </div>
        </div>
      </div> */}

      <div className="px-4 pb-10 pt-12 sm:px-6 lg:px-20">
        <p className="text-xl font-semibold text-black sm:text-2xl">Search results for “ Rice Bowls”</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="w-24 rounded bg-amber-600 px-4 py-2 text-white shadow-sm transition duration-200 hover:-translate-y-1 hover:bg-amber-500 hover:shadow-md">
            Dishes
          </button>
          <button className="w-32 rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-200 hover:-translate-y-1 hover:border-amber-600 hover:text-amber-600 hover:shadow-md">
            Restaurants
          </button>
        </div>

        {/* <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((item) => (
            <div
              key={item.name}
              className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50 transition duration-300 group-hover:scale-[1.02]" />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-black">{item.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.tag}</p>
                </div>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-sm font-medium text-amber-700">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Rice;