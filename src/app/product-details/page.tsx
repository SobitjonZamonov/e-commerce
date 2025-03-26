import React from "react";
import Advice from "./advice/advice";
import ProductView from "./product/product";
import Navs from "./navs/navs";
import ProductInfo from "./product-info/product-info";

const ProductDetail = () => {
    return (
        <>
            <Navs />
            <ProductView />
            <ProductInfo />
            <Advice />
        </>
    )
}

export default ProductDetail