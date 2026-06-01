'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Header from '../components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('خطا در دریافت دیتا:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen ">
      <Header />
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative w-full h-full ">
              <Image
                src={product.image}
                alt={product.title}
                fill
                quality={100}        
                priority={product.id === 1}
                sizes="100vw"
                className="object-cover " 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
  );
}