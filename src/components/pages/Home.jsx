import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Banner/Gallery/Gallery";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const [isdark, setIsdark] = useState(
        JSON.parse(localStorage.getItem('isdark'))
    );
    useEffect(() => {
        localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark]);
    return (
        <div>
            <div className="flex">
                <Navbar></Navbar>
                <label className="flex cursor-pointer gap-2 mt-6 lg:ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox"
                        checked={isdark}
                        onChange={() => setIsdark(!isdark)} value="synthwave" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
            <Banner></Banner>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;