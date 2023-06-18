import { useState, useRef } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null); // Create a ref for email input

  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login
        const user = result.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailPasswordLogin = () => {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful login
        const user = userCredential.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleResetPassword = () => {
    const auth = getAuth();

    const emailValue = emailRef.current.value; // Get the email value from the ref

    sendPasswordResetEmail(auth, emailValue)
      .then(() => {
        // Password reset email sent successfully
        alert("Password reset email sent to", emailValue);
      })
      .catch((error) => {
        // Handle password reset error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          ref={emailRef}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="flex justify-between">
        <button
          onClick={handleEmailPasswordLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Login with Email/Password
        </button>
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
        >
          Login with Google
        </button>
        <button
          onClick={handleResetPassword}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default Login;
