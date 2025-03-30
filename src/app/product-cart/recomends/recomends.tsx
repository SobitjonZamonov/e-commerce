"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "@/app/home/assets/product1";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Recomends = () => {
    const products = [
        { image: "/product1.png", name: "Beach Spider Lily", price: 129.00 },
        { image: "/product2.png", name: "Blushing Bromeliad", price: 139.00 },
        { image: "/product3.png", name: "Aluminum Plant", price: 179.00 },
        { image: "/product4.png", name: "Bird's Nest Fern", price: 99.00 },
        { image: "/product5.png", name: "Chinese Evergreen", price: 39.00 },
    ];

    return (
        <div className="flex justify-center mt-[127px] mb-[128px]">
            <div className="w-[1200px]">
                <div className="border-b border-[#46a35940] mb-[44px]">
                    <h1 className="text-[17px] text-[#46a358] font-bold">You may be interested in</h1>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center">
                                <ProductCard {...product} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Recomends;
