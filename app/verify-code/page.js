'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [otp, setOtp] = useState(new Array(6).fill(""))
  const [timer, setTimer] = useState(120) 
  const [error, setError] = useState("")
  const inputRefs = useRef([])
  const router = useRouter()

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false

    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)

  
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus()
    }

    if (newOtp.join("").length === 6) {
      handleVerify(newOtp.join(""))
    }
  }


  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  
  const handleVerify = (code) => {
    const correctPassword = "123456" 

    if (code === correctPassword) {
      setError("")
      localStorage.setItem("userToken", "fake-filimo-token-12345");
      localStorage.setItem("isLoggedIn", "true");
      router.push("/shopping")
    } else {
      setError("رمز عبور یا کد وارد شده اشتباه است")
    }
  }

  return (
    <div className='min-h-screen bg-black text-white flex flex-col justify-center items-center gap-4 px-4 py-10'>

      <div className='flex flex-col justify-center items-center gap-4'>
        <Image
          src="/img/fa-filimo-dark-logo-v2.svg"
          alt="Filimo Logo"
          width={140}
          height={140}
        />
        
        <p className='mt-2 text-center text-gray-300 text-sm'>
          کد فرستاده شد برای <span className="text-orange-400 font-bold">******09</span> را بنویسید
        </p>
      </div>

      <div className='flex justify-start items-start w-full max-w-md'>
        <Link href="/" className="text-gray-400 text-sm hover:text-white transition-colors">
          بازگشت ←
        </Link>
      </div> 

      <div className='border border-gray-800 bg-zinc-900 p-6 sm:p-10 rounded-lg w-full max-w-md shadow-xl'>
        
      
        <div className='flex flex-row-reverse justify-center items-center gap-2' dir="ltr">
          {otp.map((data, index) => (
            <input
              key={index}
              type='text'
              maxLength={1}
              value={data}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className='border border-gray-700 w-11 h-11 sm:w-12 sm:h-12 rounded-lg text-center bg-zinc-800 text-white text-xl font-bold outline-none focus:border-orange-500 transition-colors'
            />
          ))}
        </div>

       
        {error && <p className="text-red-500 text-sm text-center mt-3">{error}</p>}
             
     
        <div className='text-center mt-5 text-gray-400 text-sm'>
          {timer > 0 ? (
            <span>{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</span>
          ) : (
            <button 
              type="button"
              onClick={() => setTimer(120)} 
              className="text-orange-500 hover:underline text-xs"
            >
              ارسال مجدد کد تایید
            </button>
          )}
        </div>

        <div className='flex flex-col gap-3 mt-8'>
          <button type="button" className='p-3.5 rounded-lg bg-zinc-800 w-full text-gray-300 text-xs text-right hover:bg-zinc-700 transition-colors border border-gray-700'>
            دریافت کد ورود از طریق پیامک
          </button>
          <button type="button" className='p-3.5 rounded-lg bg-zinc-800 w-full text-gray-300 text-xs text-right hover:bg-zinc-700 transition-colors border border-gray-700'>
            ورود با رمز عبور
          </button>
        </div>
      </div>

    </div>
  )
}