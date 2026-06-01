'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Category() {
  const { category } = useParams();
  const searchParams = useSearchParams();

  const lang = searchParams.get('lang');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/db.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);


const filteredData = products.filter((item) => {
  const matchCategory =
    !category || item.category === category;

  return matchCategory ;
});
  if (loading) {
    return <div className="p-10 text-center">در حال بارگذاری...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        {category === 'movie' ? 'فیلم‌ها' : 'سریال‌ها'}
      </h1>

      {filteredData.length === 0 ? (
        <p className="text-gray-500">چیزی پیدا نشد 😐</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden shadow"
            >

              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="font-bold text-lg">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 mt-1">
                  زبان: {item.filmLanguage}
                </p>
              </div>

            </div>
          ))}

        </div>
      )}

      <Link href="/" className="mt-8 inline-block text-blue-500">
        بازگشت
      </Link>

    </div>
  );
}