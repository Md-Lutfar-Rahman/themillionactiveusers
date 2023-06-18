const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-gray-800">Profile Page</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Age: 30</p>
          <p className="text-gray-600">Location: New York City, USA</p>
          <p className="text-gray-600">Occupation: Software Engineer</p>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800">About Me</h3>
            <p className="text-gray-600">
              I am a passionate and dedicated software engineer with a strong background in web development. I thrive on solving complex problems and creating innovative solutions. I have a deep understanding of various programming languages and frameworks, including JavaScript, Python, and React.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800">Education</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bachelor of Science in Computer Science from XYZ University (2012-2016)</li>
              <li>Master of Science in Software Engineering from ABC University (2017-2019)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
