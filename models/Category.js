const mongoose = require('mongoose')
const slugify = require('slugify')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name for the category.'],
        unique: [true, 'Name already exists. Please choose another name.'],
        trim: true,
    },
    slug: String,
    description: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category