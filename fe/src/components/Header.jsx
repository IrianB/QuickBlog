import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const { setInput, input } = useAppContext()
  const inputRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    setInput(inputRef.current.value)
  }

  const clearSearch = () => {
    setInput('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.gradientBackground})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex flex-col items-center max-w-3xl w-full">
        <div className="flex items-center gap-2 bg-white/80 text-gray-800 px-6 py-2 rounded-full mt-8 shadow-sm cursor-pointer hover:bg-white/90 transition">
          <img src={assets.star_icon} alt="star" className="w-4 h-4" />
          <p className="text-sm font-medium">New: AI feature integrated</p>
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold text-white leading-tight">
          Your own{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            blogging platform
          </span>.
        </h1>

        <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed px-4 md:px-0">
          Share what matters, and write without filters. One word or a thousand, your story starts here.
        </p>

        {/* Search Form */}
        <form onSubmit={submitHandler} className="mt-6 flex w-full max-w-md">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for blogs"
            required
            className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-r-full hover:opacity-90 transition cursor-pointer"
          >
            Search
          </button>
        </form>

        
        {input && (
          <button
            onClick={clearSearch}
            className="mt-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-500 to-gray-700 rounded-full shadow-md hover:from-gray-600 hover:to-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            Clear Search
          </button>
        )}
      </div>
    </div>
  )
}

export default Header
