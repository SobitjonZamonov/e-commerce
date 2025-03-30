import React from "react";
import Image from "next/image";

const Advice = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center mt-[100px]">
            <div className="w-[1200px] h-[250px] flex justify-center items-center gap-[62px] bg-[#fbfbfb]">
                <div className="flex justify-centery gap-[40px]">
                    <Image src="/advice1.svg" alt="blog1" width={204} height={201} />
                    <Image src="/advice2.svg" alt="blog1" width={204} height={201} />
                    <Image src="/advice3.svg" alt="blog1" width={204} height={201} />
                </div>
                <div className="w-[354px]h-[250px]">
                    <h1 className="font-bold text-[18px] text-[#3d3d3d]">Would you like to join newsletters?</h1>
                    <div className="mt-[18px]">
                        <input
                            className="w-[354px] h-[40px] bg-[#fff] rounded-[6px] shadow-lg shadow-gray-300 p-[20px]"
                            type="text"
                            placeholder="enter your email address..."
                        />

                        <button className="bg-[#46a358] w-[85px] h-[40px] text-[#fff] font-bold text-[18px] rounded-br-[6px] rounded-r-[6px] roun cursor-pointer">Join</button>
                    </div>
                    <p className="w-[354px] h-[89px] font-normal text-[13px] text-[#727272] mt-[17px]">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                </div>
            </div>
            <div className="w-[1200px] h-[88px] flex justify-start items-center gap-[60px] bg-[rgba(70,163,88,0.1)] pl-[23px]">
                <div>
                    <Image src="/logo.svg" alt="logo" width={150} height={34} />
                </div>

                <div className="flex items-center gap-[10px]">
                    <Image src="/icon1.svg" alt="icon1" width={20} height={20} />
                    <div className="w-[200px] h-[44px]">
                        <label className="text-[14px] font-normal text-[#3d3d3d]">70 West Buckingham Ave.
                            Farmingdale, NY 11735</label>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <Image src="/icon2.svg" alt="icon2" width={20} height={20} />
                    <div>
                        <label className="text-[14px] font-normal text-[#3d3d3d]">contact@greenshop.com</label>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <Image src="/icon3.svg" alt="icon3" width={20} height={20} />
                    <div>
                        <label className="text-[14px] font-normal text-[#3d3d3d]">+88 01911 717 490</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advice;