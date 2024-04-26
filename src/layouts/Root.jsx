import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl font-poppins mx-auto md:p-4 p-2'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;