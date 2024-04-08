import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Layout } from './Components/index.js'
const AppLayout = () => {
  return (
    <>
      <Layout/>
      <Outlet/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:'example',
        element:(<h1>Example</h1>)
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
