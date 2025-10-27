import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <Header />
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <BlogList />
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
