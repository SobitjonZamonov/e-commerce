"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
    return (
        <div className="w-full h-[450px] flex justify-center items-center gap-[123px] mt-[18px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-[1311px] h-[450px]"
            >
                <SwiperSlide>
                    <div className="w-[1311px] h-[450px] flex justify-center items-center gap-[123px] bg-[linear-gradient(135deg,rgba(245,245,245,0.5)_0%,rgba(245,245,245,0.5)_100%)]">
                        <div className="w-[650px]">
                            <div className="flex flex-col gap-[5px] mb-[44px]">
                                <h2 className="font-medium text-[14px] leading-[114%] tracking-[0.1em] uppercase text-[#3d3d3d]">
                                    Welcome to GreenShop
                                </h2>
                                <h1 className="font-black text-[70px] text-[#3d3d3d] uppercase">
                                    Let’s Make a Better <span className="text-[#46a358]">Planet</span>
                                </h1>
                                <p className="text-[14px] text-[#727272] font-normal">
                                    We are an online plant shop offering a wide range of cheap and trendy plants.
                                    Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>
                            </div>
                            <button className="w-[140px] h-[40px] bg-[#46a358] text-[16px] text-[#fff] uppercase font-bold rounded-[6px] cursor-pointer">
                                SHOW NOW
                            </button>
                        </div>

                        <div>
                            <Image src="/flover.svg" alt="Logo" width={518} height={518} />
                            <div className="absolute top-[320px] right-[350px]">
                                <Image src="/flovercha.svg" alt="Logo" width={135} height={135} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-[1311px] h-[450px] flex justify-center items-center gap-[123px] bg-[linear-gradient(135deg,rgba(245,245,245,0.5)_0%,rgba(245,245,245,0.5)_100%)]">
                        <div className="w-[650px]">
                            <div className="flex flex-col gap-[5px] mb-[44px]">
                                <h2 className="font-medium text-[14px] leading-[114%] tracking-[0.1em] uppercase text-[#3d3d3d]">
                                    Welcome to GreenShop
                                </h2>
                                <h1 className="font-black text-[70px] text-[#3d3d3d] uppercase">
                                    Let’s Make a Better <span className="text-[#46a358]">Planet</span>
                                </h1>
                                <p className="text-[14px] text-[#727272] font-normal">
                                    We are an online plant shop offering a wide range of cheap and trendy plants.
                                    Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>
                            </div>
                            <button className="w-[140px] h-[40px] bg-[#46a358] text-[16px] text-[#fff] uppercase font-bold rounded-[6px] cursor-pointer">
                                SHOW NOW
                            </button>
                        </div>

                        <div>
                            <Image src="/flover.svg" alt="Logo" width={518} height={518} />
                            <div className="absolute top-[320px] right-[350px]">
                                <Image src="/flovercha.svg" alt="Logo" width={135} height={135} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="w-[1311px] h-[450px] flex justify-center items-center gap-[123px] bg-[linear-gradient(135deg,rgba(245,245,245,0.5)_0%,rgba(245,245,245,0.5)_100%)]">
                        <div className="w-[650px]">
                            <div className="flex flex-col gap-[5px] mb-[44px]">
                                <h2 className="font-medium text-[14px] leading-[114%] tracking-[0.1em] uppercase text-[#3d3d3d]">
                                    Welcome to GreenShop
                                </h2>
                                <h1 className="font-black text-[70px] text-[#3d3d3d] uppercase">
                                    Let’s Make a Better <span className="text-[#46a358]">Planet</span>
                                </h1>
                                <p className="text-[14px] text-[#727272] font-normal">
                                    We are an online plant shop offering a wide range of cheap and trendy plants.
                                    Use our plants to create an unique Urban Jungle. Order your favorite plants!
                                </p>
                            </div>
                            <button className="w-[140px] h-[40px] bg-[#46a358] text-[16px] text-[#fff] uppercase font-bold rounded-[6px] cursor-pointer">
                                SHOW NOW
                            </button>
                        </div>

                        <div>
                            <Image src="/flover.svg" alt="Logo" width={518} height={518} />
                            <div className="absolute top-[320px] right-[350px]">
                                <Image src="/flovercha.svg" alt="Logo" width={135} height={135} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
