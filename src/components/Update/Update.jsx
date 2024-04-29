import React from 'react';
// import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../Navbar/Navbar';

const Update = () => {
    // const {spot, country, location, cost, seasonality, travelTime, visitors, photo, description} = spot;
    const spotData = useLoaderData();
console.log(spotData);
    const handleUpdateSpot = event => {
        event.preventDefault();

        const form = event.target;

        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const updatedSpot = { spot, country, location, cost, seasonality, travelTime, visitors, photo, description}
        console.log(updatedSpot);

        // send data to the server
        fetch(`http://localhost:5000/spot/${spotData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Spot Updated Successfully",
                    icon: "success",
                    confirmButtonText: 'Cool'
                  });
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-black/20 lg:px-24 px-6 lg:py-16 py-6">
                <h2 className="text-3xl font-bold mb-10 text-center ">Update Tourist Spot</h2>
                <form onSubmit={handleUpdateSpot}>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text  font-bold">Tourist Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="spot" defaultValue={spotData.spot} placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Country</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" defaultValue={spotData.country} placeholder="Country Name" className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" defaultValue={spotData.location} placeholder="Location" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cost" defaultValue={spotData.cost} placeholder="Cost" className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" defaultValue={spotData.seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travelTime" defaultValue={spotData.travelTime} placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Visitors</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="visitors" defaultValue={spotData.visitors} placeholder="Total Visitors" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={spotData.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text font-bold">Description</span>
                            </label>
                            <label className="input-group">
                                <textarea type="text" name="description" defaultValue={spotData.description} placeholder="Short Description" className="input input-bordered w-full h-20 p-2" />
                            </label>

                        </div>
                    </div>
                    <input type="submit" value="UPDATE" className="btn btn-block bg-black/90 text-white text-lg py-2" />
                </form>
            </div>
        </div>
    );
};

export default Update;