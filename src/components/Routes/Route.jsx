import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Layout from "../../Layout/Layout";
import Login from "../../Authentication/Login";
import Dashboard from "../../Dashboard/Dashboard";
import Register from "../../Authentication/Register";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Policy from "../../pages/Policy/Policy";
import DashboardHome from "../../Dashboard/DashboardHome";
import Users from "../../users/Users";
import Profile from "../Profile/Profile";
import BuyPixelsPage from "../../pages/BuyPixel/BuyPixels";
import MyPixels from "../MyPixels/MyPixels";
import PaymentStatus from "../PaymentStatus/PaymentStatus";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        }, 
        {
            path:'/contactUs',
            element:<ContactUs></ContactUs>
        },
        {
            path:'/policy',
            element:<Policy></Policy>
        },
        
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        

        
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard',
                element:<DashboardHome></DashboardHome>
            },
            {
                path:'/dashboard/users',
                element:<Users></Users>
            },
            {
                path:'/dashboard/profile',
                element:<Profile></Profile>
            },
            {
                path:'/dashboard/buypixels',
                element:<BuyPixelsPage></BuyPixelsPage>
            },
            {
                path:'/dashboard/mypixels',
                element:<MyPixels></MyPixels>
            },
            {
                path:'/dashboard/paymentstatus',
                element:<PaymentStatus></PaymentStatus>
            },
            {
                path:'/dashboard/paindingusers',
                element:"ssss"
            }

            
        ]
    },

  ]);