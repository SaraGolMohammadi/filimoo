'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa';

export default function Header() {
 
  return (
    <header className="absolute top-2 left-0 w-full z-50 from-black/70 to-transparent">
      <div className="container mx-auto px-4 py-3">
        
       
       
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
          
        
          <div className="flex items-center justify-between md:justify-start gap-3 md:gap-5 md:flex-1">
            
          
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/img/fa-filimo-dark-logo-v2.svg"
                alt="لوگو فیلمو" 
                width={70} 
                height={70} 
                className="md:w-[90px]"
              />
            </Link>

          
            <nav className="md:flex-1 overflow-visible">
              <ul className="flex flex-nowrap gap-2 md:gap-3 lg:gap-4 font-medium text-white text-xs md:text-sm overflow-visible">
       
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    فیلم
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                  <div className="absolute top-full right-0 mt-1 w-64 bg-black/90 backdrop-blur-md rounded-lg p-3 grid grid-cols-2 gap-2 z-150 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">انیمیشن</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">وحشت</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">هیجان‌انگیز</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">علمی تخیلی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">ماجراجویی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">جنایی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">رازآلود</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">مستند</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">تاریخی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">بیوگرافی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">کمدی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">اکشن</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">جنگی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">عاشقانه</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">خانوادگی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">فانتزی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">وسترن</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">درام</a>
                  
                  </div>
                </li>

              
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    سریال
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                  <div className="absolute top-full right-0 mt-1 w-64 bg-black/90 backdrop-blur-md rounded-lg p-3 grid grid-cols-2 gap-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">کمدی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">ریلیتی شو</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">عاشقانه</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">اکشن</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">مستند</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">تاریخی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">هیجان انگیز</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">رازآلود</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">ماجراجویی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">فانتزی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">انیمیشن</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">خانوادگی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">وحشت</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">جنگی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">جنایی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">علمی</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">درام</a>
                    <a href="#" className="hover:bg-white/20 p-2 rounded text-xs transition-colors whitespace-nowrap">تاک شو</a>
                  
                  </div>
                </li>

                
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    ایرانی
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                </li>

              
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    خارجی
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                </li>

                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    مجموعه ها
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                  <div className="absolute top-full right-0 mt-1 w-64 bg-black/90 backdrop-blur-md rounded-lg p-3 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <div className="space-y-1">
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">مخصوص نابینایان</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">مخصوص ناشنوایان</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">۲۵۰ فیلم برتر</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">برگزیدگان جشنواره ها</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">پرفروش های سینمای ایران</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">فیلم و سریال کره ای</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">سریال ترکی</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">فیلم هندی</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">انیمه</a>
                      <a href="#" className="block p-2 rounded text-xs hover:bg-white/20 transition-colors whitespace-nowrap">همه لیست ها</a>
                    </div>
                  </div>
                </li>

              
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    فیلیمو مدرسه
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                </li>

               
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1 rounded cursor-pointer whitespace-nowrap">
                    کودک
                  </span>
                  <span className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-white/20 transition-opacity duration-200 pointer-events-none"></span>
                </li>

              </ul>
            </nav>
          </div>

        
          <div className="flex items-center justify-end gap-2 md:gap-3">
            
         
            <div className="flex items-center bg-white/10 rounded-lg px-2 py-1.5">
              <FaSearch size={14} className="text-white/70" />
              <input 
                type="search" 
                placeholder="جستجو..." 
                className="bg-transparent w-28 md:w-32 lg:w-40 px-2 py-1 focus:outline-none text-white text-xs md:text-sm placeholder-white/50"
              />
            </div>
            
           
            <Link href="/login">
              <button className="bg-white/20 px-3 py-1.5 rounded-lg text-white hover:bg-white/30 transition-colors text-xs whitespace-nowrap md:px-4">
                ورود
              </button>
            </Link>
            
           
            <Link href="/shopping">
              <button className="px-3 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-xs whitespace-nowrap md:px-5">
                خرید
              </button>
            </Link>
          </div>

        </div>

      </div>
    </header>
  )
}