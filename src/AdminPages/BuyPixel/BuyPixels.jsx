import { useState, useEffect } from 'react';

const BuyPixelsPage = () => {
  const [pixels, setPixels] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate the total amount based on the number of pixels
    const calculateTotalAmount = () => {
      const pixelPrice = 109; // Price per pixel in taka (BDT)
      const amount = pixels * pixelPrice;
      setTotalAmount(amount);
    };

    calculateTotalAmount();
  }, [pixels]);

  const handlePixelsChange = (e) => {
    setPixels(e.target.value);
  };

  return (
    <div className="bg-gray-200 w-3/4 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8 w-full">
        <h2 className="text-2xl font-bold mb-4">BuyPixels Page</h2>
        <form method="post" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-lg font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg font-medium mb-2">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              className="rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pixels" className="text-lg font-medium mb-2">
              Amount of Pixels:
            </label>
            <input
              type="number"
              id="pixels"
              name="pixels"
              required
              className="rounded-md border border-gray-300 px-3 py-2"
              onChange={handlePixelsChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="totalAmount" className="text-lg font-medium mb-2">
              Total Amount (Taka BDT):
            </label>
            <input
              type="text"
              id="totalAmount"
              name="totalAmount"
              value={totalAmount}
              readOnly
              className="rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="payment_qrcode"
              className="text-lg font-medium mb-2"
            >
              Payment QR Code:
            </label>
            <div className="mb-4">
              {/* Display the QR code here for users to scan */}
              <img
                src="payment_qr_code.png"
                alt="Payment QR Code"
                className="w-24 h-24"
              />
            </div>
          </div>
          <div className="flex flex-col">
          <label htmlFor="trxid" className="text-lg font-medium mb-2">
            Transaction ID:
          </label>
          <input
            type="text"
            id="trxid"
            name="trxid"
            required
            className="rounded-md border border-gray-300 px-3 py-2"
          />
        </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyPixelsPage;
