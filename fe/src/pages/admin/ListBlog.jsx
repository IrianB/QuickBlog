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
        <div className="max-h-[400px] overflow-y-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">#</th>
                <th className="py-4 px-6 text-left text-gray-600 font-medium">Blog Title</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">Date</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">Status</th>
                <th className="py-4 px-6 text-center text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlog={fetchBlogs}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default ListBlog