
const DashboardHome = () => {

  return (
    <div className="w-full pt-4 mx-2 mt-2 bg-orange-200">
      <div className=" min-h-screen">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Home</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="w-full pt-4 mx-2 mt-2 bg-orange-200 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Card 1
              </h2>
              <p>This is the content of Card 1</p>
            </div>
            <div className="w-full pt-4 mx-2 mt-2 bg-orange-200 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Card 2
              </h2>
              <p>This is the content of Card 2</p>
            </div>
            <div className="w-full pt-4 mx-2 mt-2 bg-orange-200 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Card 3
              </h2>
              <p>This is the content of Card 3</p>
            </div>
            <div className="w-full pt-4 mx-2 mt-2 bg-orange-200 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Card 4
              </h2>
              <p>This is the content of Card 4</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardHome;
