const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({

        name: {
            type: String
        },
        comment: {
            type: String
        }
    },{
        collection: 'comments'
    }
)


module.exports = mongoose.model('Comment', commentSchema)