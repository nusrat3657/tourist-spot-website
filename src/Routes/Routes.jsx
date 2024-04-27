import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error from "../components/Error";


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
                path: '/error',
                element: <Error></Error>
            }
        ]
    },
]);

export default router;