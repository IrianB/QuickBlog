import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md flex flex-col py-6 px-4">
      {/* Logo / Title */}
      <div className="flex items-center gap-2 px-3 mb-8">
        <img src={assets.logo} alt="Logo" className="w-8 h-8 object-contain" />
        <h2 className="text-lg font-semibold text-gray-800">Admin</h2>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-2 text-gray-600">
        {/* Dashboard */}
        <NavLink
          end
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                : 'hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
          <p className="font-medium">Dashboard</p>
        </NavLink>

        {/* Add Blog */}
        <NavLink
          to="/admin/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                : 'hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.add_icon} alt="Add Blog" className="w-5 h-5" />
          <p className="font-medium">Add Blog</p>
        </NavLink>

        {/* Blog List */}
        <NavLink
          to="/admin/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                : 'hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.list_icon} alt="Blog List" className="w-5 h-5" />
          <p className="font-medium">Blog List</p>
        </NavLink>

        {/* Comments */}
        <NavLink
          to="/admin/comments"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2.5 rounded-md transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
                : 'hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.comment_icon} alt="Comments" className="w-5 h-5" />
          <p className="font-medium">Comments</p>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
