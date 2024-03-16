const Category = require('../models/Category')

// @route       : GET /api/v1/categories
// @desc        : Get all categories
// @access      : Public
exports.getCategories = async (req, res, next) => {
    res.status(200).json({
        success: true,
        categories: []
    })
}

// @route       : GET /api/v1/categories/:id
// @desc        : Get single category
// @access      : Public
exports.getCategories = async (req, res, next) => {
    res.status(200).json({
        success: true,
        category: {}
    })
}

// @route       : POST /api/v1/categories
// @desc        : Create category
// @access      : Private
exports.createCategory = async (req, res, next) => {
    res.status(200).json({
        success: true,
        category: {}
    })
}

// @route       : PATCH /api/v1/categories/:id
// @desc        : Update category
// @access      : Private
exports.updateCategory = async (req, res, next) => {
    res.status(200).json({
        success: true,
        category: {}
    })
}

// @route       : DELETE /api/v1/categories/:id
// @desc        : Delete category
// @access      : Private
exports.deleteCategory = async (req, res, next) => {
    res.status(200).json({
        success: true,
        category: {}
    })
}