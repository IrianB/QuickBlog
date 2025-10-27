import React, { useState } from "react";
import { motion } from "motion/react";
import { blog_data, blogCategories } from "../assets/assets";
import BlogCards from "./BlogCards"; 

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="p-6">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {blogCategories.map((item) => (
          <motion.button
            key={item}
            onClick={() => setMenu(item)}
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer px-6 py-2 rounded-full font-medium text-sm transition-all duration-300
              ${menu === item
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCards key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
