import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, index, fetchBlogs }) => {
  const { axios, deleteBlogFromState } = useAppContext();
  const [loading, setLoading] = useState(false);

  const deleteBlog = async () => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      setLoading(true);
      const { data } = await axios.post('/api/blog/delete', { id: blog._id });
      if (data.success) {
        toast.success(data.message);

        // ✅ Remove from context state immediately so homepage updates automatically
        deleteBlogFromState(blog._id);

        // Optional: refresh admin table if fetchBlogs is passed
        if (fetchBlogs) fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to delete blog');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <tr className="border-b">
      <td className="py-4 px-6">{index + 1}</td>
      <td className="py-4 px-6">{blog.title}</td>
      <td className="py-4 px-6 text-center">{new Date(blog.createdAt).toLocaleDateString()}</td>
      <td className="py-4 px-6 text-center">
        {blog.isPublished ? (
          <span className="px-2 py-1 rounded-full bg-green-100 text-green-800">Published</span>
        ) : (
          <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">Draft</span>
        )}
      </td>
      <td className="py-4 px-6 text-center flex justify-center gap-3">
        <button
          onClick={deleteBlog}
          disabled={loading}
          className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
