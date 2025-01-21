const express = require('express');
const router = express.Router();
router.use(express.json());
const Blog = require('../models/Blog');
const jwt = require('jsonwebtoken');

function verifytoken(req, res, next) {
  let token = req.headers.token;
  try {
    if (!token) throw 'unauthorized access';
    let payload = jwt.verify(token, 'okbye');
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Unauthorized access' });
  }
}

router.post('/add', verifytoken, async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const newBlog = new Blog({ title, description, imageUrl });
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create blog', error });
  }
});
router.get('/blogs', verifytoken, async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch blogs', error });
  }
});


router.put('/api/edit', async (req, res) => {
  const { title, description, imageUrl } = req.body; // Get updated data from the request body

  try {
    // Find and update the blog post by its title
    const updatedPost = await BlogPost.findOneAndUpdate(
      { title: title }, // Using title to find the post
      { description, imageUrl }, // Fields to update
      { new: true } // Return the updated document
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Blog post not found with this title' });
    }

    // Send success response
    res.json({ message: 'Blog post updated successfully', data: updatedPost });
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ message: 'Server error while updating blog post' });
  }
});

module.exports = router;
