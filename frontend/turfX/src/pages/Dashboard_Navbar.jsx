import React,{useContext, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { OwnerContext } from '../store/owner';

function Dashboard_Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const {user}=useContext(OwnerContext)

    // Function to toggle sidebar
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };

    // const userId = user
    console.log(user)
  
  return (
    <div>
      {/* Sidebar */}
      <aside
        className={`w-full lg:w-1/5 h-screen bg-[#001242] p-5 lg:fixed lg:top-0 lg:left-0 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <h2 className="text-2xl text-teal-400 font-bold mb-10">TurfX Dashboard</h2>
        <nav>
          <ul className="space-y-6 text-white">
            <li className="p-3 bg-teal-600 rounded-md hover:bg-teal-500 transition">
              <NavLink to="/dashboard">Dashboard Overview</NavLink>
            </li>
            <li className="p-3 bg-teal-600 rounded-md hover:bg-teal-500 transition">
            <NavLink to='/dashboard/add_turf'>Turf Management</NavLink>
            </li>
            <li className="p-3 bg-teal-600 rounded-md hover:bg-teal-500 transition">
            <NavLink to='/dashboard/dash_bookings'>Bookings Management</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

export default Dashboard_Navbar
