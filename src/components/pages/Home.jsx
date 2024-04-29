import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
// import Gallery from "../Gallery/Gallery";
// import Banner from "../Banner/Banner";
// import Gallery from "../Gallery/Gallery";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const spots = useLoaderData();
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
                <label className="flex  gap-2 mt-6 lg:ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input type="checkbox"
                        checked={isdark}
                        onChange={() => setIsdark(!isdark)} value="synthwave" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
            <Banner></Banner>
            <div>
                <h2 className="text-3xl font-bold text-center mt-10">Tourists Spot</h2>
            </div>
            <div className="md:grid grid-cols-3 lg:gap-10 space-y-3 my-10 gap-2">
                {
                    spots.map(spot => <div className="rounded-xl lg:w-[400px] border-2 border-black lg:p-8 shadow-xl md:p-5 p-6 lg:hover:scale-105 animate__animated animate__zoomIn">
                        <figure><img className=" rounded-xl" src={spot.photo} alt="" /></figure>
                        <div className="">
                            <h2 className="text-2xl font-bold mt-4 mb-2">{spot.spot} <span className="font-none text-sm">({spot.country})</span></h2>
                            <p className="font-semibold my-2">{spot.description}</p>
                            <hr />
                            <p className="font-semibold mt-2">Average Cost: <span className="font-bold">{spot.cost}</span></p>
                            <div className="flex justify-end pt-4">
                                <Link to={`detailsSpots/${spot._id}`}><button className="btn text-white bg-black">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;