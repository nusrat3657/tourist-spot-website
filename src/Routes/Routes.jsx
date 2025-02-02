import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error from "../components/Error";
import AllTouristSpot from "../components/pages/AllTouristSpot";
import PrivateRoute from "./PrivateRoute";
import AddTouristSpot from "../components/pages/AddTouristSpot";
import MyList from "../components/pages/MyList"
import Update from "../components/Update/Update";
import Details from "../components/Details/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-swart.vercel.app/spot')
            },
            {
                path: 'detailsSpot/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-swart.vercel.app/spot/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-swart.vercel.app/spot/${params.id}`)
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
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('https://assignment-10-swart.vercel.app/spot')
            },
            {
                path: '/add',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/list',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: () => fetch('https://assignment-10-swart.vercel.app/spot')
            },

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;

