import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar/Navbar";


const AddTouristSpot = () => {

    const {user} = useContext(AuthContext)

    const handleAddSpot = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const visitors = form.visitors.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const newSpot = {name, email, spot, country, location, cost, seasonality, travelTime, visitors, photo, description}
        console.log(newSpot);

        // send data to the server
        fetch('http://localhost:5000/spot', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Spot Added Successfully",
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
                <h2 className="text-3xl font-bold mb-10 text-center ">Add Tourist Spot</h2>
                <form onSubmit={handleAddSpot}>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text  font-bold">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="User Name" value={user?.displayName} className="input input-bordered w-full" disabled />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="User Email" value={user?.email} disabled className="input input-bordered w-full" />
                            </label>

                        </div>
                    </div>
                    {/* form row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text  font-bold">Tourist Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="spot" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Country</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="country" placeholder="Country Name" className="input input-bordered w-full" />
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
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="cost" placeholder="Cost" className="input input-bordered w-full" />
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
                                <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered w-full" />
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
                                <input type="text" name="visitors" placeholder="Total Visitors" className="input input-bordered w-full" />
                            </label>

                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                                <textarea type="text" name="description" placeholder="Short Description" className="input input-bordered w-full h-20 p-2" />
                            </label>

                        </div>
                    </div>
                    <input type="submit" value="ADD" className="btn btn-block bg-black/90 text-white text-lg py-2" />
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;