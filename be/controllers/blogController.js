import ImageKit from "imagekit";
import fs from "fs";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields!" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // Use the instance method
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optional: optimize URL
    const optimizedImageUrl = `${response.url}?tr=quality-auto,format-webp,width-1280`;

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image: optimizedImageUrl,
      isPublished,
    });

    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({ isPublished: true })
    res.json({ success: true, blog })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const getBlogsById = async (req, res) => {
  const { blogId } = req.params
  try {
    const blog = await Blog.findById(blogId)
    res.json({ success: true, blog })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const deleteBlogsById = async (req, res) => {
  const { id } = req.body
  try {
    await Blog.findByIdAndDelete(id)
    res.json({ success: true, message: 'Blog successfully deleted' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const togglePublish = async (req, res) => {
  const { id } = req.body
  try {
    const blog = await Blog.findById(id)
    blog.isPublished = !blog.isPublished
    await blog.save()
    res.json({ success: true, message: 'status updated' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const addComment = async (req, res) => {
  const { blog, name, content } = req.body
  try {
    await Comment.create({blog, name, content})
    res.json({ success: true, message: 'Comment added for review' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const getAllBlogsComment = async(req, res) => {
  try {
    const { blogId } = req.body
    const comment = (await Comment.find({blog: blogId, isApproved: true})).toSorted({createadAt: -1})
    res.json({success: true, comment})
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}