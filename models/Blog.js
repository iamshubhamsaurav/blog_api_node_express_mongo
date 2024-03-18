const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    body: {
        type: String,
        required: [true, 'Please add a body']
    },
    categoryId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Please adda a category to the blog']
    },
    featuredImage: String
}, 
{
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;

