"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (mobile === "") {
      setError("لطفاً شماره موبایل را وارد کنید");
    } else if (mobile.length !== 11) {
      setError("شماره موبایل باید 11 رقم باشد");
    } else if (!mobile.startsWith("09")) {
      setError("شماره موبایل معتبر نیست");
    } else {
      setError("");
      router.push("/verify-code"); 
      
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/img/fa-filimo-dark-logo-v2.svg"
          alt="Filimo Logo"
          width={140}
          height={140}
        />

        <p className="font-bold mt-6 text-lg">
          ورود و ثبت نام در فیلیمو
        </p>
      </div>

      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-block text-gray-400 text-sm mb-4"
        >
          ← بازگشت
        </Link>

        <div className="border border-gray-700 rounded-lg p-8">
          <h1 className="text-center mb-6 text-sm text-gray-300">
            برای ورود یا ثبت‌نام، اطلاعات کاربری خود را وارد کنید:
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="موبایل خود را وارد کنید"
              className="w-full h-12 rounded-md bg-gray-900 border border-gray-700 px-4 text-right outline-none focus:border-green-500"
            />

            {error && <p className="text-red-500 text-sm text-right mt-1">{error}</p>}

            <button 
              onClick={handleLogin} 
              type="button" 
              className="w-full h-12 bg-green-500 text-black rounded-md font-bold hover:bg-green-600 transition"
            >
              ادامه
            </button>
            
            <span className="text-center text-gray-400 text-sm">یا</span>

            <button className="w-full h-12 border border-gray-600 rounded-md hover:bg-gray-800 transition">
              ادامه دادن با Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}