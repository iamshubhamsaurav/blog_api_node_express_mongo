const Category = require('../models/Category')

// @route       : GET /api/v1/categories
// @desc        : Get all categories
// @access      : Public
exports.getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find()
        res.status(200).json({
            success: true,
            categories: categories
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
    
}

// @route       : GET /api/v1/categories/:id
// @desc        : Get single category
// @access      : Public
exports.getCategory = async (req, res, next) => {

    try {
        const category = await Category.findById(req.params.id)
        if(!category) {
            res.status(404).json({
                success: false,
                message: "Resource Not Found"
            })
        }
        res.status(200).json({
            success: true,
            category: category
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }

    
}

// @route       : POST /api/v1/categories
// @desc        : Create category
// @access      : Private
exports.createCategory = async (req, res, next) => {
    try {
        const category = await Category.create(req.body)
        res.status(200).json({
            success: true,
            category
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: '500 Server Error!'
        })
    }
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