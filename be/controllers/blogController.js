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
    const blogs = await Blog.find({ isPublished: true })
    res.json({ success: true, blogs })
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
    await Comment.deleteMany({ blog: id })
    res.json({ success: true, message: 'Blog and Comment successfully deleted' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const togglePublish = async (req, res) => {
  const { id } = req.body;
  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();

    res.status(200).json({
      success: true,
      message: `Blog ${blog.isPublished ? 'published' : 'unpublished'} successfully`
    });
  } catch (error) {
    console.error('Toggle publish error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};




export const addComment = async (req, res) => {
  const { blog, name, content } = req.body
  try {
    await Comment.create({ blog, name, content })
    return res.status(201).json({ success: true, message: 'Comment added for review' })
  } catch (error) {
    console.error('Error adding comment:', error)
    return res.status(500).json({ success: false, message: error.message })
  }
}


export const getAllBlogsComment = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comment = await Comment.find({ blog: blogId, isApproved: true })
      .sort({ createdAt: -1 });
    res.json({ success: true, comments: comment })

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
