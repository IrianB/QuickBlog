import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'


const ListBlog = () => {

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    setBlogs(blog_data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
        List of Blogs
      </h1>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">#</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Blog Title</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Date</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Status</th>
              <th className="py-3 px-6 text-left text-gray-600 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return <BlogTableItem key={blog._id} blog={blog} fetchBlog={fetchBlogs} index={index} />
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ListBlog