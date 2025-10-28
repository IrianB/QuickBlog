import React, { useState, useEffect } from 'react'
import { blog_data, comments_data, assets } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Moment from 'moment'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchData = async () => {
    const res = blog_data.find((blog) => blog._id === id)
    setData(res)
  }

  const fetchComments = async () => {
    setComments(comments_data)
  }

  const addComment = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    fetchData()
    fetchComments()
  }, [])

  return data ? (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Blog Container */}
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Blog Header */}
          <div className="text-center mb-10">
            <h3 className="text-sm text-gray-500 uppercase tracking-wide">
              Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              {data.title}
            </h2>
            <h4
              className="text-lg text-gray-600 mt-2"
              dangerouslySetInnerHTML={{ __html: data.subTitle }}
            ></h4>
            <p className="mt-4 text-sm text-gray-500 font-medium">
              By Mirabed
            </p>
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

          {/* Blog Content */}
          <div className="prose max-w-none text-gray-800 leading-relaxed mb-12">
            {data.description ? (
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
            ) : (
              <p>No content available for this blog.</p>
            )}
          </div>

          {/* Comments Section */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Comments ({comments.length})
            </h3>

            {comments.length > 0 ? (
              <div className="space-y-6">
                {comments.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={assets.user_icon}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-gray-900 font-medium">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          {Moment(item.createdAt).fromNow()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>

          {/* Add Comment Form */}
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Add a Comment
            </h4>
            <form onSubmit={addComment} className="space-y-4">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="Write your comment..."
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Submit Comment
              </button>
            </form>
          </div>

          {/* Share Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-3 font-medium">
              Share this article on social media
            </p>
            <div className="flex justify-center items-center gap-5">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
              <img
                src={assets.googleplus_icon}
                alt="Google Plus"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer*/}
      <Footer />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
    </div>
  )
}

export default Blog
