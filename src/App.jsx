import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar/Navbar";



const ROUTER = {
  HOME: "/",
};

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Layout without Navbar (for Dashboard)
const DashboardLayout = () => <Outlet />;

const router = createBrowserRouter([
  {
    element: <AppLayout />, 
    children: [
      { path: ROUTER.HOME, element: <Home /> },
  
    ],
  },
 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;