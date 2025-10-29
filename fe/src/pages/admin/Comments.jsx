import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const fetchComments = async () => {
    setComments(comments_data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const filteredComments = comments.filter(
    (comment) => comment.status === filter
  )

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Comments</h1>

        {/* Filter buttons */}
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button
            onClick={() => setFilter('Approved')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === 'Approved'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter('Not Approved')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === 'Not Approved'
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="max-h-[400px] overflow-y-auto border-t border-gray-200">
        {filteredComments.length > 0 ? (
          filteredComments.map((comment, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-2 border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <div>
                <p className="text-gray-800 font-medium">{comment.user}</p>
                <p className="text-gray-600 text-sm mt-1">{comment.text}</p>
              </div>
              <span
                className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-sm ${
                  comment.status === 'Approved'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {comment.status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-6">
            No comments found for this filter.
          </p>
        )}
      </div>
    </div>
  )
}

export default Comments
