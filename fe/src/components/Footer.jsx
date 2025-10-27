import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={assets.logo} alt="logo" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-gray-400 text-sm leading-relaxed">
            QuickBlog empowers writers and connects readers with quality content.
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footer_data.map((item, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-3">{item.title}</h3>
              <ul className="space-y-2">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} QuickBlog by <span className="text-gray-300 font-medium">GreatStack</span> — All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
