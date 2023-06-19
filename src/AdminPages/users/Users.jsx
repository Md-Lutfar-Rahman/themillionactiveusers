import { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('/users/user.json')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Users Page</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white  rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Users List</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Occupation</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="bg-gray-200">
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.age}</td>
                  <td className="border px-4 py-2">{user.occupation}</td>
                  <td className="border px-4 py-2">{user.status}</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-500 font-semibold mr-2">Edit</button>
                    <button className="text-red-500 font-semibold" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Users;
