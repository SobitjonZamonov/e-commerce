import React from "react";
import Image from "next/image";

const Sales = () => {
    return (
        <div className="w-[310px] h-[470px] flex flex-col items-center justify-center bg-gradient-to-b from-[#46a3581A] to-[#46a35808] rounded-lg shadow-md">
            <div className="absolute top-[1350px]">
                <Image src="/supersale.svg" alt="Product1" width={266} height={65} />
            </div>
            <div className="mt-[80px]">
                <h2 className="text-[23px] text-[#3d3d3d] font-bold text-center">UP TO <span className="text-[#46a358]">75%</span> OFF</h2>
                <Image src="/sale.png" alt="Product1" width={266} height={250} />
            </div>
        </div>
    );
};

export default Sales;
