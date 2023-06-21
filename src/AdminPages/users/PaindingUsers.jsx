import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PendingUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const pendingUsers = users.filter((user) => user.status === "pending");

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Pending Users</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">TrxID</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {pendingUsers.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.TrxID}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">
                <Link className="text-blue-500 underline mr-2">Active</Link>
                <Link className="text-red-500 underline">Delete</Link>
              </td>
              {/* Add more table cells with user data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingUsers;
