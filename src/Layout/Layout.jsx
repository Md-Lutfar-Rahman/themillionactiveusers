import { Outlet } from "react-router-dom";
import Navbar from "../Shaired/Navbar";
import Header from "../Shaired/Header";


const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;