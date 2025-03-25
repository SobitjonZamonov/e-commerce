import React from "react";
import BlogCard1 from "../assets/blogCard1";
import BlogCard2 from "../assets/blogCard2";
import BlogCard3 from "../assets/blogCard3";
import BlogCard4 from "../assets/blogCard4";





const Blog = () => {
    return (
        <div className="flex justify-center mt-[138px]">
            <div className="w-[1300px] h-[447px] flex flex-col items-center">
                <div className="mb-[35px]">
                    <h1 className="font-bold text-[30px] text-[#3d3d3d] text-center">Our Blog Posts</h1>
                    <p className="text-[14px] font-normal text-[#727272] text-center">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                </div>

                <div className="flex gap-[44px]">
                    <BlogCard1 />
                    <BlogCard2 />
                    <BlogCard3 />
                    <BlogCard4 />
                </div>
            </div>
        </div>
    )
}

export default Blog;