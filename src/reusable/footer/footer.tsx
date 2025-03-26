import React from "react";
import Image from "next/image";


const Footer = () => {
    return (
        <div className="flex justify-center w-full mb-[100px]">
            <div className="flex justify-between items-center gap-[168px] w-[1200px] h-[236px] bg-[#fbfbfb] p-[20px]">
                <div>
                    <h1 className="text-[18px] text-[#3d3d3d] font-bold mb-[20px]">My Account</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">My Account</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Our stores</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Contact us</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Career</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Specials</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[18px] text-[#3d3d3d] font-bold mb-[20px]">Help & Guide</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Help Center</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">How to Buy</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Shipping & Delivery</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Product Policy</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">How to Return</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[18px] text-[#3d3d3d] font-bold mb-[20px]">Categories</h1>
                    <ul className="flex flex-col gap-2">
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">House Plants</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Potter Plants</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Seeds</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Small Plants</a></li>
                        <li><a className="text-[14px] text-[#3d3d3d] font-normal" href="#">Accessories</a></li>
                    </ul>
                </div>

                <div>
                    <h1 className="text-[18px] text-[#3d3d3d] font-bold mb-[20px]">Social Media</h1>
                    <ul className="flex gap-2.5 mb-[33px]">
                        <button className="w-[30px] h-[30px] cursor-pointer border border-[rgba(70,163,88,0.2)] rounded-[6px] flex items-center justify-center">
                            <Image src="/footericon1.svg" alt="icon3" width={8} height={16} />
                        </button>
                        <button className="w-[30px] h-[30px] cursor-pointer border border-[rgba(70,163,88,0.2)] rounded-[6px] flex items-center justify-center">
                            <Image src="/footericon2.svg" alt="icon3" width={16} height={16} />
                        </button>
                        <button className="w-[30px] h-[30px] cursor-pointer border border-[rgba(70,163,88,0.2)] rounded-[6px] flex items-center justify-center">
                            <Image src="/footericon3.svg" alt="icon3" width={16} height={13} />
                        </button>
                        <button className="w-[30px] h-[30px] cursor-pointer border border-[rgba(70,163,88,0.2)] rounded-[6px] flex items-center justify-center">
                            <Image src="/footericon4.svg" alt="icon3" width={16} height={13} />
                        </button>
                        <button className="w-[30px] h-[30px] cursor-pointer border border-[rgba(70,163,88,0.2)] rounded-[6px] flex items-center justify-center">
                            <Image src="/footericon5.svg" alt="icon3" width={18} height={13} />
                        </button>
                    </ul>
                    <h1 className="text-[18px] text-[#3d3d3d] font-bold mb-[13px]">We accept</h1>
                    <Image src="/paymentcards.svg" alt="icon3" width={224} height={26} />
                </div>
            </div>
            <div className="fixed top-[3480px]">
                <label className="text-[14px] font-normal text-[#3d3d3d] text-center">© 2021 GreenShop. All Rights Reserved.</label>
            </div>
        </div>
    )
}


export default Footer;