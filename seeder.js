const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')

dotenv.config({ path: './config/config.env' })

mongoose.connect(process.env.MONGO_URL)

const Category = require('./models/Category')
const Blog = require('./models/Blog')

const categories = JSON.parse(fs.readFileSync('./_data/categories.json', 'utf-8'))
const blogs = JSON.parse(fs.readFileSync('./_data/blogs.json', 'utf-8'))


const importData = async () => {
    try {
        await Category.create(categories)
        await Blog.create(blogs)
        console.log('SUCCESS: Data Import Successfull'.green.inverse)
    } catch (error) {
        console.log('ERROR: Importing Data Failed'.red.inverse)
    }
    process.exit()
}

const destroyData = async () => {
    try {
        await Blog.deleteMany()
        await Category.deleteMany()
        console.log('SUCCESS: Destroying Data Successfull'.green.inverse)
    } catch (error) {
        console.log('ERROR: Deleting Data Failed'.red.inverse)
    }
    process.exit()
}

const showData = async () => {
    try {
        const categories = await Category.find()
        const blogs = await Blog.find()
        console.log('****** CATEGORIES ******\n')
        console.log(categories)
        console.log('\n\n\n****** BLOGS ******\n')
        console.log(blogs)
    } catch (error) {
        console.log('ERROR: Displaying Data Failed'.red.inverse)
    }
    process.exit()
}


if(process.argv[2] === '-i') {
    importData()
} else if(process.argv[2] === '-d') {
    destroyData()
} else if(process.argv[2] === '-s') {
    showData()
}