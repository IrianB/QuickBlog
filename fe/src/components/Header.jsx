import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div
            className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 py-16
                 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${assets.gradientBackground})` }}
        >

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">

                <div className="flex items-center gap-2 bg-white/80 text-gray-800 px-6 py-2 rounded-full mt-8 shadow-sm cursor-pointer hover:bg-white/90 transition">
                    <img src={assets.star_icon} alt="star" className="w-4 h-4" />
                    <p className="text-sm font-medium">New: AI feature integrated</p>
                </div>

                <h1 className="mt-8 whitespace-nowrap text-4xl md:text-6xl font-bold text-white leading-tight">
                    Your own{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        blogging platform
                    </span>.
                </h1>

                <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed px-4 md:px-0">
                    This is your space to think out loud, to share what matters, and to write without filters.
                    Whether it's one word or a thousand, your story starts right here.
                </p>

                <form className="mt-6 flex w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search for blogs"
                        required
                        className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-purple-500 text-white font-medium rounded-r-full hover:bg-purple-600 transition cursor-pointer"
                    >Search</button>
                </form>

            </div>
        </div>
    )
}

export default Header
