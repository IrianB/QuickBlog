import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import ListBlog from './pages/admin/ListBlog'
import AddBlog from './pages/admin/AddBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path='/admin' element={false ? <Layout /> : <Login/>}>
        <Route index element={<Dashboard />} />
        <Route path='list' element={<ListBlog />} />
        <Route path='add' element={<AddBlog />} />
        <Route path='comments' element={<Comments />} />  
      </Route>
    </Routes>
  )
}

export default App