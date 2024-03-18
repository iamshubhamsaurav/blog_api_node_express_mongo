const Blog = require('../models/Blog')

// @route       : GET /api/v1/blogs
// @route       : GET /api/v1/categories/:categoryId/blogs
// @desc        : Get all blogs
// @access      : Public
exports.getBlogs = async (req, res, next) => {
    try {
        let blogs;
        if(req.params.categoryId) {
            blogs = await Blog.find({categoryId: req.params.categoryId})
        } else {
            blogs = await Blog.find()
        }
        res.status(200).json({
            success: true,
            count: blogs.length,
            blogs
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
}


// @route       : GET /api/v1/blogs/:id
// @desc        : Get single blog
// @access      : Public
exports.getBlogs = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if(!blog) {
            res.status(404).json({
                success: false,
                message: '404 Page Not Found!'
            })
        }
        res.status(200).json({
            success: true,
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
}


// @route       : POST /api/v1/blogs/
// @desc        : Create blog
// @access      : Private
exports.createBlog = async (req, res, next) => {
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json({
            success: true,
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
}


// @route       : PATCH /api/v1/blogs/
// @desc        : Update blog
// @access      : Private
exports.updateBlog = async (req, res, next) => {
    try {
        let blog = await Blog.findById(req.params.id)
        if(!blog) {
            res.status(404).json({
                success: false,
                message: '404 Page Not Found!'
            })
        }
        blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            success: true,
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
}


// @route       : DELETE /api/v1/blogs/:id
// @desc        : Delete blog
// @access      : Private
exports.deleteBlog = async (req, res, next) => {
    try {
        let blog = await Blog.findById(req.params.id)
        if(!blog) {
            res.status(404).json({
                success: false,
                message: '404 Page Not Found!'
            })
        }
        blog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            blog
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
}

