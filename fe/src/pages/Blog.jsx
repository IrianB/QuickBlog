import React, { useState, useEffect } from 'react'
import { blog_data } from '../assets/assets'
import { useParams } from 'react-router-dom'




const Blog = () => {

  const {id} = useParams()


  const [data, setData] = useState(null)

  const fetchData = async () => {
    const res = blog_data.find(item => item._id === id)
    setData(res)
  }

  console.log(data)

  useEffect(() => {
    fetchData()
  }, [])


  return data ? (
    <div>Blog</div>
  ) : (
    <div>Loading...</div>
  )
}

export default Blog