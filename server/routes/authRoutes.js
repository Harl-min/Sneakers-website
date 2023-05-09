const { Router } = require('express');
const {signupUser, loginUser, getDashboard } = require('../controllers/authControllers');
const requireAuth = require('../middleware/requireAuth')

const router = Router();

router.use(requireAuth)

router.post('/signup', signupUser);
router.get('/dashboard', getDashboard);
router.post('/login', loginUser)

module.exports = router;