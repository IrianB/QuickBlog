import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const fetchComments = async () => {
    setComments(comments_data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const filteredComments = comments.filter((comment) =>
    filter === 'Approved'
      ? comment.isApproved === true
      : comment.isApproved === false
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
            className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition ${filter === 'Approved'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter('Not Approved')}
            className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition ${filter === 'Not Approved'
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Comments Table */}
      <div className="overflow-x-auto max-h-[450px] overflow-y-auto border border-gray-200 rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">
                Blog Title & Comment
              </th>
              <th className="py-3 px-6 text-center text-gray-600 font-medium">
                Date
              </th>
              <th className="py-3 px-6 text-center text-gray-600 font-medium">
                Status
              </th>
              <th className="py-3 px-6 text-center text-gray-600 font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredComments.length > 0 ? (
              filteredComments.map((comment, index) => (
                <CommentTableItem key={index} comment={comment} index={index} />
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-gray-500 py-6 italic"
                >
                  No comments found for this filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
