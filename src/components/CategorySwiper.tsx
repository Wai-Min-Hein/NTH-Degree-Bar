"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategorySwiper = ({ categories }) => {
  interface categoryInterface {
    id: number;
    name: string;
    image: string;
  }
  return (
    <div className="flex justify-between items-center mt-4">
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {categories?.map((category: categoryInterface) => (
        <SwiperSlide key={category?.id}>
          <Link href={`/menu/${category?.name}`}>
          
          <div className="basis-1/3 h-[15rem] rounded-md overflow-hidden cursor-pointer">
            <div className="w-full h-[10rem] relative">
              <Image
                src={category?.image}
                width={120}
                height={60}
                alt={`${category?.name} Image`}
              />
            </div>

            <h4>{category?.name}</h4>
          </div>
          </Link>

        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default CategorySwiper;
