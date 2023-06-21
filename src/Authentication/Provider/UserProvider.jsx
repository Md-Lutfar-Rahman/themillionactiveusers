import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to set the current user
  const setCurrentUserHandler = (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser: setCurrentUserHandler }}>
      {children}
    </UserContext.Provider>
  );
};
