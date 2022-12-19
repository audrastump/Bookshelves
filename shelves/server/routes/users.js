const router = require('express').Router();
var session = require('express-session')

const cookieParser = require("cookie-parser");
require('dotenv').config();
let {LocalStorage} = require('node-localstorage') 
let localStorage = new LocalStorage('./scratch');

let User = require('../models/user.model');
var async = require('async');
router.route('/').get((req, res)=> {
    console.log("here too")
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err));    
});
router.post('/add', async(req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(500).json('Error: ' + err));
});
router.post('/login', async(req, res) => {
    
    const {username} = req.body;
    const user = await User.findOne({ username: username }) // finding user in db
    if (!user) {
        return res.status(400).json({ msg: 'User not found' })
    
    }
    return res.status(200).json({ msg: 'You have logged in successfully', username: username }) 
    });
router.get(`/logout`, async (req, res) => {
    localStorage.clear();
    res.status(200).send('Logout Success')
  })
//var session;
router.get('/isAuth', async (req, res) => {
if (typeof localStorage.getItem("username") !== "undefined"){
    return res.json({isLoggedIn:true, username: localStorage.getItem("username")})
}else{
    return res.json({isLoggedIn:false, username: req.session.username})
}
  
})
module.exports = router;
