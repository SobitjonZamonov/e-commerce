"use client"
import React from "react";
import Image from "next/image";


const ProductCart4 = () => {
    return (
        <div className="w-[250px] h-[340px]">
            <Image src="/product4.png" alt="Product1" width={250} height={250} />
            <div className="mt-[31px]">
                <h2 className="font-normal text-[16px] text-[#3d3d3d]">Barberton Daisy</h2>
                <span className="font-bold text-[18px] text-[#46a358]">$119.00</span>
            </div>
        </div>
    )
}

export default ProductCart4;