import React, { useState, useEffect } from 'react'
import { blog_data } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Moment from 'moment'
import Navbar from '../components/Navbar'

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const res = blog_data.find(item => item._id === id)
    setData(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data ? (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Blog Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Blog Header */}
        <div className="text-center mb-10">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">
            Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            {data.title}
          </h2>
          <h4 className="text-lg text-gray-600 mt-2">{data.subTitle}</h4>
          <p className="mt-4 text-sm text-gray-500 font-medium">By Jigs Ipong</p>
        </div>

        {/* Blog Image */}
        {data.image && (
          <div className="w-full mb-10">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Blog Description / Content */}
        <div className="prose max-w-none text-gray-800 leading-relaxed">
          {data.description ? (
            <div className='rich-text' dangerouslySetInnerHTML={{ __html: data.description }}></div>
          ) : (
            <p>No content available for this blog.</p>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
    </div>
  )
}

export default Blog
