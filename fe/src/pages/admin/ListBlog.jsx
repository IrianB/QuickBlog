import React, { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  // Fetch all blogs from backend
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch blogs");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
        List of Blogs
      </h1>

      <div className="overflow-x-auto mt-8">
        <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-md">
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
              {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchBlogs}
                    index={index}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500 font-medium">
                    No blogs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
