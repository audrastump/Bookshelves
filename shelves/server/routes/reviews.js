const router = require('express').Router();
let Review = require('../models/reviews.model');
let {LocalStorage} = require('node-localstorage') 
let localStorage = new LocalStorage('./scratch');


router.route('/').get((req, res)=> {
    Review.find({ username: req.query.username })
    .then(review => res.json(review))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
    const username = localStorage.getItem("username");
    const bookName = req.body.bookName;
    const bookDescription = req.body.bookDescription;
    const bookReview = req.body.bookReview;
    const newReview = new Review({
        username,
        bookName,
        bookDescription,
        bookReview,
    });
    console.log(newReview);
    newReview.save()
        .then(() => res.json('Review added'))
        .catch(err => res.status(400).json('Error2: ' + err));
});
module.exports = router;