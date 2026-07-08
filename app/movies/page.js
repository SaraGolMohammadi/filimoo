'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoPlayCircle } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa';
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import Filter from '../filter/page';

export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/data/carts.json")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت دیتا:", err);
        setLoading(false);
      });
  }, []);

  const displayedCarts = showAll ? carts : carts.slice(0, 15);

  if (loading) return <div className="text-center py-20 text-white">در حال بارگذاری...</div>;

  return (
    <div id="special-section" className="w-full absolute top-80 left-1/2 -translate-x-1/2 z-20 container mx-auto px-2 sm:px-4">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-right text-white">ویژه</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {displayedCarts.map((cart, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-visible shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{ zIndex: displayedCarts.length - index }}
          >
            <div className="relative w-full h-32 sm:h-36 md:h-40 lg:h-44 bg-gray-200 overflow-hidden rounded-t-lg">
              <Image
                src={cart.image}
                alt={cart.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="
              absolute top-full left-0 right-0 bg-black 
              opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible 
              group-hover:translate-y-0
              transition-all duration-300 ease-out p-2 sm:p-3 shadow-lg rounded-b-lg z-[999]
            ">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-right text-white truncate">
                {cart.title}
              </h3>
              <div className="flex justify-between items-center mt-1 sm:mt-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <h1 className="text-xs sm:text-sm text-yellow-600 px-1 py-0.5 bg-amber-100 rounded-lg flex flex-row-reverse items-center">
                    {cart.rating}
                    <span className="text-yellow-500 mr-1">★</span>
                  </h1>
                  <span className="text-[10px] sm:text-xs text-white flex flex-row-reverse p-1 rounded-lg gap-1 sm:gap-2 bg-green-600 items-center">
                    {cart.time} <FaThumbsUp size={10} className="sm:text-xs" />
                  </span>
                </div>
                <IoPlayCircle size={28} className="sm:text-[32px] md:text-[36px] text-green-500 drop-shadow-lg transition-transform duration-200 group-hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center gap-3 mt-4 sm:mt-5 mb-6 sm:mb-8">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-500 text-white rounded-lg 
              flex flex-row justify-center items-center text-center 
              hover:border-white hover:scale-105 active:scale-95 
              transition-all duration-300 text-sm sm:text-base"
          >
            مشاهده همه <BsChevronDown className="mr-1 sm:mr-2 mt-0.5" />
          </button>
        ) : (
          <button
            onClick={() => {
              setShowAll(false);
              setTimeout(() => {
                document.getElementById('special-section')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }, 100);
            }}   
            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-500 flex flex-row justify-center items-center 
              text-white rounded-lg hover:border-white hover:scale-105 active:scale-95 
              transition-all duration-300 text-sm sm:text-base"
          >
            نمایش کمتر <BsChevronUp className="mr-1 sm:mr-2 mt-0.5" />
          </button>
        )}
      </div>
      
      <Filter/>
    </div>
  );
}
