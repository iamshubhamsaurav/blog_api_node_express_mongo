const express = require('express')

const {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blog')

const router = express.Router({mergeParams: true})

router
    .route('/')
    .get(getBlogs)
    .post(createBlog)

router
    .route('/:id')
    .get(getBlog)
    .patch(updateBlog)
    .delete(deleteBlog)

module.exports = router