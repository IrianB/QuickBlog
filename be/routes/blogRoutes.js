import express from 'express'
import { addBlog, deleteBlogsById, getAllBlogs, getBlogsById, togglePublish } from '../controllers/blogController.js'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'

const blogRouter = express.Router()

blogRouter.post('/add', upload.single('image'), auth, addBlog)
blogRouter.get('/all', getAllBlogs)
blogRouter.get('/:blogId', getBlogsById)
blogRouter.post('/delete', auth, deleteBlogsById)
blogRouter.post('/toggle-publish', auth, togglePublish)

export default blogRouter