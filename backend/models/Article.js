const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
        title: {
            type: String
        },
        author: {
            type: String
        },
        content: {
            type: String
        }
    }, {
        collection: 'articles'
    }
)

/*let commentSchema = new Schema({

        name: {
            type: String
        },
        comment: {
            type: String
        }
    },{
        collection: 'comments'
    }
)*/


module.exports = mongoose.model('Article', articleSchema)
//module.exports = mongoose.model('Comment', commentSchema)