import React from 'react'
import { assets } from '../../assets/assets'

const BlogTableItem = ({ blog, index, fetchBlog }) => {
  const { title, createdAt, isPublished } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors duration-200 text-center">
  <td className="py-4 px-6 text-gray-700">{index + 1}</td>
  <td className="py-4 px-6 text-gray-700 text-left">{title}</td>
  <td className="py-4 px-6 text-gray-700">{BlogDate.toDateString()}</td>
  <td className="py-4 px-6">
    <span
      className={`px-2 py-1 rounded-full text-sm ${
        isPublished
          ? 'bg-green-100 text-green-700'
          : 'bg-yellow-100 text-yellow-700'
      }`}
    >
      {isPublished ? 'Published' : 'Unpublished'}
    </span>
  </td>
  <td className="py-4 px-6 flex items-center justify-center gap-2">
    <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition">
      {isPublished ? 'Unpublish' : 'Publish'}
    </button>
    <div className="w-6 h-6 flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full cursor-pointer transition">
      <img src={assets.cross_icon} alt="Delete" className="w-3.5 h-3.5" />
    </div>
  </td>
</tr>
  )
}

export default BlogTableItem
