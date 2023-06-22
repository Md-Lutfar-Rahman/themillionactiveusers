import { Link } from "react-router-dom";
import UseFirebase from "../firebase/UseFirebase";


const Navbar = () => { 
  // const { authUser, logoutUser } = UseFirebase();
  // console.log(authUser)
  return (
    <nav className="bg-gray-900">
      <ul className="flex items-center gap-10 px-8 py-4">
        <Link to="/" className="text-white font-semibold text-lg">
          Home
        </Link>
        <Link to="#" className="text-white font-semibold text-lg">
          Buy Pixel
        </Link>
        <Link to="/policy" className="text-white font-semibold text-lg">
          Policy
        </Link>
        <Link to="/contactUs" className="text-white font-semibold text-lg">
          Contact Us
        </Link>

        <div className="flex gap-5">
          <Link to="/dashboard" className="text-white font-semibold text-lg">
            Dashboard
          </Link>

          {/* <button onClick={()=>logoutUser()} className="text-white font-semibold text-lg">
            Logout
          </button> */}
        </div>

       
          <div className="flex gap-5">
            <Link to="/login" className="text-white font-semibold text-lg">
              Login
            </Link>
            <Link to="/register" className="text-white font-semibold text-lg">
              Register
            </Link>
          </div>
       
      </ul>
    </nav>
  );
};

export default Navbar;
