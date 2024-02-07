const express = require('express');
const router = express.Router();

// Route for user registration
router.post('/register', (req, res) => {
    // Logic for registering a new user
    res.send('User registered');
});

// Route for user login
router.post('/login', (req, res) => {
    // Logic for user login
    res.send('User logged in');
});

module.exports = router;
