"use client"
import React, { useState } from "react";
import Image from "next/image";

const ProductCart4 = () => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="relative w-[250px] h-[340px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image src="/product4.png" alt="Product1" width={250} height={250} />
            {hovered && (
                <div className="absolute top-[90px] left-0 w-full h-full flex gap-6 items-center justify-center">
                    <Image src="/hovericon1.svg" alt="Product2" width={20} height={20} />
                    <Image src="/hovericon2.svg" alt="Product3" width={20} height={20} />
                    <Image src="/hovericon3.svg" alt="Product4" width={20} height={20} />
                </div>
            )}

            <div className="mt-[31px]">
                <h2 className="font-normal text-[16px] text-[#3d3d3d]">Barberton Daisy</h2>
                <span className="font-bold text-[18px] text-[#46a358]">$119.00</span>
            </div>
        </div>
    )
}

export default ProductCart4;