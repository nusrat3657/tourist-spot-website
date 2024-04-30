import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl font-poppins mx-auto md:p-4 p-2'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;