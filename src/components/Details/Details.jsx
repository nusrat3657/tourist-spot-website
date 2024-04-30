import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const spot = useLoaderData();
    return (
        <div>
            <div className="lg:grid grid-cols-2 gap-10 my-10 lg:mx-0 mx-5">
                <div className="bg-black/20 rounded-xl p-10 py-20 animate__animated animate__rotateInDownLeft">
                    <img className="rounded-xl" src={spot.photo} alt="" />
                </div>
                <div className="animate__animated animate__rotateInDownRight">
                    <h2 className="text-black text-4xl font-bold lg:mt-0 mt-8">{spot.spot} <span className='text-lg'>{spot.country}</span></h2>
                    <p className="my-5 text-lg">{spot.description}</p>
                    <hr />

                    <p className="my-3 text-lg "><span className="font-bold mr-2">Location: </span> {spot.location}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Seasonality: </span> {spot.seasonality}</p>
                    <hr />
                    <p className="my-3 text-lg"><span className="font-bold mr-2">Travel Time: </span>{spot.travelTime}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Visitors Per Year: </span>{spot.visitors}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Average Cost: </span>{spot.cost}</p>
                    <hr />
                    <div className='flex gap-5'>
                        <p className="my-3 "><span className="font-bold mr-2">User: </span>{spot.name}</p>
                        <p className="my-3 "><span className="font-bold mr-2">Email: </span>{spot.email}</p>
                    </div>
                    <hr />
                    <div>
                        <Link to="/"><button className="btn border-2 bg-black text-white mt-4 text-lg">Go Home</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;