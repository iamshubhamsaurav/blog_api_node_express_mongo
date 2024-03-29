const express = require('express')

const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category')

const blogRoute = require('./blogs')

const router = express.Router()

router.use('/:categoryId/blogs', blogRoute)

router
    .route('/')
    .get(getCategories)
    .post(createCategory)

router
    .route('/:id')
    .get(getCategory)
    .patch(updateCategory)
    .delete(deleteCategory)

module.exports = router;