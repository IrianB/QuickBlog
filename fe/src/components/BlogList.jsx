import React, { useState } from 'react';
import { blogCategories } from '../assets/assets';

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="p-6">
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {blogCategories.map((item) => (
          <div key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer px-10 py-3 rounded-full transition-all font-medium
                ${menu === item 
                  ? 'bg-blue-700 text-white shadow-lg scale-105'
                  : 'bg-transparent text-blue-700 hover:bg-blue-100'}`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Your blog cards go here */}
      </div>
    </div>
  );
};

export default BlogList;
