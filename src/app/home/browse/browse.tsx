import React from "react";
import Image from "next/image";

const Browse = () => {
    return (
        <div className="w-full flex justify-center gap-[28px] mt-[146px]">
            <div className="w-[586px] h-[250px] flex justify-end items-center bg-[#fbfbfb]">
                <div className="relative">
                    <Image src="/browseImg1.png" alt="flover1" width={292} height={292} />
                </div>
                <div className="w-[300px] flex flex-col justify-end">
                    <h1 className="font-black text-[18px] text-[#3d3d3d] w-[160px] ml-[120px]">Summer cactus & succulents</h1>
                    <p className="text-[14px] font-normal text-right text-[#727272] mt-[9px] mr-[30px]">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button className="w-[140px] h-[40px] bg-[#46a358] text-[14px] font-medium text-[#fff] rounded-[6px] ml-[130px] mt-[25px] cursor-pointer">Find More</button>
                </div>
            </div>

            <div className="w-[586px] h-[250px] flex justify-end items-center bg-[#fbfbfb]">
                <div className="reletive">
                    <Image src="/browseImg2.png" alt="flover1" width={292} height={292} />
                </div>
                <div className="w-[300px] flex flex-col justify-end">
                    <h1 className="font-black text-[18px] text-[#3d3d3d] w-[160px] ml-[120px]">Summer cactus & succulents</h1>
                    <p className="text-[14px] font-normal text-right text-[#727272] mt-[9px] mr-[30px]">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                    <button className="w-[140px] h-[40px] bg-[#46a358] text-[14px] font-medium text-[#fff] rounded-[6px] ml-[130px] mt-[25px] cursor-pointer">Find More</button>
                </div>
            </div>
        </div>
    )
}

export default Browse;