const { Router } = require('express');
const authController = require('../controllers/authControllers');
// const express = require('express')



const router = Router();

// router.get('/signup', authController.signup_get);
router.post('/signup', authController.signupUser);
// router.get('/login', authController.login_get);
router.post('/login', authController.loginUser)

module.exports = router;