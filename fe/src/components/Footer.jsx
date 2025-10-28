import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand / About Section */}
        <div>
          <img
            src={assets.logo}
            alt="QuickBlog logo"
            className="h-10 mb-5 brightness-0 invert"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            QuickBlog empowers writers and connects readers with quality content.
            Join us in sharing ideas, stories, and insights that matter.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-transform duration-200"
            />
            <img
              src={assets.googleplus_icon}
              alt="Google Plus"
              className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>

        {/* Links Sections */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {footer_data.map((item, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-300 font-medium">QuickBlog</span> by{" "}
            <span className="text-gray-300 font-medium">GreatStack</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
