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
import Users from "../../AdminPages/users/Users";
import Profile from "../../AdminPages/Profile/Profile";
import BuyPixelsPage from "../../AdminPages/BuyPixel/BuyPixels";
import MyPixels from "../../AdminPages/MyPixels/MyPixels";
import PaymentStatus from "../../AdminPages/PaymentStatus/PaymentStatus";
import PaindingUsers from "../../AdminPages/users/PaindingUsers";
import AddPixelInfo from "../../AdminPages/AddPixelInfo/AddPixelInfo";

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
        element: 
            
              <Dashboard></Dashboard>
            
          ,
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
                element:<PaindingUsers></PaindingUsers>
            },
            {
                path:'/dashboard/addPixelsInfo',
                element:<AddPixelInfo></AddPixelInfo>
            },
            
            
        ]
    },

  ]);