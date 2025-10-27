import React from "react"
import { useNavigate } from 'react-router-dom'

const BlogCards = ({blog}) => {

    const { title, description, image, category, date } = blog
    const navigate = useNavigate()

    return (

        <div 
        onClick={() => navigate(`/blog/${blog._id}`)} 
        className='flex flex-col gap-4 p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300'>
            <img src={image} alt="" className='aspect-video' />
            <span>{category} </span>
            <div>
                <h5>{title}</h5>
                <p>{description.slice(0, 80)}</p>
            </div>
        </div>
    )
}

export default BlogCards