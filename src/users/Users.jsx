import { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', age: 28, occupation: 'Data Analyst' },
    { id: 3, name: 'Michael Johnson', age: 35, occupation: 'Product Manager' },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Users Page</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">Users List</h2>
          {users.map(user => (
            <div key={user.id} className="mt-4 bg-gray-200 p-4 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-md font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-600">Age: {user.age}</p>
                <p className="text-gray-600">Occupation: {user.occupation}</p>
              </div>
              <div className="flex items-center">
                <button className="text-blue-500 font-semibold mr-2">Edit</button>
                <button className="text-red-500 font-semibold" onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;
