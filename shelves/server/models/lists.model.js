
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    username: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    books: [{type: String}]
},{
    timestamps: true,
});
const List = mongoose.models.List || mongoose.model('List', listSchema);
module.exports = List;