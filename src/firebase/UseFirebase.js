import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import firebaseInit from "./firebase";

//firebase initialize
firebaseInit();
const auth = getAuth();
const UseFirebase = () => {
  //   const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //is user admin

  // login with google
  const loginWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        //save user in database
        saveUser(user.email, user.displayName, "PUT");
        setUser(user);
        // history.push(redirect_uri);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setIsLoading(false));
  };
  // create user account
  const createUser = (email, password, displayName) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //set user in state
        setUser(user);
        //save user in database
        saveUser(email, displayName, "POST", `/users/register`);
        //update user display name
        updateUser(displayName);
        return user;
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setIsLoading(false));
  };
  //save user data in mongo
  const saveUser = (email, displayName, crud, urll) => {
    const user = {
      email,
      displayName,
    };
    fetch("http://localhost:3000" + urll, {
      method: crud,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // login with email and password
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  // logout user
  const logoutUser = () => {
      setIsLoading(true);
      signOut(auth)
      .then(() => {
          setUser({}); 
      })
      .catch((error) => {
        throw error;
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  // update user name
  const updateUser = (displayName) => {
    updateProfile(auth.currentUser, {
      displayName,
    })
      .then(() => {})
      .catch((error) => {
        throw error;
      });
  };

  return {
    authUser: user,
    setUser,
    createUser,
    loginUser,
    loginWithGoogle,
    logoutUser,
    isLoading,
    setIsLoading,
  };
};

export default UseFirebase;
