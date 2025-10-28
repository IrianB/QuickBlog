import React from 'react'

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            {/* Login Card */}
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-2 drop-shadow-md">
                    Admin Login
                </h1>
                <p className="text-gray-400 text-center mb-6">
                    Enter your credentials to access the admin panel
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="email"
                            name="email"
                            required
                            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-purple-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
                            Email
                        </label>
                    </div>


                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="password"
                            name="password"
                            required
                            className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-purple-500 peer"
                            placeholder=" "
                        />
                        <label className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-0 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75">
                            Password
                        </label>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-md font-medium transition-all duration-200 hover:opacity-90 shadow-sm"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
