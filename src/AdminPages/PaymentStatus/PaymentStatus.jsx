import { useEffect, useState } from "react";

const PaymentStatus = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/users/user.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Calculate the total payment amount
  const calculateTotalPayment = () => {
    let totalPayment = 0;
    users.forEach((user) => {
      totalPayment += user.payment.payment_amount;
    });
    return totalPayment;
  };

  // Sort users by payment amount
  const sortUsersByPayment = () => {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => a.payment.payment_amount - b.payment.payment_amount);
    setUsers(sortedUsers);
  };

  // Filter users by payment method
  const filterUsersByPaymentMethod = (method) => {
    const filteredUsers = users.filter((user) => user.payment.payment_method === method);
    setUsers(filteredUsers);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-2">
      <div>Total Payment: {calculateTotalPayment()}</div>

      <button onClick={sortUsersByPayment}>Sort by Payment</button>
      <button onClick={() => filterUsersByPaymentMethod("Credit Card")}>Filter by Credit Card</button>
      <button onClick={() => filterUsersByPaymentMethod("PayPal")}>Filter by PayPal</button>

      <table className="table">
        <thead className="t-head">
          <tr>
            <th className="t-data">SL</th>
            <th>Total Payment received</th>
            <th>Total Pending Payments</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.payment.payment_amount}</td>
              <td>{user.payment.payment_amount}</td>
              <td>{user.payment.payment_method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentStatus;
