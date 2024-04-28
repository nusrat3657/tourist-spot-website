import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error from "../components/Error";
import AllTouristSpot from "../components/pages/AllTouristSpot";
import PrivateRoute from "./PrivateRoute";
import AddTouristSpot from "../components/pages/AddTouristSpot";
import MyList from "../components/pages/MyList";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/all',
                element: <AllTouristSpot></AllTouristSpot>
            },
            {
                path: '/add',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/list',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>
            },
            
        ]
    },
    {
                path: '*',
                element: <Error></Error>
            }
]);

export default router;