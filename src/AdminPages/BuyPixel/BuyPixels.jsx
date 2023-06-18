const BuyPixelsPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">BuyPixels Page</h2>

      <h3 className="text-lg font-semibold mb-2">How much Pixels:</h3>
      <p className="mb-4">
        You can purchase pixels in different quantities. Each pixel represents a unit of space on our platform where you can
        display your content. The available pixel options are:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>100 pixels</li>
        <li>500 pixels</li>
        <li>1000 pixels</li>
        <li>5000 pixels</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
      <p className="mb-4">
        We offer the following payment methods for your convenience:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Credit card</li>
        <li>Debit card</li>
        <li>PayPal</li>
        <li>Bank transfer</li>
      </ul>

      <p className="mb-4">
        Choose the desired pixel quantity and preferred payment method to proceed with your purchase. If you have any questions
        or need further assistance, please feel free to contact our support team.
      </p>
    </div>
  );
};

export default BuyPixelsPage;
