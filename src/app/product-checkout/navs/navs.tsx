import React from "react";


const Navs2 = () => {
    return (
        <div className="ml-[360px] mt-[36px]">
            <nav className="flex gap-2">
                <a href="/home"><span>Home</span></a>
                <label>/</label>
                <a href="/product-details"><span>Shop</span></a>
                <label>/</label>
                <a href="/product-cart">Checkout</a>
            </nav>
        </div>
    )
}

export default Navs2;