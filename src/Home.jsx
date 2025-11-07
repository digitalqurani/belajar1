import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <section className="bg-teal-50 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-teal-800">
          Program Unggulan MDIQ
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/image/slide1.jpg"
              alt="Tahsin & Tahfidz"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/image/slide2.jpg"
              alt="Bahasa Arab & Inggris"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/image/slide3.jpg"
              alt="IT & Literasi Digital"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
