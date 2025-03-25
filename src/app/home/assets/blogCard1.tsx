import React from "react";
import Image from "next/image";


const BlogCard1 = () => {
    return (
        <div className="w-[268px] h-[350px] p-[5px]">
            <Image src="/blog1.png" alt="blog1" width={268} height={196} />
            <h2 className="font-medium text-[14px] text-[#46a358] mt-[8px]">September 12  I Read in 6 minutes</h2>
            <h1 className="font-bold text-[20px] text-[#3d3d3d]">Cactus & Succulent Care Tips</h1>
            <p className="font-normal text-[14px] text-[#727272]">Cacti are succulents are easy care plants for any home or patio. </p>
            <a className="font-medium text-[14px] text-[#3d3d3d] mt-[9px]" href="#">Read More</a>
        </div>
    )
}


export default BlogCard1;