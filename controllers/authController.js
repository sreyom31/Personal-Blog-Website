require('dotenv').config()
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// create tokens
const maxAge = 3*60*60*24;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: maxAge });
}

// controller actions
module.exports.signup_get = (req, res) => {
  res.render('signup');
}

module.exports.login_get = (req, res) => {
  res.render('login');
}

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;
  try{
    const user = await User.create( { email, password } );
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000 });
    res.status(201).json({ user: user._id });
  }
  catch(err){
    console.log(err);
    res.status(400).send('error, user not created');
  }
}

module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send('new login');
}