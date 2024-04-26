import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-black/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto lg:p-10 md:p-10 p-3 my-10">
                <h2 className="text-4xl my-2 text-center font-bold  font-league mb-5">Login Your Account</h2>
                <hr />
                <form className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" 
                        // {...register("email", { required: true })} 
                        />
                        {/* {errors.email && <span className="text-red-500">This field is required</span>} */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full" 
                                // {...register("password", { required: true })} 
                                />
                            {/* {errors.password && <span className="text-red-500">This field is required</span>} */}
                            <span className="absolute top-4 -ml-8" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-md font-semibold mt-2">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white font-semibold text-lg">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Don't have an account? Please <Link to='/register' className="text-red-500">Register</Link></p>
                <div className='p-2  mt-6 flex justify-evenly'>
                    <button className="btn btn-outline hover:bg-black">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <button  className="btn btn-outline hover:bg-black">
                        <FaGithub></FaGithub>
                        Login with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;