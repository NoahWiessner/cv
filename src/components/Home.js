import React from "react";
import Cards from "./Card";
import Review from './Review';
import Design from './Design';
import Pics from './Pics'
import Footer from "./Footer";

export default function Home() {
    return(
        <> 
            <Design />
            <Cards />
            {/* <Pics /> */}
            <Review />
            <Footer />
        </>
    )
}