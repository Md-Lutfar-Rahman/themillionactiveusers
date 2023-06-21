import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      <div className="w-64 bg-gray-200">
        <ul className="py-4">
          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "home" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("home")}
          >
            <Link to="/dashboard/profile">Profile</Link>
          </li>

          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "users" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("users")}
          >
            <Link to="/dashboard/users">Users</Link>
          </li>

          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "pendingUsers" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("pendingUsers")}
          >
            <Link to="/dashboard/paindingusers">Pending Users</Link>
          </li>

          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "paymentStatus" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("paymentStatus")}
          >
            <Link to="/dashboard/paymentstatus">Payment Status</Link>
          </li>

          <hr className="border-blue-800 border-b my-2" />

          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "myPixels" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("myPixels")}
          >
            <Link to="/dashboard/mypixels">My Pixels</Link>
          </li>

          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "buyPixels" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("buyPixels")}
          >
            <Link to="/dashboard/buypixels">Buy Pixels</Link>
          </li>

          <li
            className={`px-4 py-2 cursor-pointer ${
              activeTab === "logout" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTabChange("logout")}
          >
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
