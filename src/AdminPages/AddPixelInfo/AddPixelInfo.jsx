import { useState } from 'react';

const AddPixelInfo = () => {
  const [pixelInfo, setPixelInfo] = useState([{ id: 1, link: '' }]);

  const handleAddPixel = () => {
    const newPixel = {
      id: pixelInfo.length + 1,
      link: ''
    };
    setPixelInfo([...pixelInfo, newPixel]);
  };

  const handlePixelLinkChange = (e, id) => {
    const updatedPixelInfo = pixelInfo.map((pixel) =>
      pixel.id === id ? { ...pixel, link: e.target.value } : pixel
    );
    setPixelInfo(updatedPixelInfo);
  };

  const handleRemovePixel = (id) => {
    const updatedPixelInfo = pixelInfo.filter((pixel) => pixel.id !== id);
    setPixelInfo(updatedPixelInfo);
  };

  const handleSave = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pixelInfo)
    };

    fetch('/api/save-pixel-info', requestOptions)
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server if needed
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };

  return (
    <div className='w-3/4 mx-auto'>
      <h2 className="text-xl font-bold mb-4">Add Pixel Information</h2>
      {pixelInfo.map((pixel) => (
        <div key={pixel.id} className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            value={pixel.link}
            onChange={(e) => handlePixelLinkChange(e, pixel.id)}
            placeholder="Pixel Image Link"
            className="rounded-md border border-gray-300 px-3 py-2 flex-grow"
          />
          <button
            type="button"
            onClick={() => handleRemovePixel(pixel.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddPixel}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Pixel
      </button>
      <button
        type="button"
        onClick={handleSave}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-10 rounded ml-5"
      >
        Save
      </button>
    </div>
  );
};

export default AddPixelInfo;
