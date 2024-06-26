import { createBrowserRouter, Outlet } from "react-router-dom";
import { Layout } from '../Components/index.js';

const AppLayout = () => {
    return (
        <>
            <Layout />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: 'example',
                element: <h1>Example</h1>
            }
        ]
    }
]);

export default router;