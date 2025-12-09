import React, { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { Link, Outlet } from "react-router";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar toggle button for mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-0 left-0 sm:hidden text-4xl text-gray-700 p-2  ${isSidebarOpen ? "left-40" : "left-0"}`}
      >
        {isSidebarOpen ? <GoSidebarCollapse /> : <GoSidebarExpand />}
      </button>

      {/* Sidebar */}
      <nav
        className={`transition-all duration-300 bg-gray-100 min-h-screen 
        ${isSidebarOpen ? "w-60" : "w-0"} sm:w-60 overflow-hidden`}
      >
        <ul className="flex flex-col gap-2 ml-8">
          <li>
            <Link to="/dashboard/">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/create">create</Link>
          </li>
          <li>
            <Link to="/dashboard/manage">Manage</Link>
          </li>
          <li>
            <Link to="/dashboard/order">Order</Link>
          </li>
          <li>
            <Link to="/dashboard/message">Messages</Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-1 p-6 mt-6 md:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
