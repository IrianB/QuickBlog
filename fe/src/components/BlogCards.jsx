import React from "react"
import { useNavigate } from 'react-router-dom'

const BlogCards = ({blog}) => {
  const { title, description, image, category } = blog
  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/blog/${blog._id}`)} 
      className='flex flex-col gap-4 p-4 bg-white rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300'
    >
      <img src={image} alt="" className='aspect-video rounded-md object-cover' />
      <span className='text-sm font-medium text-purple-500'>{category}</span>
      <div>
        <h5 className='text-lg font-semibold text-gray-800'>{title}</h5>
        <p className='text-gray-600 text-sm'>{description.slice(0, 80)}...</p>
      </div>
    </div>
  )
}

export default BlogCards
