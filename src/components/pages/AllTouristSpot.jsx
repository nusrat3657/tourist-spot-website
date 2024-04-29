import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const AllTouristSpot = ({ spot }) => {
    const spotData = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="text-center mt-5">
                    <h3 className="text-3xl font-bold ">All Tourists Spot: {spotData.length}</h3>
                    <details className="dropdown my-5">
                        <summary className="m-1 btn">open or close</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>
                <div className="md:grid grid-cols-3 lg:gap-10 space-y-3 my-10 gap-2">
                    {
                        spotData.map(spot => <div
                            key={spot._id}
                            spot={spot}
                            className="rounded-xl lg:w-[400px] border-2 border-black lg:p-8 shadow-xl md:p-5 p-6 lg:hover:scale-105 animate__animated animate__zoomIn">
                            <figure><img className=" rounded-xl" src={spot.photo} alt="" /></figure>
                            <div className="">
                                <h2 className="text-2xl font-bold mt-4 mb-2">{spot.spot} <span className="font-none text-sm">({spot.country})</span></h2>
                                <hr />
                                <p className="font-semibold mt-2">Average Cost: <span className="font-bold">{spot.cost}</span></p>
                                <p className="font-semibold mt-2">Visitors Per Year: <span className="font-bold">{spot.visitors}</span></p>
                                <p className="font-semibold mt-2">Travel Time: <span className="font-bold">{spot.travelTime}</span></p>
                                <p className="font-semibold mt-2">Seasonality: <span className="font-bold">{spot.seasonality}</span></p>
                                <div className="flex justify-end pt-4">
                                    <Link to={`/detailsSpot/${spot._id}`}><button className="btn text-white bg-black">View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristSpot;