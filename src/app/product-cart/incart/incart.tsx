"use client"
import React, { useState } from "react";
import Image from "next/image";
import DeleteIcon from "../components/deleteicon";
import Link from "next/link";

const InCart = () => {
    const [count, setCount] = useState(1)
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[1200px] h-[448px] flex justify-center items-center gap-[86px]">
                <div className="w-[782px] h-[280px] flex flex-col gap-[15px]" >
                    <div className="flex border-b border-[#46a3593d] justify-between gap-[300px]">
                        <h1 className="font-medium text-[16px] text-[#3d3d3d]">Products</h1>
                        <div className="flex gap-[100px] mr-[80px]">
                            <label className="font-medium text-[16px] text-[#3d3d3d]">Price</label>
                            <label className="font-medium text-[16px] text-[#3d3d3d]">Quantity</label>
                            <label className="font-medium text-[16px] text-[#3d3d3d]">Total</label>
                        </div>
                    </div>
                    <div className="w-[782px] h-[70px] flex justify-center items-center gap-[80px]">
                        <div className="flex justify-center items-center gap-[14px]">
                            <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                            <div className="flex flex-col">
                                <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                            </div>
                        </div>
                        <label className="font-medium text-[16px] text-[#727272]">$119.00</label>
                        <div className="flex gap-[16px] justify-center items-center">
                            <button className="w-[21px] h-[25px] bg-[#46a358] rounded-[29px] text-[#fff] font-normal text-[28px] flex items-center justify-center" onClick={() => setCount(count - 1)}>-</button>
                            <h1 className="font-normal text-[20px] text-[#3d3d3d]">{count}</h1>
                            <button className="w-[21px] h-[25px] bg-[#46a358] rounded-[29px] text-[#fff] flex justify-center items-center font-normal text-[28px]" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <div className="flex gap-[50px]">
                            <label className="font-bold text-[16px] text-[#46a358]">$238.00</label>
                            <DeleteIcon />
                        </div>
                    </div>
                    <div className="w-[782px] h-[70px] flex justify-center items-center gap-[80px]">
                        <div className="flex justify-center items-center gap-[14px]">
                            <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                            <div className="flex flex-col">
                                <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                            </div>
                        </div>
                        <label className="font-medium text-[16px] text-[#727272]">$119.00</label>
                        <div className="flex gap-[16px] justify-center items-center">
                            <button className="w-[21px] h-[25px] bg-[#46a358] rounded-[29px] text-[#fff] font-normal text-[28px] flex items-center justify-center" onClick={() => setCount(count - 1)}>-</button>
                            <h1 className="font-normal text-[20px] text-[#3d3d3d]">{count}</h1>
                            <button className="w-[21px] h-[25px] bg-[#46a358] rounded-[29px] text-[#fff] flex justify-center items-center font-normal text-[28px]" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <div className="flex gap-[50px]">
                            <label className="font-bold text-[16px] text-[#46a358]">$238.00</label>
                            <DeleteIcon />
                        </div>
                    </div>
                    <div className="w-[782px] h-[70px] flex justify-center items-center gap-[80px]">
                        <div className="flex justify-center items-center gap-[14px]">
                            <Image src="/pruductdetail1.svg" alt="icon3" width={70} height={70} className="hover:border border-[#46a358]" />
                            <div className="flex flex-col">
                                <h1 className="font-medium text-[16px] text-[#3d3d3d]">Barberton Daisy</h1>
                                <label className="font-normal text-[14px] text-[#a5a5a5]">SKU: 1995751877966</label>
                            </div>
                        </div>
                        <label className="font-medium text-[16px] text-[#727272]">$119.00</label>
                        <div className="flex gap-[16px] justify-center items-center">
                            <button className="w-[21px] h-[25px] bg-[#46a358] rounded-[29px] text-[#fff] font-normal text-[28px] flex items-center justify-center" onClick={() => setCount(count - 1)}>-</button>
                            <h1 className="font-normal text-[20px] text-[#3d3d3d]">{count}</h1>
                            <button className="w-[21px] h-[25px] bg-[#46a358] rounded-[29px] text-[#fff] flex justify-center items-center font-normal text-[28px]" onClick={() => setCount(count + 1)}>+</button>
                        </div>
                        <div className="flex gap-[50px]">
                            <label className="font-bold text-[16px] text-[#46a358]">$238.00</label>
                            <DeleteIcon />
                        </div>
                    </div>
                </div>
                <div className="w-[332px] h-[280px]" >
                    <h2 className="font-bold text-[18px] text-[#3d3d3d] mb-[27px]">Cart Totals</h2>

                    <div className="flex flex-col mb-[30px]">
                        <label className="font-normal text-[14px] text-[#d3d3d3d] mb-[8px]">Coupon Apply</label>
                        <div className="flex">
                            <input type="text" placeholder="Enter coupon code here..." className="w-[332px] border border-[#46a458] h-[39px] p-[10]" />
                            <button className="border w-[102px] h-[40px] font-bold text-[15px] text-[#fff] bg-[#46a358] cursor-pointer">Apply</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px] mb-[26px]">
                        <div className="flex justify-between items-center">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Subtotal</label>
                            <label className="font-medium text-[18px] text-[#3d3d3d] text-right">$2,683.00</label>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Coupon Discount </label>
                            <label className="font-normal text-[15px] text-[#3d3d3d]">(-) 00.00</label>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="font-normal text-[15px] text-[#3d3d3d]">Shiping</label>
                            <div className="flex flex-col text-right">
                                <label>$16.00</label>
                                <label className="font-normal text-[12px] text-[#46a358]">View shipping charge</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-[30px]">
                        <label className="font-bold text-[16px]  text-[#3d3d3d]">Total</label>
                        <label className="font-bold text-[18px] text-[#46a358]">$2,699.00</label>
                    </div>
                    <div className="flex flex-col">
                        <Link href="/product-checkout"><button className="w-[332px] h-[40px] bg-[#46a358] font-bold text-[15px] text-[#fff] rounded-[3px] cursor-pointer" >Proceed To Checkout</button></Link>
                        <Link href="/home"><button className="font-normal text-[15px] text-[#46a458] p-[5px] cursor-pointer">Continue Shopping</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InCart;