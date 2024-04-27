import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
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
    Swal.fire({
      title: "Logged Out!",
      text: "Your file has been logged outk.",
      icon: "success"
    });
  }
});
            })
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold  border-2  rounded-lg border-black" : ""
        }>Home</NavLink></li>
        <li><NavLink to="/all" className={({ isActive }) =>
            isActive ? "font-bold  border-2  rounded-lg border-black" : ""
        }>All Tourists Spot</NavLink></li>



        {
            user ?
                <>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "font-bold  border-2  rounded-lg border-black" : ""
                    }>Add Tourists Spot</NavLink></li>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "font-bold  border-2  rounded-lg border-black" : ""
                    }>My List</NavLink></li>
                </>
                :
                <></>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold font-lilita"><span className=" text-orange-500">Journey</span>Quest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ?
                        <>
                            <button onClick={handleSignOut} className="btn rounded-none bg-black text-white text-lg px-8">Log Out</button>


                            <Link to="/user"><div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"><div className="  rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL
                                        || "https://i.ibb.co/Y0RBQqQ/download.png"} />
                                </div></div>
                                <ul tabIndex={0} className="-ml-10 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                                    <li><a>{user?.displayName || "User Name not found"}</a></li>
                                </ul>
                            </div></Link>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <button className="btn rounded-none bg-black text-white text-lg px-8">Login</button>
                            </Link>
                            <Link to='/register'>
                                <button className="btn rounded-none bg-orange-500 text-white text-lg px-8 ml-4">Register</button>
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;