const requireAuth = async (req, res, next) => {
  const jwt = require('jsonwebtoken');
  const User = require('../models/userModel');

  // eslint-disable-next-line no-sequences
  if (req.path === '/signup', '/login') { // Skip check on login page
    return next();
  }

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Auth token required' });
  }

  const token = authorization.split(' ')[1];
  try {
    const { _id } = jwt.verify(token, JSON.stringify());
    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = requireAuth;
