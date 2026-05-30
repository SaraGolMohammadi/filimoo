'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoPlayCircle } from 'react-icons/io5';
import { FaThumbsUp } from 'react-icons/fa';
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import Filter from '../filter/page';

export default function Cart() {

  const carts = [
    { image: "/img/mov_30717_311088.jpg", title: "تیغ وترمه", rating: "5.5", time: "58" },
    { image: "/img/mov_172946_330406.jpg", title: "jumbo", rating: "4.5", time: "48" },
    { image: "/img/fwv8y_desktop_1_v1.jpeg", title: "تو را خواهند کشت", rating: "5.5", time: "48" },
    { image: "/img/2nsy4_desktop_1_v1.jpeg", title: "گوزن های اتوبان", rating: "6.5", time: "58" },
    { image: "/img/mov_175151_343277.jpg", title: "پنجره ای رو به جام", rating: "5.5", time: "48" },
    { image: "/img/mov_174980_343279.jpg", title: "شام ایرانی", rating: "5.5", time: "48" },
    { image: "/img/mov_174723_342818.jpg", title: "منشور", rating: "5.5", time: "48" },
    { image: "/img/mov_174579_342193.jpg", title: "تاج", rating: "5.5", time: "48" },
    { image: "/img/mov_174672_342669.jpg", title: "chickenhare", rating: "5.5", time: "48" },
    { image: "/img/fm0pg_desktop_1_v1.webp", title: "جهنده ها", rating: "5.5", time: "48" },
    { image: "/img/mov_118009_37676-b.jpg", title: "خرگوش", rating: "5.5", time: "48" },
    { image: "/img/mov_174724_343281.jpg", title: "بدنام", rating: "5.5", time: "48" },
    { image: "/img/mov_174719_343063.jpg", title: "جابه جا شدن", rating: "5.5", time: "48" },
    { image: "/img/mov_175106_343284.jpg", title: "بدو کادو", rating: "5.5", time: "48" },
    { image: "/img/mov_174946_342794.jpg", title: "BRIGHT", rating: "5.5", time: "48" },
    { image: "/img/mov_119739_40176-b.jpg", title: "پنجره ای رو به جام", rating: "5.5", time: "48" },
    { image: "/img/mov_175072_343024.jpg", title: "شام ایرانی", rating: "5.5", time: "48" },
    { image: "/img/mov_174975_343113.jpg", title: "منشور", rating: "5.5", time: "48" },
    { image: "/img/mov_174878_342526.jpg", title: "تاج", rating: "5.5", time: "48" },
    { image: "/img/mov_174946_342791.jpg", title: "chickenhare", rating: "5.5", time: "48" },
    { image: "/img/mov_140972_68332.jpg", title: "جهنده ها", rating: "5.5", time: "48" },
    { image: "/img/mov_174005_343341.jpg", title: "خرگوش", rating: "5.5", time: "48" },
    { image: "/img/mov_174827_343096.jpg", title: "بدنام", rating: "5.5", time: "48" },
    { image: "/img/mov_174960_342813.jpg", title: "جابه جا شدن", rating: "5.5", time: "48" },
    { image: "/img/mov_175145_343269.jpg", title: "بدو کادو", rating: "5.5", time: "48" },
  ];

  const [showAll, setShowAll] = useState(false);
  const displayedCarts = showAll ? carts : carts.slice(0, 15);

  return (
   
    <div id="special-section" className="w-full absolute  mr-5 top-80 z-20 container mx-auto px-4 py-8 ">
    
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-right text-white">ویژه</h1>
      </div>
     
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {displayedCarts.map((cart, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-visible shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{ zIndex: displayedCarts.length - index }}
          >
            <div className="relative w-full h-38 bg-gray-200 overflow-hidden rounded-t-lg">
              <Image
                src={cart.image}
                alt={cart.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
         
            <div className="absolute top-full left-0 right-0 bg-black transform -translate-y-2 opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out p-3 shadow-lg rounded-b-lg z-[999]">
              <h3 className="text-lg font-semibold text-right text-white">{cart.title}</h3>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-sm text-yellow-600 px-1 py-0.5 bg-amber-100 rounded-lg flex flex-row-reverse">
                    {cart.rating}
                    <span className="text-yellow-500">★</span>
                  </h1>
                  <span className="text-xs text-white flex flex-row-reverse p-1 rounded-lg gap-2 bg-green-600">
                    {cart.time} <FaThumbsUp />
                  </span>
                </div>
                <IoPlayCircle size={36} className="text-green-500 drop-shadow-lg transition-transform duration-200 group-hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className="flex flex-row justify-center gap-3 mt-5 mb-8">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 border border-gray-500 text-white rounded-lg flex flex-row justify-center text-center hover:border-white hover:scale-105 transition-transform duration-300"
          >
            مشاهده همه <BsChevronDown className="mr-2 mt-2" />
          </button>
        )}
        {showAll && (
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
            className="px-4 py-2 border border-gray-500 flex flex-row justify-center text-white rounded-lg hover:border-white hover:scale-105 transition-transform duration-300"
          >
            نمایش کمتر <BsChevronUp className="mr-2 mt-1" />
          </button>
        )}
      </div>
      <Filter/>
    </div>
  );
}
