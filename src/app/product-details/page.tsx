import React from "react";
import ProductView from "./product/product";
import Navs from "./navs/navs";
import ProductInfo from "./product-info/product-info";
import Recomends from "./recomends/recomends";

const ProductDetail = () => {
    return (
        <>
            <Navs />
            <ProductView />
            <ProductInfo />
            <Recomends />
        </>
    )
}

export default ProductDetail