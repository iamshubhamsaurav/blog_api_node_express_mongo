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
    featuredImage: String
}, 
{
    timestamps: true
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;

