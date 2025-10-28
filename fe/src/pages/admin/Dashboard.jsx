import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const fetchData = async () => {
    setDashboardData(dashboard_data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {/* Blogs */}
        <div className="flex items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <img src={assets.dashboard_icon_1} alt="Blogs" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.blogs}</p>
            <p className="text-gray-500">Blogs</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <img src={assets.dashboard_icon_2} alt="Comments" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.comments}</p>
            <p className="text-gray-500">Comments</p>
          </div>
        </div>

        {/* Drafts */}
        <div className="flex items-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
          <img src={assets.dashboard_icon_3} alt="Drafts" className="w-12 h-12 mr-4" />
          <div>
            <p className="text-2xl font-bold text-gray-800">{dashboardData.drafts}</p>
            <p className="text-gray-500">Drafts</p>
          </div>
        </div>
      </div>

      {/* Recent Blogs */}
      {dashboardData.recentBlogs.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={assets.dashboard_icon_4}
              alt="Recent Blogs"
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              Recent Blogs
            </h2>
          </div>

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
                {dashboardData.recentBlogs.map((blog, index)=> {
                  return <BlogTableItem key={blog._id} blog={blog} fetchBlog={fetchData} index={index}/>
                })}
              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  ) 
}

export default Dashboard
