import React from "react";
import Image from "next/image";
import SearchIcon from "../assets/icon1";
import CarzineIcon from "../assets/icon2";
import BackIcon from "../assets/icon3";

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full h-[53px] px-[120px]">
            <div className="w-[1200px] flex justify-between items-center h-[53px] border-b-1 border-[#46A358]">
                <Image src="/logo.svg" alt="Logo" width={150} height={34} />

                <ul className="flex gap-[50px]">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Plant Care</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>

                <div className="flex items-center gap-[30px]">
                    <SearchIcon />
                    <CarzineIcon />
                    <button className="flex justify-center items-center gap-[4px] w-[100px] h-[35px] bg-[#46A358] text-[#fff] text-[16px] font-medium rounded-[6px]">
                        <BackIcon /> Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
