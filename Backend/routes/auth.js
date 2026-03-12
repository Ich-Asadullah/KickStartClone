const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => {
    // Registration logic here
    res.send('User registered');
});

router.post('/login', (req, res) => {
    // Login logic here
    res.send('User logged in');
}); 

router.post('/logout', (req, res) => {
    // Logout logic here
    res.send('User logged out');
});

router.post('/reset-password', (req, res) => {
    // Password reset logic here
    res.send('Password reset link sent');
});


module.exports = router;