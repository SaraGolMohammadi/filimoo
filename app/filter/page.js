'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams } from 'next/navigation';
import HomePage from '../genres/page';

export default function Filter() {
  const [openMenu, setOpenMenu] = useState(null);
  const searchParams = useSearchParams();
  const params = useParams();
  const currentCategory = params.category || 'movie'; 

  const closeAll = () => setOpenMenu(null);


  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  return (
    <div className="p-4" dir="rtl">
      <div className="flex flex-wrap justify-center gap-8 p-5 text-white">
        
          <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === 'type' ? null : 'type')}
            className="border px-10 py-2 rounded text-[12px]"
          >
            فیلم و سریال
          </button>
          {openMenu === 'type' && (
            <div className="absolute top-full mt-1 bg-black border rounded z-10">
              <Link href={`/category/movie?${searchParams.toString()}`} onClick={closeAll} className="block px-13 py-2 hover:bg-gray-800">
                فیلم
              </Link>
              <Link href={`/category/series?${searchParams.toString()}`} onClick={closeAll} className="block px-13 py-2 hover:bg-gray-800">
                سریال
              </Link>
            </div>
          )}
        </div>

   
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === 'lang' ? null : 'lang')}
            className="border px-10 py-2 rounded text-[12px]"
          >
            زبان
          </button>
          {openMenu === 'lang' && (
            <div className="absolute top-full mt-1 bg-black border rounded z-10 min-w-[180px]">
              <Link href={`/category/${currentCategory}?${createQueryString('lang', 'farsi')}`} onClick={closeAll} className="block px-4 py-2 hover:bg-gray-800">
                فارسی (دوبله)
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('lang', 'subtitle')}`} onClick={closeAll} className="block px-4 py-2 hover:bg-gray-800">
                زیرنویس فارسی
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('lang', 'english')}`} onClick={closeAll} className="block px-4 py-2 hover:bg-gray-800">
                زیرنویس انگلیسی
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('lang', 'original')}`} onClick={closeAll} className="block px-4 py-2 hover:bg-gray-800">
                زبان اصلی
              </Link>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === 'age' ? null : 'age')}
            className="border px-10 py-2 rounded text-[12px]"
          >
            رده سنی
          </button>
          {openMenu === 'age' && (
            <div className="absolute top-full mt-1 bg-black border rounded z-10">
              <Link href={`/category/${currentCategory}?${createQueryString('age', '13')}`} onClick={closeAll} className="block px-12 py-2 hover:bg-gray-800">
                +13
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('age', '15')}`} onClick={closeAll} className="block px-12 py-2 hover:bg-gray-800">
                +15
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('age', '18')}`} onClick={closeAll} className="block px-12 py-2 hover:bg-gray-800">
                +18
              </Link>
            </div>
          )}
        </div>

  
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === 'country' ? null : 'country')}
            className="border px-10 py-2 rounded text-[12px]"
          >
            کشور
          </button>
          {openMenu === 'country' && (
            <div className="absolute top-full mt-1 bg-black border rounded z-10">
              <Link href={`/category/${currentCategory}?${createQueryString('country', 'iran')}`} onClick={closeAll} className="block px-6 py-2 hover:bg-gray-800">
                ایران
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('country', 'usa')}`} onClick={closeAll} className="block px-6 py-2 hover:bg-gray-800">
                آمریکا
              </Link>
            </div>
          )}
        </div>

   
        <div className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === 'genre' ? null : 'genre')}
            className="border px-10 py-2 rounded text-[12px]"
          >
            ژانر
          </button>
          {openMenu === 'genre' && (
            <div className="absolute top-full mt-1 bg-black border rounded z-10">
              <Link href={`/category/${currentCategory}?${createQueryString('genre', 'action')}`} onClick={closeAll} className="block px-6 py-2 hover:bg-gray-800">
                اکشن
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('genre', 'drama')}`} onClick={closeAll} className="block px-6 py-2 hover:bg-gray-800">
                درام
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('genre', 'horror')}`} onClick={closeAll} className="block px-6 py-2 hover:bg-gray-800">
                ترسناک
              </Link>
              <Link href={`/category/${currentCategory}?${createQueryString('genre', 'comedy')}`} onClick={closeAll} className="block px-6 py-2 hover:bg-gray-800">
                کمدی
              </Link>
            </div>
          )}
        </div>

      </div>

      <div className="mt-10">
        <HomePage />
      </div>
    </div>
  );
}