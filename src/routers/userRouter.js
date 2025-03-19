const express = require('express');
const router = express.Router();
const { insertUser, loginUser } = require('../controllers/userController');

router.post('/register', insertUser);
router.post('/login', loginUser);

module.exports = router;
