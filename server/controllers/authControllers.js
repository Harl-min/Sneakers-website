// module.exports.signup_get = (req, res) => {
//     res.render('signup');
// }

// module.exports.login_get = (req, res) => {
//     res.render('login');
// }

// // //signup user
// // // module.exports.signup_post = (req, res) => {
// // //     res.render('new signup');
// // // }


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('../models/userModel');
const jwt = require('jsonwebtoken')


const secret = 'ewjjjjrhsrohiweqejmtrertrettmhvd';

const createToken = (id) => {
    return jwt.sign({id}, secret, { expiresIn: '3d'})
}
// Parse JSON request bodies
app.use(bodyParser.json())

// Parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }))


// Example route
const signupUser = async (req, res) => {
  const { email, password } = req.body
console.log('email:', email);
console.log('password:', password);
  try {
    const user = await User.signup(email, password)

    //create token
    const token = createToken(user.id)
    res.status(200).json({ email, token })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const loginUser = async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
    
        //create token
        const token = createToken(user.id)
        res.status(200).json({ email, token })
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
}

const getDashboard = (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard' });
};



module.exports = { loginUser, signupUser, getDashboard}
