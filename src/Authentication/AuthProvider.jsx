import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Login error:", error);
      throw new Error("Failed to login");
    }
  };

  const register = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Registration error:", error);
      throw new Error("Failed to register");
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log("Logout error:", error);
      throw new Error("Failed to logout");
    }
  };

  const authContextValue = {
    currentUser,
    isLoading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
