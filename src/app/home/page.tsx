import React from "react";
import Header from "../../reusable/header/header";
import Hero from "./hero/hero";
import Service from "./service/service";
import Browse from "./browse/browse";
import Blog from "./blog/blog";


const Home = () => {
    return (
        <>
            <Hero />
            <Service />
            <Browse />
            <Blog />
        </>
    )
}

export default Home;