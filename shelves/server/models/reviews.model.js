const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    username: {type: String, required: true},
    bookName: {type: String, required: true},
    bookDescription: {type: String, required: true},
    bookReview: {type: Number, required: true},
},{
    timestamps: true,
});
const Review = mongoose.models.Review || mongoose.model('Review', reviewSchema);
module.exports = Review;
