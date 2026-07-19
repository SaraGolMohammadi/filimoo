'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Category() {
  const { category } = useParams(); 
  const searchParams = useSearchParams();
  
  const lang = searchParams.get('lang');
  const age = searchParams.get('age');
  const country = searchParams.get('country');
  const genre = searchParams.get('genre');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch("/api/filter-movie", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store' 
    })
      .then((res) => {
        if (!res.ok) throw new Error(`خطای سرور: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("دیتای دریافتی از بک‌بند:", data);
        
        if (Array.isArray(data)) {
          setSections(data);
        } else if (data && typeof data === 'object') {
          setSections(data.sections || data.data || []);
        }
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در فچ کردن:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">
        {category === 'movie' ? 'فیلم‌ها' : 'سریال‌ها'}
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500">چیزی پیدا نشد 😐</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {products.map((item) => (
            <div key={item.id} className="rounded-lg shadow p-4 flex flex-col items-center text-center bg-gray-900 text-white">
              <div className="flex justify-center items-center mb-2">
                <Image
                  src={item.image}
                  alt={item.title || 'تصویر فیلم'}
                  width={180}
                  height={250}
                  className="rounded-lg object-cover"
                />
              </div>
              <h2 className="text-sm font-medium mt-2 line-clamp-1">{item.title}</h2>
            </div>
          ))}
        </div>
      )}

      <Link href="/" className="mt-8 inline-block text-blue-500">
        بازگشت به خانه
      </Link>
    </div>
  );
}