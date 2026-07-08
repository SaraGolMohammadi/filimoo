'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
        
      
        <div className="flex items-center justify-between gap-2">
          
  
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-1">
            
         
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-1"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

           
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/img/fa-filimo-dark-logo-v2.svg"
                alt="لوگو فیلمو" 
                width={70} 
                height={70} 
                className="w-[60px] sm:w-[70px] md:w-[90px]"
              />
            </Link>

      
            <nav className="hidden md:block flex-1">
              <ul className="flex flex-nowrap gap-1 lg:gap-2 xl:gap-4 font-medium text-white text-xs lg:text-sm">
               
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">
                    فیلم
                  </span>
                  <div className="absolute top-full right-0 mt-1 w-56 lg:w-64 bg-black/90 backdrop-blur-md rounded-lg p-2 lg:p-3 grid grid-cols-2 gap-1 lg:gap-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">انیمیشن</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">وحشت</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">هیجان‌انگیز</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">علمی تخیلی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">ماجراجویی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">جنایی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">رازآلود</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">مستند</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">تاریخی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">بیوگرافی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">کمدی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">اکشن</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">جنگی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">عاشقانه</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">خانوادگی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">فانتزی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">وسترن</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">درام</a>
                  </div>
                </li>

               
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">
                    سریال
                  </span>
                  <div className="absolute top-full right-0 mt-1 w-56 lg:w-64 bg-black/90 backdrop-blur-md rounded-lg p-2 lg:p-3 grid grid-cols-2 gap-1 lg:gap-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">کمدی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">ریلیتی شو</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">عاشقانه</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">اکشن</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">مستند</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">تاریخی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">هیجان انگیز</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">رازآلود</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">ماجراجویی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">فانتزی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">انیمیشن</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">خانوادگی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">وحشت</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">جنگی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">جنایی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">علمی</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">درام</a>
                    <a href="#" className="hover:bg-white/20 p-1.5 lg:p-2 rounded text-xs transition-colors">تاک شو</a>
                  </div>
                </li>

                <li className="shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">ایرانی</span>
                </li>
                <li className="shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">خارجی</span>
                </li>

              
                <li className="relative group shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">
                    مجموعه ها
                  </span>
                  <div className="absolute top-full right-0 mt-1 w-56 lg:w-64 bg-black/90 backdrop-blur-md rounded-lg p-2 lg:p-3 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <div className="space-y-0.5 lg:space-y-1">
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">مخصوص نابینایان</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">مخصوص ناشنوایان</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">۲۵۰ فیلم برتر</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">برگزیدگان جشنواره ها</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">پرفروش های سینمای ایران</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">فیلم و سریال کره ای</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">سریال ترکی</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">فیلم هندی</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">انیمه</a>
                      <a href="#" className="block p-1.5 lg:p-2 rounded text-xs hover:bg-white/20 transition-colors">همه لیست ها</a>
                    </div>
                  </div>
                </li>

                <li className="shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">فیلیمو مدرسه</span>
                </li>
                <li className="shrink-0">
                  <span className="inline-block px-2 py-1.5 rounded cursor-pointer whitespace-nowrap hover:bg-white/20 transition-colors">کودک</span>
                </li>
              </ul>
            </nav>
          </div>

        
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            
         
            <div className="hidden sm:flex items-center bg-white/10 rounded-lg px-2 py-1.5">
              <FaSearch size={14} className="text-white/70" />
              <input 
                type="search" 
                placeholder="جستجو..." 
                className="bg-transparent w-20 sm:w-24 md:w-32 lg:w-40 px-1.5 sm:px-2 py-1 focus:outline-none text-white text-xs md:text-sm placeholder-white/50"
              />
            </div>
            
          
            <Link href="/login">
              <button className="bg-white/20 px-2.5 sm:px-3 md:px-4 py-1.5 rounded-lg text-white hover:bg-white/30 transition-colors text-xs whitespace-nowrap">
                ورود
              </button>
            </Link>
            
            <Link href="/shopping">
              <button className="px-2.5 sm:px-3 md:px-5 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors text-xs whitespace-nowrap">
                خرید
              </button>
            </Link>
          </div>

        </div>

      
        {menuOpen && (
          <div className="md:hidden mt-3 bg-black/95 backdrop-blur-md rounded-lg p-4 border border-white/10">
            <div className="flex sm:hidden mb-3">
              <div className="flex items-center bg-white/10 rounded-lg px-2 py-1.5 w-full">
                <FaSearch size={14} className="text-white/70" />
                <input 
                  type="search" 
                  placeholder="جستجو..." 
                  className="bg-transparent w-full px-2 py-1 focus:outline-none text-white text-sm placeholder-white/50"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-white text-sm">
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">فیلم</a>
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">سریال</a>
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">ایرانی</a>
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">خارجی</a>
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">مجموعه ها</a>
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">فیلیمو مدرسه</a>
              <a href="#" className="p-2 rounded hover:bg-white/20 transition-colors">کودک</a>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
