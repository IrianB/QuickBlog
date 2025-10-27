import React, { useState } from "react";
import { motion } from "motion/react";
import { blog_data, blogCategories } from "../assets/assets";
import BlogCards from "./BlogCards"; // ✅ make sure this exists

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="p-6">

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {blogCategories.map((item) => (
          <motion.button
            key={item}
            onClick={() => setMenu(item)}
            layout // ✅ fixed here
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer px-10 py-3 rounded-full font-medium
              transition-all transition-colors duration-300 ease-in-out
              ${menu === item
                ? "bg-blue-700 text-white shadow-lg scale-105"
                : "bg-transparent text-blue-700 hover:bg-blue-100"
              }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
