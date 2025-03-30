"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-[250px] h-[340px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image src={image} alt={name} width={250} height={250} />
            {hovered && (
                <div className="absolute top-[80px] left-0 w-full h-full flex gap-6 items-center justify-center">
                    <Image src="/hovericon1.svg" alt="icon1" width={20} height={20} />
                    <Image src="/hovericon2.svg" alt="icon2" width={20} height={20} />
                    <Image src="/hovericon3.svg" alt="icon3" width={20} height={20} />
                </div>
            )}

            <div className="mt-[31px]">
                <h2 className="font-normal text-[16px] text-[#3d3d3d]">{name}</h2>
                <span className="font-bold text-[18px] text-[#46a358]">${price}</span>
            </div>
        </div>
    );
};

export default ProductCard;
