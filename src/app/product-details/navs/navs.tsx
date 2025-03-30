import React from "react";


const Navs = () => {
    return (
        <div className="ml-[350px] mt-[36px]">
            <nav className="flex gap-2">
                <a href="/home"><span>Home</span></a>
                <label>/</label>
                <a href="/product-details"><span>Shop</span></a>
            </nav>
        </div>
    )
}

export default Navs;