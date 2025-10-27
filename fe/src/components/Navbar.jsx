import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
            <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-10 cursor-pointer" />

            <button onClick={() => navigate('/admin')} className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium transition-all 
            hover:bg-blue-700 hover:-translate-y-0.5 cursor-pointer">
                Login
                <img src={assets.arrow} alt="arrow" className="w-4 h-4" />
            </button>
        </nav>
    )
}

export default Navbar
