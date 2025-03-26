"use client"
import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import { useState } from "react";

const ProductView = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex justify-center items-center mt-[43px]">
            <div className="flex gap-[60px]">
                <div className="w-[573px] h-[448px] flex gap-3 justify-center items-center">
                    <div>
                        <Image src="/pruductdetail1.svg" alt="icon3" width={100} height={100} className="hover:border border-[#46a358]" />
                        <Image src="/pruductdetail1.svg" alt="icon3" width={100} height={100} className="hover:border border-[#46a358]" />
                        <Image src="/pruductdetail1.svg" alt="icon3" width={100} height={100} className="hover:border border-[#46a358]" />
                        <Image src="/pruductdetail1.svg" alt="icon3" width={100} height={100} className="hover:border border-[#46a358]" />
                    </div>
                    <Image src="/pruductdetail1.svg" alt="icon3" width={404} height={404} />
                </div>
                <div className="w-[574px] h-[446px]">
                    <h1 className="font-bold text-[28px] text-[#3d3d3d]">Barberton Daisy</h1>
                    <div className="flex gap-[210px] justify-center items-center mt-[20px] border-b border-[#46a35946]">
                        <label className="font-bold text-[22px] text-[#46a358]">$119.00</label>
                        <div className="flex gap-2">
                            <Rate />
                            <label className="font-normal text-[15px] text-[#3d3d3d]">19 Customer Review</label>
                        </div>
                    </div>
                    <div className="mt-[15px]">
                        <h2 className="font-medium text-[15px] text-[#3d3d3d]">Short Description:</h2>
                        <p className="font-normal text-[14px] text-[#727272] w-[573px]">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    </div>
                    <h2 className="font-medium text-[15px] text-[#3d3d3d] mt-[24px]">Size:</h2>
                    <div className="flex mt-[10px] gap-[10px] mb-[23px]">
                        <button className="w-[28px] h-[28px] rounded-[50%] border border-[#eaeaea] font-bold text-[18px] text-[#727272] hover:border-[#46a358] text-[#36a358]">S</button>
                        <button className="w-[28px] h-[28px] rounded-[50%] border border-[#eaeaea] font-bold text-[18px] text-[#727272] hover:border-[#46a358] text-[#36a358]">M</button>
                        <button className="w-[28px] h-[28px] rounded-[50%] border border-[#eaeaea] font-bold text-[18px] text-[#727272] hover:border-[#46a358] text-[#36a358]">L</button>
                        <button className="w-[28px] h-[28px] rounded-[50%] border border-[#eaeaea] font-bold text-[18px] text-[#727272] hover:border-[#46a358] text-[#36a358]">XL</button>
                    </div>
                    <div className="flex items-center gap-[26px]">
                        <div className="flex gap-[23px] justify-center items-center">
                            <button className="w-[33px] h-[38px] bg-[#46a358] rounded-[29px] text-[#fff] font-normal text-[28px] flex items-center justify-center" onClick={() => setCount(count - 1)}>-</button>
                            <h1 className="font-normal text-[20px] text-[#3d3d3d]">{count}</h1>
                            <button className="w-[33px] h-[38px] bg-[#46a358] rounded-[29px] text-[#fff] font-normal text-[28px]" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <div className="flex gap-[10px]">
                            <button className="w-[130px] h-[40px] bg-[#46a358] text-[#fff] text-[14px] font-bold uppercase rounded-[6px]">Buy NOW</button>
                            <button className="border border-[#46a358] rounded-[6px] text-[#46a358] text-[14px] font-bold w-[130px] h-[40]">Add to cart</button>
                            <button className="w-[40px] h-[40px] border border-[#46a358] rounded-[6px] flex justify-center items-center"><Image src="/heart.svg" alt="icon3" width={20} height={20} /></button>
                        </div>
                    </div>
                    <div className="flex flex-col mt-[26px] gap-2">
                        <label className="font-normal text-[15px] text-[#727272]"><span className="font-normal text-[15px] text-[#a5a5a5]">SKU:</span>1995751877966</label>
                        <label className="font-normal text-[15px] text-[#727272]"><span className="font-normal text-[15px] text-[#a5a5a5]">Categories:</span>Potter Plants</label>
                        <label className="font-normal text-[15px] text-[#727272]"><span className="font-normal text-[15px] text-[#a5a5a5]">Tags:</span>Home, Garden, Plants</label>
                        <div className="flex gap-[20px]">
                            <label className="text-[15px] font-medium text-[#3d3d3d]">Share this products:</label>
                            <Image src="/heart.svg" alt="icon3" width={20} height={20} />
                            <Image src="/heart.svg" alt="icon3" width={20} height={20} />
                            <Image src="/heart.svg" alt="icon3" width={20} height={20} />
                            <Image src="/heart.svg" alt="icon3" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;