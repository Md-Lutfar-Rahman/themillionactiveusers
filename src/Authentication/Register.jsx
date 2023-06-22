import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFirebase from "../firebase/UseFirebase";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const { createUser, authUser } = UseFirebase();
  console.log(authUser)
  if (authUser.email) {
    navigate('/')
  }
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };
  const handleRegister = () => {
    createUser("abdusssls@gmail.com", "2121211212", "abdul");
    if (authUser) {
      navigate("/dashboard");
    }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Handle successful registration
    //     const user = userCredential.user;
    //     console.log(user);
    //     if (user) {
    //       const requestOptions = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           name,
    //           password,
    //           email,
    //           phone,
    //           gender,
    //           address,
    //           photo,
    //         }),
    //       };
    //       fetch("http://localhost:3000/users/register", requestOptions)
    //         .then((response) => response.json())
    //         .then((data) => this.setState({ postId: data.id }));
    //     } else {
    //       console.log("Error");
    //     }
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     // Handle registration error
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //   });
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* Photo upload field */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
          id="photo-input"
        />
        <label
          htmlFor="photo-input"
          className=" mx-auto cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Upload Photo
        </label>
        {photo && <p className="mt-2 mx-auto">Selected photo: {photo.name}</p>}
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleRegister}
          className=" mx-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
