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
    fetch('/data/filiter.json')
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

  const matchLang =
    !lang || item.filmLanguage === lang;

  const matchAge =
    !age || item.age === age;

  const matchCountry =
    !country || item.country === country;

  const matchGenre =
    !genre || item.genre === genre;

  return (
    matchCategory &&
    matchLang &&
    matchAge &&
    matchCountry &&
    matchGenre
  );
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
        <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-6 gap-6 ">

          {filteredData.map((item) => (
        <div key={item.id} className=" rounded-lg shadow p-4 flex flex-col items-center text-center">
          <div className="flex justify-center items-center">

            <Image
             src={item.image}
             alt={item.title}
             width={180}
            height={250}
            className="rounded-lg object-cover"
            />
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