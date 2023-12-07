const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('../models/userModel');
const jwt = require('jsonwebtoken')


const secret = 'ewjjjjrhsrohiweqejmtrertrettmhvd';

const createToken = (id) => {
    return jwt.sign({id}, secret, { expiresIn: '100d'})
}
// Parse JSON request bodies
app.use(bodyParser.json())

// Parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }))


// Example route
const signupUser = async (req, res) => {
  const { email, password } = req.body
console.log('details:', email, password);
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
        res.status(200).json({ status: 200, message: 'Success', email, token });
      } catch (err) {
        res.status(400).json({ status: 400, message: err.message });
      }
}

const getDashboard = (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard' });
};



module.exports = { loginUser, signupUser, getDashboard}
