'use client';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';



export default function MovieSlider({ products, height = "70vh" }) {

  if (!products || products.length === 0) {

    return <div className="text-center py-10">محتوایی برای نمایش وجود ندارد.</div>;

  }

  return (
    <>
      <div className="relative w-full" style={{ height }}>
        <Swiper
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={6}
          className="w-full h-full custom-movie-slider"
        >

          {products.map((product, index) => (
            <SwiperSlide key={product.id || index}>
              <div className="relative w-full h-full flex justify-center group cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.title || "Product Image"}
                  fill
                  quality={100}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />

                {product.title && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t left-[-10px] right-[-10px]  from-black/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white  font-bold text-1xl text-right">
                      {product.title}
                    </p>
                    <h1 className='text-white font-normal text-[10px] flex flex-col'>{product.year}
                    <span className="text-amber-400">امتیاز: {product.rating}</span>
                    </h1>
                  </div>
                )}
              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      <style jsx global>{`
        .custom-movie-slider .swiper-button-next,
        .custom-movie-slider .swiper-button-prev {
          background: rgba(0, 0, 0, 0.6);
         backdrop-filter: blur(12px);
         border-color: rgba(255, 255, 255, 0.4);
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          transition: all 0.2s ease;
          padding: 8px;
        }

        .custom-movie-slider .swiper-button-next::after,
        .custom-movie-slider .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;

        }

        .custom-movie-slider .swiper-button-next:hover,
        .custom-movie-slider .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.05);
        }

        .custom-movie-slider .swiper-button-prev {
          left: 10px;
        }

        .custom-movie-slider .swiper-button-next {
          right: 10px;
        }

      `}</style>

    </>

  );

} 

