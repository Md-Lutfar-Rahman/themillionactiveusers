const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded py-2 px-4 h-32 resize-none"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
