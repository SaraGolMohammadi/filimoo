'use client';
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'


export default function Page() {
  const [open, setOpen] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <div className="px-4">
      <div className='mt-2 flex justify-center md:justify-start'>    
        <Image
          src="/img/fa-filimo-dark-logo-v2.svg"
          alt="Filimo Logo"
          width={140}
          height={140}
        />
      </div>

      <div className='flex flex-col justify-center items-center mt-8'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-5'>
          <h1 className='text-white font-bold text-center'>خرید اشتراک فیلیمو</h1>
          <p className='flex flex-row-reverse justify-center items-center p-2 gap-2 rounded-4xl bg-zinc-800 text-[12px]'>بدون تبلیغ <span className='bg-zinc-500 p-1 px-2 rounded-4xl text-black'>با تبلیغ</span></p>
        </div>

        <div className='w-full max-w-xl text-right text-zinc-400 flex flex-col sm:flex-row-reverse justify-center items-center gap-2'>
          اشتراکی که تهیه می‌کنید برای تماشای بدنام، هزار و یک شب، بفرمایید جام و بیش از 120,000 فیلم و سریال دیگر است 
          <Image
            className='rounded-xl'
            src="/img/14826505-7ce4-4bc0-8da2-3c5bc00461e9.webp"
            alt="Filimo Logo"
            width={60}
            height={40}
          />   
        </div>

        <div className='flex flex-col justify-center items-center mt-8 w-full max-w-xl'>
          <div className='flex flex-row justify-between items-center p-5 px-4 sm:px-9 rounded-lg mb-5 w-full bg-zinc-800 hover:bg-zinc-700'>
            <p>یک ماهه</p>
            <div className='flex flex-row-reverse justify-center items-center gap-2 sm:gap-5'>
              <h1 className='border p-1 rounded-lg text-emerald-400 text-sm'>218,000 تومان</h1>
              <span className='line-through text-zinc-400 text-xs'>278,000 تومان</span>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center p-5 px-4 sm:px-9 rounded-lg mb-5 w-full bg-zinc-800 hover:bg-zinc-700'>
            <p>سه ماهه</p>
            <div className='flex flex-row-reverse justify-center items-center gap-2 sm:gap-5'>
              <h1 className='border p-1 rounded-lg text-emerald-400 text-sm'>588,000 تومان</h1>
              <span className='line-through text-zinc-400 text-xs'>878,000 تومان</span>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center p-5 px-4 sm:px-9 rounded-lg mb-5 w-full bg-zinc-800 hover:bg-zinc-700'>
            <p>شش ماهه</p>
            <div className='flex flex-row-reverse justify-center items-center gap-2 sm:gap-5'>
              <h1 className='border p-1 rounded-lg text-emerald-400 text-sm'>1,000,000 تومان</h1>
              <span className='line-through text-zinc-400 text-xs'>1,600,000 تومان</span>
            </div>
          </div>

          <div className='flex flex-row justify-between items-center p-5 px-4 sm:px-9 rounded-lg mb-5 w-full bg-zinc-800 hover:bg-zinc-700'>
            <p>یک سال</p>
            <div className='flex flex-row-reverse justify-center items-center gap-2 sm:gap-5'>
              <h1 className='border p-1 rounded-lg text-emerald-400 text-sm'>1,780,000 تومان</h1>
              <span className='line-through text-zinc-400 text-xs'>1,980,000 تومان</span>
            </div>
          </div>

          <div className='text-right w-full mt-5 text-zinc-400 text-sm'>
            <p>%10 مالیات بر ارزش افزوده به قیمت همه اشتراک‌ها اضافه می‌شود.</p>
            <p>با ادامه فرایند خرید، شما با قوانین فیلیمو موافقت می‌کنید.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mb-8 mt-5'>
        <button onClick={() => setOpen(!open)} className='border p-5 font-serif w-full flex flex-row justify-between rounded-lg max-w-xl text-right hover:bg-zinc-700'>
          کد تخفیف خرید اشتراک خود را وارد کنید
            <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className='w-full max-w-xl mt-2 flex flex-col sm:flex-row gap-2'>
            <input 
              type="text" 
              placeholder="کد تخفیف خود را وارد کنید..."
              className='border p-2 w-full text-right rounded-lg'
            />
            <button className='bg-green-600 p-2 rounded-lg text-[12px] sm:w-auto'>تایید کد</button>
          </div>
        )}
      </div>

      <div className='text-right max-w-xl mx-auto mt-5 text-zinc-400 text-sm'>
        <p>می‌توانید فیلم و سریال‌های فیلیمو را داخل برنامه دانلود کنید و بعدا بدون نیاز به اینترنت تماشا کنید.</p>
      </div>

      <div className='flex flex-col justify-center items-center mb-8 mt-5'>
        <button onClick={() => setOpenSupport(!openSupport)} className='border p-3 flex flex-row justify-center items-center gap-2 hover:bg-zinc-700 px-8 rounded-lg text-zinc-400'>
          پشتیبانی
           <ChevronDown className={`mt-2 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {openSupport && (
          <div className='w-full max-w-xl mt-3 flex flex-col gap-3 text-right text-zinc-400 text-sm'>
            <p>ایمیل پشتیبانی: <span className='font-bold'>payment@filimo.com</span></p>
            <p>تلفن: <span className='font-bold'>(021)74524</span></p>
            <p>تلگرام: <span className='font-bold'>@filimo_support_bot</span></p>
            <p className='text-blue-500 cursor-pointer'>پرسش‌های متداول</p>
          </div>
        )}
      </div>
    </div>
  )
}
