import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Top Navbar */}
            <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img
                        src={assets.logo}
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                {/* Logout Button */}
                <button
                    onClick={logout}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-md font-medium transition-all hover:opacity-90 cursor-pointer"
                >
                    Logout
                    <img src={assets.arrow} alt="arrow" className="w-4 h-4" />
                </button>
            </header>

            <div className="flex flex-1">
                {/* Sidebar on the left */}
                <Sidebar />

                {/* Main content */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default Layout
