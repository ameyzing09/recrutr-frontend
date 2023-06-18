import React, { useState } from "react";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {isSidebarOpen && (
        <div className="bg-white shadow-md w-64">
          <div className="flex items-center justify-center mt-8">
            {/* Add your logo or branding */}
            <span className="font-bold text-lg text-gray-800">HR Backoffice Tool</span>
          </div>
          <nav className="mt-10">
            <a className="block py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:text-gray-900" href="#dashboard">
              Dashboard
            </a>
            <a className="block py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:text-gray-900" href="#employees">
              Employees
            </a>
            <a className="block py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:text-gray-900" href="#payroll">
              Payroll
            </a>
            {/* Add more sidebar menu items as needed */}
          </nav>
        </div>
      )}
      <div className="flex flex-col flex-1">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <button
                  className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                  onClick={toggleSidebar}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
                {/* Add your logo or branding */}
                <span className="font-bold text-lg text-gray-800 ml-2">HR Backoffice Tool</span>
              </div>
              <div className="flex items-center">
                {/* Add your navigation or user profile */}
                <span className="text-gray-600">John Doe</span>
                <img className="ml-2 w-8 h-8 rounded-full" src="/avatar.jpg" alt="User Avatar" />
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Add your dashboard content here */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to HR Backoffice</h1>
            <p className="text-gray-600">
              This is your HR Backoffice tool dashboard. You can start building your HR management features here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
