'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='mt-15 flex flex-col justify-center items-center gap-4 '>


    <div className=' flex flex-col justify-center items-center gap-8 ' >
      <Image
        src="/img/fa-filimo-dark-logo-v2.svg"
        alt="Filimo Logo"
        width={140}
        height={140}
      />
      
      <p className='mt-5'>کد فرستاده شد برای092****** را بنویسید</p>
       

    </div>

    <div className='flex  justify-start items-start mb-2 ml-90' >
          <Link href="/" className="text-gray-400 text-sm">
            بازگشت ←
          </Link>
        </div>
   

      <div className='border p-15 rounded-lg'>
       

        <div className='flex flex-row justify-center items-center gap-2'>
          <input className='border border-gray-400 w-12 h-12 rounded-lg text-center' type='text' maxLength={1} />
          <input className='border border-gray-400 w-12 h-12 rounded-lg text-center' type='text' maxLength={1} />
          <input className='border border-gray-400 w-12 h-12 rounded-lg text-center' type='text' maxLength={1} />
          <input className='border border-gray-400 w-12 h-12 rounded-lg text-center' type='text' maxLength={1} />
          <input className='border border-gray-400 w-12 h-12 rounded-lg text-center' type='text' maxLength={1} />
          <input className='border border-gray-400 w-12 h-12 rounded-lg text-center' type='text' maxLength={1} />
        </div>
           
           <div>
              <p className='flex flex-row justify-center items-center mt-5 '>00:00</p>
           </div>

       <div className='flex flex-col justify-between items-start gap-5 rounded-lg mt-10'>
         
          <button className='p-2 rounded-lg bg-gray-700 w-full text-white text-[10px] text-right hover:bg-gray-400 transition-colors'>
           دریافت کد ورود از طریق پیامک
          </button>
          <button className='p-2 rounded-lg bg-gray-700 w-full text-white text-[10px] text-right hover:bg-gray-400 transition-colors'>
          ورود با رمز
          </button>
      </div>

      </div>

    </div>
  )
}
