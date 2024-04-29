import { useContext } from "react";
import {   Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar/Navbar";


const MyList = () => {
    const { user } = useContext(AuthContext);
    const spots = useLoaderData();
    const remaining = spots.filter(spot => spot.email === user.email);
    console.log(remaining);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/spot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your added spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-10 text-center space-y-3">
                <h2 className="text-3xl font-bold">My Lists</h2>
                <p>User Name: {user.displayName}</p>
                <p>User Email: {user.email}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Travel Time</th>
                            <th>Total Visitors</th>
                            <th>Average Cost</th>
                            <th>Seasonality</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            remaining.map(spot => <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-bold">{spot.spot}</div>
                                            <div className="text-sm opacity-50">{spot.country}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {spot.travelTime}
                                </td>
                                <td>{spot.visitors}</td>
                                <td>{spot.cost}</td>
                                <td>{spot.seasonality}</td>
                                <td>{spot.location}</td>
                                <th>
                                    <Link to={`/update/${spot._id}`}>
                                    <button className="btn btn-ghost bg-black text-white btn-s">Update</button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(spot._id)}
                                        className="btn btn-ghost bg-red-600 text-white  btn-s ml-4">Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Travel Time</th>
                            <th>Total Visitors</th>
                            <th>Average Cost</th>
                            <th>Seasonality</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyList;