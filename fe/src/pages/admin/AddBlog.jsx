import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { axios, fetchBlogs } = useAppContext()

  const [isAdding, setisAdding] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [category, setCategory] = useState("Select Category");
  const [publish, setPublish] = useState(false);

  // Optional: AI content generator placeholder
  const generateContent = async () => {
    toast("AI content generation coming soon!");
  };

  const handlePublish = (checked) => {
    setPublish(checked);
    if (checked) toast.success("Blog will be published on submission");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setisAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished: publish,
      };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);

      if (data.success) {
        toast.success(data.message);

        // Reset form
        setImage(null);
        setTitle("");
        setsubTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("Select Category");
        setPublish(false);

        // 🔄 Refresh blog list automatically
        fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setisAdding(false);
    }
  };

  // Initialize Quill editor
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-50 p-6">
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-4xl border border-gray-200 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add New Blog
        </h2>

        {/* Upload Section */}
        <div>
          <p className="text-gray-700 font-medium mb-2">Upload Thumbnail</p>
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
          >
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="Upload preview"
              className="w-40 h-40 object-cover rounded-lg mb-3"
            />
            <span className="text-gray-600 text-sm">
              {image ? "Change Image" : "Click to Upload"}
            </span>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              accept="image/*"
              required
              id="image"
              hidden
            />
          </label>
        </div>

        {/* Blog Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Blog Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            required
            placeholder="Enter your blog title"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Blog Subtitle */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Blog Subtitle
          </label>
          <input
            onChange={(e) => setsubTitle(e.target.value)}
            value={subTitle}
            type="text"
            required
            placeholder="Enter a short subtitle"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Blog Description / Quill Editor */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 font-medium">Blog Description</p>
            <button
              onClick={generateContent}
              type="button"
              className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm hover:bg-blue-200 transition"
            >
              ✨ Generate with AI
            </button>
          </div>

          <div
            ref={editorRef}
            className="border border-gray-300 rounded-lg min-h-[250px] p-3 bg-white focus-within:ring-2 focus-within:ring-blue-400"
          ></div>
        </div>

        {/* Blog Category */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Blog Category
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Publish Checkbox */}
        <div className="flex items-center gap-3">
          <input
            onChange={(e) => handlePublish(e.target.checked)}
            type="checkbox"
            checked={publish}
            id="publish"
            className="w-5 h-5 accent-blue-500"
          />
          <label htmlFor="publish" className="text-gray-700 font-medium">
            Publish Now
          </label>
        </div>

        {/* Submit Button */}
        <button
          disabled={isAdding}
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow transition"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
