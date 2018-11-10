const mongooose = require('mongoose') //Import Mongoose
const schema = mongooose.Schema;

const blogSchema = new blogSchema(
    {
        titblogId: {
            type: string,
            unique: true
        },
        title: {
            type: string,
            default: '' 
        },
        description: {
            type: string,
            default: ''
        },
        bodyHtml: {
            type: string,
            default: ''
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        category: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        tags: [],
        created: {
            type: Date,
            default: Date.now
        },
        lastModified: {
            type: Date,
            default: Date.now
        }
    }
)
mongooose.model('blog', blogSchema);
