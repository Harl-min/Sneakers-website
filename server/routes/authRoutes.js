const { Router } = require('express');
const {signupUser, loginUser, getDashboard, forgotPassword } = require('../controllers/authControllers');
const requireAuth = require('../middleware/requireAuth')

const router = Router();

router.use(requireAuth)

router.post('/signup', signupUser);
router.get('/dashboard', getDashboard);
router.post('/login', loginUser)
router.post('/forgotpassword', forgotPassword)

module.exports = router;