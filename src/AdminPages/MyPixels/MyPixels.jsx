import { useState, useEffect } from 'react';

const MyPixels = () => {
  const [purchasedPixels, setPurchasedPixels] = useState([]);

  useEffect(() => {
    fetch('/pixels/pixels.json')
    .then(res=>res.json())
    .then(data=>setPurchasedPixels(data))
  }, []);

  return (
    <div className='w-3/4 mx-auto mt-5'>
      <h2 className="text-xl font-bold mb-4">My Purchased Pixels</h2>
      {purchasedPixels.length === 0 ? (
        <p>No pixels purchased yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {purchasedPixels.map((pixel) => (
            <div key={pixel.id} className="border rounded-md p-4">
              <img
                src={pixel.link}
                alt="Pixel"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPixels;
