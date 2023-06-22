import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const [users , setUsers] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:3000/users')
      .then(res =>res.json())
      .then(data=>setUsers(data))
    },[])
console.log(users)

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};
